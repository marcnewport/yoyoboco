module.exports = function() {

  var $window = $(window);
  var $home = $('#home');

  var $svg = $home.find('svg');
  var $polygon = $svg.find('polygon');

  $window.on('resize', function() {

    var width = $window.width();
    var height = $window.height();

    $svg.attr({ width: width, height: height });
    $polygon.attr('points', '0 0, '+ width +' 0, '+ width +' '+ height);

  })
  .trigger('resize');
}
