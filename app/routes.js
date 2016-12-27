

module.exports = function(app) {

    // show the home page (will also have our login links)
    app.get("/", function(req, res) {

      res.render('about');

    });

    app.get("/about", function(req, res) {

      res.render('about');

    });

    app.get("/power", function(req, res) {

      res.render('power');

    });

    app.get("/services", function(req, res) {

      res.render('services');

    });

    app.get("/contact", function(req, res) {

      res.render('contact');

    });

    app.get("/bien-dao-viet-nam", function(req, res) {

      res.render('biendao');

    });
  }
