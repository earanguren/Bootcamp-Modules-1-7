module.exports = function user(req, res, next){
    console.log("estoy en el middleware");
    next();
}
