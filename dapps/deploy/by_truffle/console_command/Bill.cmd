/*@CONTRACT: Bill */
Bill.address
Bill.deployed().then(ret=>instance=ret)
web3.eth.getAccounts().then(ret=>accounts=ret)

instance.ShowDeployer().then(ret=>result=ret)
instance.CreateBill("name1",{from:accounts[1],value:10}).then(ret=>result=ret)
instance.GetId(accounts[1],10,"name1").then(ret=>result=ret)
billId = result
instance.ShowBillDetail(billId).then(ret=>result=ret)

instance.BuyBill(billId,{from:accounts[2],value:10}).then(ret=>result=ret)
instance.ShowBillDetail(billId).then(ret=>result=ret)

instance.ShowBalance(accounts[1]).then(ret=>result=ret)
instance.ShowBalance(accounts[2]).then(ret=>result=ret)

instance.Withdraw({from:accounts[1]}).then(ret=>result=ret)
instance.ShowBalance(accounts[1]).then(ret=>result=ret)



result.logs[0].args

.exit
