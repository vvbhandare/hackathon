var connection = require('./../config');
module.exports.authenticate=function(req,res) {
    var email=req.body.email;
    var password=req.body.password;
    connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'There are some error with query..'
            })
      } else {
        if(results.length > 0) {
            if(password == results[0].password){
                res.json({
                    status:true,
					user_profile:results[0],
					//uid:results[0].uid,
					//uid:results[0].username,
					//uid:results[0].email,
					//uid:results[0].name,
                    message:'User authenticated successfully..'
                })
            } else {
                res.json({
                  status:false,
                  message:"Email and password does not match.."
                 });
            }
        }
        else {
          res.json({
              status:false,    
            message:"Email does not exits.."
          });
        }
      }
    });
}