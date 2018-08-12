var express = require('express');
var router = express.Router();
var research = require('./controllers/research.controller');




module.exports = function(app){
  router.get('/getList', research.find);
  router.get('/getList', research.find);
  router.post('/assign', research.assign);
  router.post('/add', research.add);
  router.get('/comments/:id', research.comments);
  /*router.post('/editJrfInfo', student.basicInfo);
  router.get('/faculty/id/:id', faculty.id);
  router.get('/faculty/:id/edit', function(req, res){
    res.render('facultyEdit');
  });
  router.post('/editFacultyInfo', faculty.basicInfo);
  router.get('/paper/id/:id', paper.id);
  router.get('/book/id/:id', book.id);
  router.get('/jrfStudent/', function(req, res){
    res.render('jrfList');
  });
  router.get('/jrfStudentList/', student.list);
  router.get('/facultyList/', faculty.list);
  router.get('/faculty', function(req, res){
    res.render('facultyList');
  });
  router.get('/paperList/', paper.list);
  router.get('/paper/', function(req, res){
    res.render("paperList");
  });
  router.get('/bookList/', book.list);
  router.get('/book/', function(req, res){
    res.render("bookList");
  });
  router.post('/jrfStudent/create', student.create);
  router.post('/faculty/create', faculty.create);
  router.post('/paper/create', paper.create);
  router.post('/book/create', book.create);
  router.get('/list/', api.list);
  router.post('/relate/', api.relate);
  router.post('/addInsideAuthor/', api.addInsideAuthor);
  router.post('/print/', api.print);
  router.post('/saveInfo', api.saveInfo);*/
  app.use(router);
};
