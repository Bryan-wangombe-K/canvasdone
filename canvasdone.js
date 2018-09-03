window.onload = function() {
  var canvas = document.getElementById('canvas');
  var c = canvas.getContext('2d')
  c.fillRect(150,150,50,50)
  c.beginPath()
  c.fillRect(0,0,50,60)
}
