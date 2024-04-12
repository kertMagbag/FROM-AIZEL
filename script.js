function showIdol() {
  var idol = document.querySelector('.idol');
  idol.style.display = 'block';
  idol.style.marginBottom = '0';
  idol.style.position = 'absolute';
  idol.style.top = '90px';
  idol.style.left = '50%';
  idol.style.transform = 'translateX(-50%)';
  var text = document.querySelector('.aizel');
  var textContent = "Aizel Picardal";
  var index = 0;

  function animateText() {
      if (index < textContent.length) {
          text.textContent += textContent.charAt(index);
          index++;
          setTimeout(animateText, 100); 
      }
  }

  animateText();
}
