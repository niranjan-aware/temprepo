const mongoose = require('mongoose')
const validator = require('validator')
var Thing = mongoose.Schema({}, { strict: false });
module.exports = mongoose.model('blckSchema',Thing);
// var thing = new Thing({ iAmNotInTheSchema: true });
// thing.save() // iAmNotInTheSchema is now saved to the db!!

// const blckSchema = mongoose.Schema({
//     rollNumber:{

//     },
//     name:{
//         type:String,
//         required:true
//     },
//     adharNumber:{
//         type:String,
//         required:true
//     },
//     priviousHash:{
//         type:String,
//         required:true
//     },
//     hash:{
//         type:String,
//         required:true
//     }
// })


// module.exports = mongoose.model("blockChainSchema", blckSchema);
