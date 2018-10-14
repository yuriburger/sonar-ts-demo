var gulp = require('gulp');
var sonarqubeScanner = require('sonarqube-scanner');
 
gulp.task('sonar', function(callback) {
  sonarqubeScanner({
    serverUrl : "http://192.168.99.100:31278/sonar",
    options : {
    }
  }, callback);
});
