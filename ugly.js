// ugly.js 
// this is probably the worst thing you can do to your users
// it uglifies a site with a call to uglify() and contains many functions to
// add to the ugly in your site programming.
// Lets bring back the 90s web design style with our new stuff!


// Contributers
// Joshua Theze (Foxiepaws) - joshua.theze@gmail.com

// just the stub that makes everything horrible.
function uglify() {

}

/* get_random_color()
returns a random hexidecimal color value */
function get_random_color() {
  var letters = '123456789ABCDEF'.split('');
  var color="#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}
