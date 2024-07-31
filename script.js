
var languages = ['বাবা', 'English', 'Arbic', 'Hindi', 'Urdu', 'Persian', 'Tamil', 'Malayalam', 'Osomia'];
var languagefiles = ['bn', 'en', 'ar', 'hi', 'ur', 'pe', 'ta', 'ma', 'os'];
var numberofimages = 18;



var windowwidth = window.innerWidth;
var windowheight = window.innerHeight;
var slideIndex = 1;





if (windowwidth == 240 && windowheight == 320) {

  //main function
  function main() {
    var body = '';
    for (var i = 0; i < languages.length; i++) {
      body += '<a id="' + languagefiles[i] + '" class="list focusable" tabindex="' + i + '" onclick="showSlider(this.id)"><img src="icons/' + languages[i] + '.png" class="icon"/>' + languages[i] + '</a>';
    }

    document.getElementById('content').innerHTML = body;
    document.getElementById('header').innerText = 'Emutional Speech';
    document.getElementById('f3').innerText = 'Exit';

    if (localStorage.getItem('listfocused') != null) { document.querySelectorAll('.focusable')[localStorage.getItem('listfocused')].focus(); } else { document.querySelectorAll('.focusable')[0].focus(); }
    $('.list').click(function () { showSlider(this.id); });

    document.body.removeEventListener('keydown', keydownslider);
    document.body.addEventListener('keydown', keydownmain);

  }


  //show slider

  function showSlider(lang) {
    document.getElementById('content').innerHTML = '';


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        var speech = xhttp.responseText;
        var speechsplit = speech.split('\n');
        var name = speechsplit[0];
        for (var i = 1; i <= numberofimages; i++) {
          document.getElementById('content').innerHTML += '<div class="body"><img class="photo" src="images/' + name + '-' + i + '.jpg"/><div class="title">' + speechsplit[i] + '</div></div>';
        }
        document.getElementsByClassName('body')[0].style.display = 'block';
        document.getElementById('header').innerText = 'বাবা';
        document.getElementById('f3').innerText = 'Quit';

      }
    }
    xhttp.open('GET', 'speeches/' + lang + '.txt', true);
    xhttp.send();

    document.body.removeEventListener('keydown', keydownmain);
    document.body.addEventListener('keydown', keydownslider);
  }



  function keydownmain(e) {
    switch (e.key) {
      case 'ArrowDown': focus(1);
        break;
      case 'Down': focus(1);
        break;
      case '8': focus(1);
        break;
      case 'ArrowUp': focus(-1);
        break;
      case 'Up': focus(-1);
        break;
      case '2': focus(-1);
        break;
      case 'Enter': showSlider(document.activeElement.id);
        break;
      case 'F2': window.close();
        break;
      case 'SoftRight': window.close();
        break;
    }
    function focus(move) {
      const currentIndex = document.activeElement.tabIndex;
      const next = currentIndex + move;
      const items = document.querySelectorAll('.focusable');
      const targetElement = items[next];
      targetElement.focus();
      localStorage.setItem('listfocused', next);
    }

  }




  function keydownslider(e) {
    if (e.key == 6 || e.key == 'ArrowRight' || e.key == 'Right') { plusSlides(1); }
    if (e.key == 4 || e.key == 'ArrowLeft' || e.key == 'Left') { minusSlides(1); }
    if (e.key == 'F2' || e.key == 'SoftRight') { window.close(); }


    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function minusSlides(n) {
      showSlides(slideIndex -= n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName('body');
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length };
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }

      slides[slideIndex - 1].style.display = 'block';
    }

  }

  window.onload = showSlider('bn');

}

else {
  document.body.innerHTML = '<div style="width: 100%; height: 100%;text-align: center;justify-content: center;   align-content: center; margin: auto 0px; align-items: center; display: flex; font-weight: bold; background: #f3f3f3; position: fixed; top: 0px; left: 0px"><div class="header" style="z-index:1; padding: 10px 0px; height: 40px">Error !</div><p style="padding: 20px; border-radius: 20px;">Your Screen <font color="red">' + windowwidth + 'x' + windowheight + '</font> Does Not Support By This Application.</p></div>';
}


  document.addEventListener('DOMContentLoaded', () => {
    getKaiAd({
      publisher: '080b82ab-b33a-4763-a498-50f464567e49',
      app: 'father',
      slot: 'father',
      onerror: err => console.error('Custom catch:', err),
      onready: ad => {
        ad.call('display');
      }
    })
  });
  document.body.addEventListener('keyup', () => {
    getKaiAd({
      publisher: '080b82ab-b33a-4763-a498-50f464567e49',
      app: 'father',
      slot: 'father',
      onerror: err => console.error('Custom catch:', err),
      onready: ad => {
        ad.call('display');
      }
    })
  });