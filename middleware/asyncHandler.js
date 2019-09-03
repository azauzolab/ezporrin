module.exports = function (fn) {
  return function (req, res, next){
    Promise.resolve(fn(req, res, next))
    .then(function (result) {
      if(result){
        res.json(result)
      }
    })
    .catch(function (err) {
      res.json({
        error: err.message
      });
    });
  };
}
