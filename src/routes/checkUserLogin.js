var express = require('express');
var router = express.Router();
var ContactData=require('../../clg_data_mongoose/addUserDataSchema')

router.get('/logincheck', function (req, res, next) {
	//console.log(req.body);
	ContactData.findOne({email:req.body.email},function(err,data){
		if(data){
			
			if(data.password==req.body.password){
				//console.log("Done Login");
				// req.session.userId = data.unique_id;
				//console.log(req.session.userId);
				res.send({"Success":"Success!"});
                return [req.body,req.password];
				
			}else{
				res.send({"Success":"Wrong password!"});
			}
		}else{
			res.send({"Success":"This Email Is not regestered!"});
		}
	});
});


module.exports = router;