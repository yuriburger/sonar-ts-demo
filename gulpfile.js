var gulp = require('gulp');
var sonarqubeScanner = require('sonarqube-scanner');
 
gulp.task('sonar', function(callback) {
  sonarqubeScanner({
    serverUrl : "http://sonarqube:9000",
    options : {
    }
  }, callback);
});
