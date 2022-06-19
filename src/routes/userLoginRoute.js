var express = require('express');
var router = express.Router();
var ContactData=require('../../clg_data_mongoose/addUserDataSchema')



router.get('/userDetail', function (req, res, next) {
	//console.log(req.body);
    
	ContactData.findOne({email:req.body.email},function(err,data){
		if(data){
			
			if(data.password==req.body.password&&data.adharNumber==req.body.adharNumber&&data.firstName==req.body.firstName){
				//console.log("Done Login");
				// req.session.userId = data.unique_id;
				//console.log(req.session.userId);
                // const C_D = new ContactData(req.body)

				// ContactData.find({}).then((userDetail)=>{
				// 	let result = {
				// 		successs : true,
				// 		data : userDetail
				// 	}

                ContactData.find({}).then((userDetail)=>{
					
                    res.send(userDetail)
                }).catch((e)=>{
                    res.send(e)
                })
				
                
				
			}else{
				res.send({"Success":"Wrong password!"});
			}
		}else{
			res.send({"Success":"This Email Is not regestered!"});
		}
	});
});

module.exports = router;