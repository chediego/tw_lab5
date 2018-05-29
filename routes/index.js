exports.index = function(req, res) {
  res.render('index');
};
exports.usuarios = function(req, res) {
  console.log(req)
  res.render('usuarios');
};
exports.ligas = function(req,res) {
  res.render('ligas');
}
