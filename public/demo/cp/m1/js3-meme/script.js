document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('#topText').addEventListener("keyup", function() {
    document.querySelector('#topCap').textContent = document.querySelector('#topText').value;
  });

  document.querySelector('#botText').addEventListener("keyup", function() {
    document.querySelector('#botCap').textContent = document.querySelector('#botText').value;
  });

  document.querySelector('#imgUrl').addEventListener("keyup", function() {
    var mImg = document.querySelector('#imgUrl').value;
    document.querySelector('#thumbnail').setAttribute("src", mImg);
  });
});
  