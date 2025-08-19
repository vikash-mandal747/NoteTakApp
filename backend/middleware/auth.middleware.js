var jwt = require('jsonwebtoken');
require("dotenv").config()


const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if(!token){
       res.json({msg:"Token Not Found"}); 
    }
    try {
        var decoded = jwt.verify(token, process.env.JWT_SECRETKEY);
        req.userId = decoded.userId;
        req.user = decoded.user; 
        next()
    } catch (error) {
       res.json({Error:error.message})
    }


}

module.exports = auth