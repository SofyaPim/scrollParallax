let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let montain = document.getElementById('montain');
let road = document.getElementById('road');
let text = document.getElementById('text');
window.addEventListener('scroll', function () {
    var value = window.scrollY;
    stars.style.top = value * 0.5 + 'px';
    moon.style.top = -value * 0.7 + 'px';
    moon.style.left = -value * 0.7 + 'px';
    montain.style.top = -value * 0.15 + 'px';
   road.style.top = value * 0.15 + 'px';
  text.style.top = value * 1 + 'px';
})