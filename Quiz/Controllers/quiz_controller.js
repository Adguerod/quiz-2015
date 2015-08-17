// GET /quizes/question
exports.question =fuction (req, res){
res.render('quizes/answer', {pregunta: 'Capital de Italia'});
});


//GET /quizes/answer
exports.answer = function(req, res){
	if (req.query.respuesta === 'Roma'){
		res.render('quizes/answer', {respuesta: 'Correcto'});
} else {
	res.render('quizes/answer', {respuesta: 'Incorrecto'});
}
};