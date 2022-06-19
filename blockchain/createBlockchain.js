var CryptoJS = require("crypto-js")
var SHA256 = require("crypto-js/sha256")
var express = require('express');
var router = express.Router();
var  blckSchema =require('./blkSchema')
require('./mongoose')



class Block{
    constructor(index,timestamp,adharNumber,previousHash=""){
        this.index=index
        this.timestamp=timestamp
        this.adharNumber=adharNumber
        this.previousHash=previousHash
        this.hash=this.calculateHash();
    }

    calculateHash(){
        return SHA256(this.index+this.previousHash+JSON.stringify(this.timestamp)+this.adharNumber).toString()
    }

    // mineBlock(difficulty){
    //     while()
    // }
}

class Blockchain{
    constructor(){
        this.chain=[this.createGensisBlock()]

    }

    createGensisBlock(){
        return new Block(0,"1/2/1","GensisBlock","0")
    }

    getLatestBlock(){
        return this.chain[this.chain.length-1]
    }

    addBlock(newBlock){
        newBlock.previousHash=this.getLatestBlock().hash
        newBlock.hash=newBlock.calculateHash()
        this.chain.push(newBlock)
    }

    isChainValid(){
        for(let i=1;i<this.chain.length;i++){
            const currentBlock=this.chain[i]
            const previousBlock=this.chain[i-1]
            if(currentBlock.hash !==currentBlock.calculateHash()){
                return false
            }
            if(currentBlock.previousHash !==previousBlock.hash){
                return false
            }
            return true
        }
    }
}

 let Coin =new Blockchain();
Coin.addBlock(new Block(1,"niranjan",123456789012))
Coin.addBlock(new Block(2,"3/2/1",123456789012))
Coin.addBlock(new Block(3,"4/5/6",123456789012))
const p=JSON.stringify(Coin)
const data=JSON.parse(p)
console.log(d)
// console.log("is Block chain valid =>"+Coin.isChainValid())

// router.post('/blockChain',async(req,res)=>{
// // Coin.addBlock(new Block(1,"niranjan",123456789012))
// // Coin.addBlock(new Block(2,"3/2/1",123456789012))
// // Coin.addBlock(new Block(3,"4/5/6",123456789012))
//    let blockChain=Coin
//    let data=await new blckSchema
//    data=blockChain
//    try{
//    data.save()
//    res.send(data)
//    }catch(e){
//     res.send(e)
//    }    


// })


// module.exports = router;