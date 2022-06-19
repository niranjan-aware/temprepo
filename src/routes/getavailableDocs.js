var express = require('express');
var router = express.Router();
var ContactData = require('../../clg_data_mongoose/addUserDataSchema')


router.get('/userAvailableDcos:adharNumber', function (req, res, next) {
    const AD=req.params.adharNumber
    ContactData.find({availableCertificates : AD}).then((userAvailableDcos) => {
        res.send(userAvailableDcos[0])
    }).catch((e) => {
        res.send(e)
    })



})

router.get('/getUser')

module.exports = router;