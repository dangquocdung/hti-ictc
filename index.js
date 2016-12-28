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

// Định nghĩa table USER
var User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

//Tao du lieu ban dau
User.sync({force: true}).then(function () {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});


var DichVu = sequelize.define('dichvu2', {
  dichvu: {
    type: Sequelize.STRING
  },
  tenhinh: {
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
DichVu.sync({force: true}).then(function () {
  // Table created
  return DichVu.create(
    {
      dichvu: 'Tư vấn - Quản lí',
      tenhinh: 'tuvanqlda',
      diengiai:'xxxx',
      fa:'xxxx'
    }
  );
});


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

  User.findAll().then(function (usr) {
    res.render('index',{doingu: usr});
  });



});

app.get("/about", function(req, res){
  res.render('about');
})
app.get("/power", function(req, res){
  res.render('power');
})
app.get("/services", function(req, res){
  res.render('services');
})
app.get("/bien-dao-viet-nam", function(req, res){
  res.render('biendao');
})
