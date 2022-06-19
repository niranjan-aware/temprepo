const mongoose = require('mongoose')
const validator = require('validator')


const ContactSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  middleName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    },
  },
  password: {
    type: String,
    required: true,
    // unique:true,
    trim: true,
    minlength: 7,
    // validate(value) {
    //   if (value.toLowerCase().includes('password')) {
    //     throw new Error('password can not contain password')
    //   }
    // }
  },
  
  rollNumber:{
    type:String,
    required:true
  },

  adharNumber:{
    type:Number,
    required:true,
    minlength:12
  }

  // passingYear:{
  //   type:Number
  // },

  // avilableCertificates:[{
  //   graduationCertificate:{
      
  //     grade:{
  //       type:String,
  //       required:true
  //     },
  //     year_of_passing:{
  //       type:Number,
  //       required:true
  //     }
  //   }
  // }]

  // issuedCertificates:[{
  //   graduationCertificate:[{

  //   }]
  // }]





});

module.exports = mongoose.model("ContactData", ContactSchema);