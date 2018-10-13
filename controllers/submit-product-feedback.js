var connection = require('./../config');
module.exports.submitProductFeedback=function(req,res){
    var uid=req.body.uid;
	var oid=req.body.oid;
	var pid=req.body.pid;
	var frating=req.body.rating;
	var fdescr=req.body.descr;
    connection.query('INSERT INTO feedback WHERE is_feedback_submitted = true AND uid_fk = ?',[uid], function (error, results, fields) {
		// oid_fk = ?, oid
		// pid_fk = ?, pid
		// frating = ?, frating
		// fdescr = ?, fdescr
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