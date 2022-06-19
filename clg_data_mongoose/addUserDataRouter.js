const express=require('express')
const ContactData=require('./addUserDataSchema')
const router=express.Router()



router.post("/addUserDataOnClgDb", async (req, res) => {
    const { firstName,middleName,lastName,email,password,rollNumber,adharNumber }= req.body
    let contact = await new ContactData({firstName:firstName,middleName:middleName,lastName:lastName,email:email,password:password,rollNumber:rollNumber,adharNumber:adharNumber });
    try{
    contact.save()
        res.send(contact)
    }catch(e){
        res.send(e)
    }
 })

 module.exports=router





//  ,availableCertificates,graduationCertificate,passinYear
//,availableCertificates:availableCertificates,graduationCertificate:graduationCertificate,passinYear:passinYear