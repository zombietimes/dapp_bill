# [dapp_bill](https://github.com/zombietimes/dapp_bill)
This is a sample application of DApps.  

## Overview
[dapp_bill](https://github.com/zombietimes/dapp_bill) allows creating and sell and buy securities.  
It is created as a project of Truffle framework.  
It allows accessing to Ganache(Ethereum) and Loom Network.  
It allows accessing through Express server(application server).  
- [DApps : Medium](https://medium.com/swlh/understanding-dapps-decentralized-applications-8f3668ebdc9a)  
- [Truffle : Official](https://truffleframework.com/)  
- [Ganache : Official](https://truffleframework.com/docs/ganache/overview)  
- [Loom Network SDK : Official](https://loomx.io/developers/)  
- [Express : Official](https://expressjs.com/)  
- [Metamask : Official](https://metamask.io/)  

### The accountA view
Select ganche1 address.  
Create new bill.  
![dapp_bill_0000](https://user-images.githubusercontent.com/50263232/70856542-1af78680-1f22-11ea-8ad7-c82528878e85.png)  
![dapp_bill_0001](https://user-images.githubusercontent.com/50263232/70856553-4e3a1580-1f22-11ea-9888-b50d59ef55e8.png)  
  
And then, show the bill ID.  
Copy it!  
![dapp_bill_0002](https://user-images.githubusercontent.com/50263232/70856561-601bb880-1f22-11ea-8914-b3864d4f9aee.png)  
  
### The accountB view
Select ganche2 address.  
Paste the bill ID.  
Show the detail of the bill.
![dapp_bill_0003](https://user-images.githubusercontent.com/50263232/70856567-7590e280-1f22-11ea-9562-acee045da20e.png)  
![dapp_bill_0004](https://user-images.githubusercontent.com/50263232/70856571-85a8c200-1f22-11ea-8329-3e0009190ad5.png)  
![dapp_bill_0005](https://user-images.githubusercontent.com/50263232/70856575-98bb9200-1f22-11ea-91af-dbe7ff055218.png)  
  
And then, buy the bill.  
![dapp_bill_0006](https://user-images.githubusercontent.com/50263232/70856578-a7a24480-1f22-11ea-9ca9-8d756878925a.png)  

### The accountA view
Select ganche1 address.  
You can get Ether because the bill is sold.  
Show the balance.  
![dapp_bill_0007](https://user-images.githubusercontent.com/50263232/70856581-bee13200-1f22-11ea-98e4-87f59f0ab11b.png)  
![dapp_bill_0008](https://user-images.githubusercontent.com/50263232/70856587-cef91180-1f22-11ea-99f9-d5684bd325c2.png)  
![dapp_bill_0009](https://user-images.githubusercontent.com/50263232/70856591-dddfc400-1f22-11ea-8c4e-110eecb37e78.png)  

## Description
Let's run and analyze the sample DApps.  
You can understand deeply by editing the sample code.  
I think that it is worth learning the smart contract development.  
I focus on Ethereum and Loom Network as the DApps.  

### Sample DApps
I created some sample smart contracts below.  
I hope to be useful to you when you develop DApps.  
- [Hello world : HelloZombies.sol](https://github.com/zombietimes/dapp_helloWorld)
- [ERC20 : Coin20.sol](https://github.com/zombietimes/dapp_erc20)
- [ERC721 : Asset721.sol](https://github.com/zombietimes/dapp_erc721)
- [Multi contract : ImportZombies.sol](https://github.com/zombietimes/dapp_multiContract)
- [Sending Ether](https://github.com/zombietimes/dapp_sendEther)
- [Market simulattion : Trade.sol](https://github.com/zombietimes/dapp_trade)
- [Securities : Bill.sol](https://github.com/zombietimes/dapp_bill) : Here!

### Setting up the development environment.
The script file [setup0000_all](https://github.com/zombietimes/setup0000_all) is useful to set up the development environment.  
It consists of the external script files below.  
- [setup0000_all](https://github.com/zombietimes/setup0000_all)  

### Environment
This script file is for Ubuntu(Linux).  
I recommend that you use VirtualBox + Ubuntu.  

## Usage
After setting up the development environment by [setup0000_all](https://github.com/zombietimes/setup0000_all),  
run `ubuntuCmd_setupdapp_bill.sh` on Ubuntu console window.  
You can compile and deploy the sample contract by Truffle framwork.  
And then, you can access it on the blockchain  
through Express server from the browser.  

### Compile and deploy to Ganache
At first, we have to compile and deploy the smart contract.  
The role of `ubuntuCmd_setupdapp_bill.sh` is below.  
- Copy the smart contract to Truffle project.
- Compile and deploy by using Truffle commands.
- Run Truffle console to Ganache(Ethereum private test network).
- Create Express project to run the smart contract through web server.
```sh
# Ubuntu commands.
git clone https://github.com/zombietimes/dapp_bill.git
cd dapp_bill
sh ./ubuntuCmd_setupdapp_bill.sh
```
![dapp_bill_0010](https://user-images.githubusercontent.com/50263232/70856596-f0f29400-1f22-11ea-8098-91fb7487afde.png)  

### Browser and Ethereum wallet on Ganache
The next step is about browser.  
In [dapp_bill](https://github.com/zombietimes/dapp_bill), you have to send Ether to order and can receive Ether for reward to execute orders.  
It is necessary to use Ether wallet Metamask.  
Metamask allows you to access the dapps on the blockchain such as Ganahche.  
![dapp_bill_0011](https://user-images.githubusercontent.com/50263232/70856597-fea81980-1f22-11ea-9e93-b65553981ee6.png)  
![dapp_bill_0012](https://user-images.githubusercontent.com/50263232/70856601-0ff12600-1f23-11ea-9d94-0cc59326fc72.png)  

### Webserver
The final step is running the webserver.  
Run the express project.  

```sh
# Ubuntu commands.
cd ~/dapps/web/by_express/bill
node ./bin/www
```
```sh
# Browser.
http://127.0.0.1:3000
```
![dapp_bill_0013](https://user-images.githubusercontent.com/50263232/70856606-213a3280-1f23-11ea-8262-e8b8cd2c8aaf.png)  
![dapp_bill_0014](https://user-images.githubusercontent.com/50263232/70856609-3020e500-1f23-11ea-8de5-8758d6a39eb8.png)  

If it failed, show [troubleShoot](https://github.com/zombietimes/troubleShoot).  

## Requirement
I confirmed that it works on Ubuntu Desktop 18.04 in VirtualBox.  
It works on the environment below.  
- On Ubuntu.
- Google Chrome.
- [setup0000_all](https://github.com/zombietimes/setup0000_all)

## Relative link
### Overview
- [Ethereum : Official](https://www.ethereum.org/)
- [Ethereum : Wikipedia](https://en.wikipedia.org/wiki/Ethereum)
- [Loom Network : Official](https://loomx.io/)
- [Loom Network : Binance wiki](https://info.binance.com/en/currencies/loom-network)

### Development
- [Online editor : EthFiddle](https://ethfiddle.com/)
- [Online editor : Remix](https://remix.ethereum.org/)

### Learning
- [Online learning : CryptoZombies](https://cryptozombies.io/)
- [Grammar : Solidity](https://solidity.readthedocs.io/)
- [Grammar : Best Practices](https://github.com/ConsenSys/smart-contract-best-practices)

### DApps
- [DApps : CryptoKitties](https://www.cryptokitties.co/)
- [DApps : Zombie Battle ground](https://loom.games/en/)

## Messages
Do you believe that the decentralized world is coming?  
Do you want to use [DApps](https://en.wikipedia.org/wiki/Decentralized_application)?  
Why?  

## License
BSD 3-Clause, see `LICENSE` file for details.  

