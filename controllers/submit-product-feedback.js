var connection = require('./../config');
module.exports.submitProductFeedback=function(req,res){
    var uid=req.body.uid;
	var pid=req.body.pid;
	var frating=req.body.rating;
	var fdescr=req.body.descr;
    connection.query('SELECT * FROM feedback WHERE is_feedback_submitted = false AND uid_fk = ?',[uid], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'There are some error with query..'
            })
      } else {
        if(results.length > 0) {
			res.json({
				status:true,
				orders_data:results,
                message:'Orders retrieved successfully..'
			})
        }
        else {
          res.json({
            status:false,    
            message:"User does not exists.."
          });
        }
      }
    });
}