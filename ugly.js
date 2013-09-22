// ugly.js 
// this is probably the worst thing you can do to your users
// it uglifies a site with a call to uglify() and contains many functions to
// add to the ugly in your site programming.
// Lets bring back the 90s web design style with our new stuff!

// requires jquery

// Contributers
// Joshua Theze (Foxiepaws) - joshua.theze@gmail.com

// just the stub that makes everything horrible.
function uglify() {
    random_colors_all();
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
function bgc_loop () { $(this).css("background-color",get_random_color()); $(this).children().map(bgc_loop) ; }
function fgc_loop () { $(this).css("color",get_random_color()); $(this).children().map(fgc_loop) ; console.log(this);}
function random_colors_bg() {
    $('body').css("background-color",get_random_color());
    $('body').children().map(bgc_loop);
}
function random_colors_fg (){
    $('body').css("color",get_random_color());
    $('body').children().map(fgc_loop);
}
function random_colors_all() {
    random_colors_bg();
    random_colors_fg();
}


