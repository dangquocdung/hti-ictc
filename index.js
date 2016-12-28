var express = require('express');
var app = express();
var port = process.env.PORT || 8081;

var Sequelize = require('sequelize');

// include module sequelize
var config = {
  username: 'hatinh6t',
  password: 'hatinh6t@123',
  database: 'hatinh6t',
  host: 'dungthinh.com',
  dialect: 'mysql',
  };

// kết nối sequelize với database
var sequelize = new Sequelize(config.database, config.username, config.password, config);

var DichVu = sequelize.define('dichvu', {
  ten: {
    type: Sequelize.STRING
  },
  hinh: {
    type: Sequelize.STRING
  },
  diengiai: {
    type: Sequelize.STRING
  },
  fa: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

//Tao du lieu ban dau
sequelize.sync();


app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port);
console.log('The magic happens on port ' + port);

// routes ======================================================================
//require('./app/routes.js')(app); // load our routes and pass in our app and fully configured passport

app.get("/", function(req, res) {


  DichVu.findAll().then(function (dv) {
    res.render('index',{dichvu: dv});
  });

});

app.get("/gioi-thieu", function(req, res){
  res.render('about');
})
app.get("/nang-luc", function(req, res){
  res.render('power');
})
app.get("/dich-vu", function(req, res){
  res.render('services');
})
app.get("/tin-tuc", function(req, res){
  res.render('news');
})
app.get("/lien-he", function(req, res){
  res.render('contact');
})
app.get("/bien-dao-viet-nam", function(req, res){
  res.render('biendao');
})
