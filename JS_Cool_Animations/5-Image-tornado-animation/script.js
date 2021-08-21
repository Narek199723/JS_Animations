'use strict';


let images = [
  "url('../img/5.jfif') ",
  "url('./img/6.jfif') ",
  "url('./img/7.jfif') ",
  "url('./img/8.jfif') ",
  "url('./img/9.jfif') ",
  "url('./img/10.jfif') ",
  "url('./img/11.jfif') ",
  "url('./img/12.jfif') ",
  "url('./img/13.jfif') ",
  "url('./img/14.jfif') ",
  "url('./img/15.jfif') ",
  "url('./img/16.jpg') ",
  "url('./img/17.jpg') ",
  "url('./img/18.jpg') ",
  "url('./img/19.jpg') ",
  "url('./img/22.jpg') ",
  "url('./img/21.jpg') ",
  "url('./img/22.jpg') ",
  "url('./img/23.jpg') ",
  "url('./img/24.jpg') ",
  "url('./img/25.jpg') ",
  "url('./img/27.jfif') ",
  "url('./img/28.jpg') ",
  "url('./img/29.jpg') ",
  "url('./img/30.jpg') ",
  "url('./img/img1.jpg') ",
  "url('./img/img2.jpg') ",
  "url('./img/img3.jpg') ",
  "url('./img/img4.jpg') ",
  "url('./img/img5.jpg') ",
  "url('./img/img6.jpg') ",
];

const dropImage = function () {
  let section = document.querySelector('section');
  let drop = document.createElement('span');
  // drop.style.left = Math.random() * innerWidth + 'px';
  drop.style.top = Math.random() * innerHeight + 'px';

  let img = images[Math.floor(Math.random() * images.length)];

  let size = Math.random() * 200;
  if (size >= 50) {
    drop.style.width = 50 + size + 'px';
    drop.style.height = 50 + size + 'px';
    drop.style.backgroundImage = img;
  }

  section.appendChild(drop);
  setTimeout(() => {
    drop.remove();
    drop.style.zIndex = 10;
  }, 10000);
};
setInterval(dropImage, 100);

// ? The innerWidth property returns the width of a window's content area.

// ? The innerHeight property returns the height of a window's content area

// ? It's kind of implicit in the names. :-) window.innerWidth is the inner width of the window or more accurately viewport (not including toolbars, window chrome, etc.; but including the space occupied by the vertical scrollbar, if any). screen.width is the width of the screen (not just the browser window).

// ? So for instance, right now my browser window has an innerWidth of 1197, but if I make it wider it could be (say) 1305. By the resolution of my screen is 1920x1080, so screen.width on my machine will always be 1920, regardless of how big my browser window is.
