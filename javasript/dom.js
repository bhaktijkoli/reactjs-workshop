// alert("DOM Loaded");
document.body.style.background = "red";
console.log(document.body);
(function() {
  var name = document.getElementById('name');
  name.style.fontSize = '52px';
  name.style.marginTop = '100px';
  name.style.color = "white";
  console.log("Font Color of the name is", name.style.color);
  name.addEventListener('click', function() {
    document.body.style.background = "blue";
  });
})();
