module.exports = function(app,pool) {

// normal routes ===============================================================

    // show the home page (will also have our login links)
    app.get("/", function(req, res) {

      pool.getConnection(function(err,connection){
          if (err) {
            res.json({"code" : 100, "status" : "Error in connection database"});
            return;
          }

          console.log('connected as id ' + connection.threadId);

          var sql = 'select * from dichvu';

          connection.query(sql,function(err,result){
              if (err) throw err;

              res.render('index',{dichvu: result});
                  // res.json(result);

          });

          connection.on('error', function(err) {
                res.json({"code" : 100, "status" : "Error in connection database"});
                return;
          });
      });


    });

    app.get("/about", function(req, res) {

      res.render('about.ejs');

    });

    app.get("/services", function(req, res) {

      res.render('services.ejs');

    });

    app.get("/contact", function(req, res) {

      res.render('contact.ejs');

    });
  }
