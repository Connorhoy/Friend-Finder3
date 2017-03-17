// Required packages.
var path = require('path');

// Routing URLs
module.exports = function(app) {
    // Handle the survey page.
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });

    // Showing home page.
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });
}