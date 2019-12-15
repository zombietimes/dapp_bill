var ZTIMES = ZTIMES || {};

ZTIMES.ACCESSOR = {
  isValid: true,
  web3Js: null,
  xAddressContract: null,
  instance: null,
  init: async function(){
    if((typeof window.ethereum !== 'undefined')||(typeof window.web3 !== 'undefined')){
      const provider = window['ethereum'] || window.web3.currentProvider;
      this.web3Js = new Web3(provider);
      ethereum.autoRefreshOnNetworkChange = false;
      const accounts = await ethereum.enable()
      this.xAddressMetaMask = accounts[0];
      console.log("xAddressMetaMask : " + this.xAddressMetaMask);
      console.log("isMetaMask : " + ethereum.isMetaMask);
      console.log("networkVersion : " + ethereum.networkVersion);
      this.initContract();
      this.isValid = true;
      ethereum.on('accountsChanged',function(accounts){
        console.log("changed : " + accounts);
        ZTIMES.ACCESSOR.xAddressMetaMask = accounts[0];
      });
    }
    else{
      this.isValid = false;
      console.log("MetaMask is not valid.");
      alert("It is necessary to MetaMask plugin for Google Chrome.");
    }
  },
  IsValidAddress: function(xSelf){
    if(this.isValid == false){
      alert("Invalid");
      return false;
    }
    return this.web3Js.utils.isAddress(xSelf);
  },
  initContract: function(){
//    const contractABI = [
//    ];
//    this.xAddressContract = "";
//    this.instance = new this.web3Js.eth.Contract(contractABI,this.xAddressContract);
//    return this.instance;
    const contractJson = this.getContractJson();
    const contractABI = contractJson["abi"];
    const networkId = ethereum.networkVersion;
    this.xAddressContract = contractJson["networks"][networkId].address;
    this.instance = new this.web3Js.eth.Contract(contractABI,this.xAddressContract);
    return this.instance;
  },
  getContractJson: function(){
    // @note: abiJson_xxxx.js is required.
    return AbiJson;
  },
  GetAddress: function(){
    if(this.isValid == false){
      alert("Invalid");
      return "";
    }
    const xAddressSelf = ethereum.selectedAddress;
    // console.log(xAddressSelf);
    return xAddressSelf;
  },
  ContractCall: async function(strMethod,...params){
    if(this.isValid == false){
      alert("Invalid");
      return "";
    }
    let result = "";
    const method = this.getMethod(strMethod);
    const payload = this.getPayload(params);
    const applyMethod = method.apply(this,params);
    const applyCall = applyMethod.call.apply(this,payload);
    await applyCall.then(function(ret){
      result = ret;
    });
    return result;
  },
  ContractSend: async function(strMethod,...params){
    if(this.isValid == false){
      alert("Invalid");
      return;
    }
    const method = this.getMethod(strMethod);
    const payload = this.getPayload(params);
    const applyMethod = method.apply(this,params);
    if(payload === undefined){
      await applyMethod.send().on("error",function(error){
        console.log(error);
      });
    }
    else{
      await applyMethod.send(payload).on("error",function(error){
        console.log(error);
      });
    }
  },
  getMethod: function(strMethod){
    const method = this.instance.methods[strMethod];
    return method;
  },
  getPayload: function(params){
    const paramsLast = params.slice(-1)[0];
    const type = Object.prototype.toString.call(paramsLast);
    if(type === "[object Object]"){   // pairs
      const payload = params.pop();
      return payload;
    }
    else{
      return undefined;
    }
  },
};
