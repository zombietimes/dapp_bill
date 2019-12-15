pragma solidity >= 0.5.0;

contract Bill {
  address private s_xDeployer;
  constructor() public {
    require(msg.sender != address(0));
    s_xDeployer = msg.sender;
  }
  function destructor() public {
    require(msg.sender == s_xDeployer);
    selfdestruct(msg.sender);
  }
  struct Detail {
    address xOwner;
    uint deposit;
    string name;
  }
  mapping (uint => Detail) private s_bills;
  mapping (address => uint) private s_balances;
  function CreateBill(string memory name) public payable {
    require(msg.sender != address(0));
    require(msg.value > 0);
    bytes32 name32 = keccak256(abi.encodePacked(name));
    require(name32 != "");
    address xOwner = msg.sender;
    uint deposit = msg.value;
    uint billId = GetId(xOwner,deposit,name);
    require(name32 != keccak256(abi.encodePacked(s_bills[billId].name)), "Duplicated name.");
    s_bills[billId] = Detail(xOwner,deposit,name);
  }
  function GetId(
    address xOwner,
    uint deposit,
    string memory name
  ) public pure returns(uint billId) {
    bytes32 id32 = keccak256(abi.encodePacked(xOwner,deposit,name));
    billId = uint(sha256(abi.encode(id32)));
  }
  function BuyBill(uint billId) public payable {
    require(msg.sender != address(0));
    require(msg.value >= s_bills[billId].deposit, "Too cheap.");
    address xOwnerOld = s_bills[billId].xOwner;
    require(msg.sender != xOwnerOld, "Self trading.");
    uint depositOld = s_bills[billId].deposit;
    s_bills[billId].xOwner = msg.sender;
    s_bills[billId].deposit = msg.value;
    s_balances[xOwnerOld] += depositOld;
  }
  function Withdraw() public payable {
    require(msg.sender != address(0));
    uint deposit = s_balances[msg.sender];
    if(deposit > 0){
      s_balances[msg.sender] = 0;
      msg.sender.transfer(deposit);
    }
  }
  function ShowDeployer() public view returns(address xDeployer) {
    xDeployer = s_xDeployer;
  }
  function ShowBillDetail(uint billId) public view returns(
    address xOwner,
    uint deposit,
    string memory name
  ) {
    xOwner = s_bills[billId].xOwner;
    deposit = s_bills[billId].deposit;
    name = s_bills[billId].name;
  }
  function ShowBalance(address xSelf) public view returns(uint balance) {
    balance = s_balances[xSelf];
  }
}
