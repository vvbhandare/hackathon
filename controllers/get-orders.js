var connection = require('./../config');
module.exports.authenticate=function(req,res){
    var uid=req.body.uid;
    connection.query('SELECT * FROM orders WHERE uid_fk = ?',[uid], function (error, results, fields) {
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