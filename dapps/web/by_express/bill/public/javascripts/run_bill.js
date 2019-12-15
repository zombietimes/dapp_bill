ZTIMES.BLOCKCHAIN = {
  init: function(){
    console.log("ZTIMES.BLOCKCHAIN.init()");
    this.price = 240;
  },
  test: async function(){
    console.log("ZTIMES.BLOCKCHAIN.test()");
  },
  CreateBill: async function(name){
    const xAddressSelf = ZTIMES.ACCESSOR.GetAddress();
    await ZTIMES.ACCESSOR.ContractSend('CreateBill',name,{from:xAddressSelf,value:this.price});
  },
  GetId: async function(name){
    const xAddressSelf = ZTIMES.ACCESSOR.GetAddress();
    const billId = await ZTIMES.ACCESSOR.ContractCall('GetId',xAddressSelf,this.price,name,{from:xAddressSelf});
    return billId;
  },
  ShowBillDetail: async function(billId){
    const xAddressSelf = ZTIMES.ACCESSOR.GetAddress();
    const result = await ZTIMES.ACCESSOR.ContractCall('ShowBillDetail',billId,{from:xAddressSelf});
    const detail = { xOwner: result.xOwner, deposit: result.deposit, name: result.name };
    return detail;
  },
  BuyBill: async function(billId){
    const xAddressSelf = ZTIMES.ACCESSOR.GetAddress();
    await ZTIMES.ACCESSOR.ContractSend('BuyBill',billId,{from:xAddressSelf,value:this.price});
  },
  ShowBalance: async function(){
    const xAddressSelf = ZTIMES.ACCESSOR.GetAddress();
    const balance = await ZTIMES.ACCESSOR.ContractCall('ShowBalance',xAddressSelf,{from:xAddressSelf});
    return balance;
  },
  Withdraw: async function(){
    const xAddressSelf = ZTIMES.ACCESSOR.GetAddress();
    await ZTIMES.ACCESSOR.ContractSend('Withdraw',{from:xAddressSelf});
  },
}

ZTIMES.GUI = {
  init: function(){
    console.log("ZTIMES.GUI.init()");
    this.isTouch = 'ontouchend' in document;
    this.setup();
  },
  test: function(){
    console.log("ZTIMES.GUI.test()");
  },
  setup: function(){
    this.addKeyUp('iCreateBill',async function(){
      const name = ZTIMES.GUI.getValueText('iName');
      await ZTIMES.BLOCKCHAIN.CreateBill(name);
    },false);
    this.addKeyUp('iGetId',async function(){
      const name = ZTIMES.GUI.getValueText('iName');
      const billId = await ZTIMES.BLOCKCHAIN.GetId(name);
      ZTIMES.GUI.setValueText('iBillId',billId);
      console.log('billId: ' + billId);
    },false);
    this.addKeyUp('iShowBillDetail',async function(){
      const billId = ZTIMES.GUI.getValueText('iBillId');
      const detail = await ZTIMES.BLOCKCHAIN.ShowBillDetail(billId);
      ZTIMES.GUI.setValueText('iOwner', detail.xOwner);
      ZTIMES.GUI.setValueText('iDeposit', detail.deposit);
      ZTIMES.GUI.setValueText('iName', detail.name);
    },false);
    this.addKeyUp('iBuyBill',async function(){
      const billId = ZTIMES.GUI.getValueText('iBillId');
      await ZTIMES.BLOCKCHAIN.BuyBill(billId);
    },false);
    this.addKeyUp('iShowBalance',async function(){
      const balance = await ZTIMES.BLOCKCHAIN.ShowBalance();
      ZTIMES.GUI.setValueText('iBalance',balance);
      console.log('balance: ' + balance);
    },false);
    this.addKeyUp('iWithdraw',async function(){
      await ZTIMES.BLOCKCHAIN.Withdraw();
    },false);
  },
  keyDown: function(){
    return (this.isTouch ? 'touchstart':'mousedown');
  },
  keyMove: function(){
    return (this.isTouch ? 'touchmove':'mousemove');
  },
  keyUp: function(){
    return (this.isTouch ? 'touchend':'mouseup');
  },
  addKeyUp: function(id,action){
    try{
      document.getElementById(id).addEventListener(this.keyUp(),action,false);
    }
    catch(e){ console.log(e); }
    finally{}
  },
  addChange: function(id,action){
    try{
      document.getElementById(id).addEventListener('change',action,false);
    }
    catch(e){ console.log(e); }
    finally{}
  },
  setValueText: function(id,text){
    try{
      document.getElementById(id).value = text;
    }
    catch(e){ console.log(e); }
    finally{}
  },
  getValueText: function(id){
    try{
      return document.getElementById(id).value;
    }
    catch(e){ console.log(e); }
    finally{}
  },
}

ZTIMES.RUN = {
  init: function(){
    ZTIMES.ACCESSOR.init();
    ZTIMES.BLOCKCHAIN.init();
    ZTIMES.GUI.init();
  },
  test: async function(){
    ZTIMES.BLOCKCHAIN.test();
    ZTIMES.GUI.test();
  },
};

// https://metamask.github.io/metamask-docs/
window.addEventListener('load',async function(){
  ZTIMES.RUN.init();
  ZTIMES.RUN.test();
});
