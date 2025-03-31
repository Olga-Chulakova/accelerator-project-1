const playButton = document.querySelector('.video__play-button');
const videoIframe = document.querySelector('.video__iframe');
const videoImage = document.querySelector('.video__image');

playButton.addEventListener('click', () => {
  videoIframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?si=j-uixdShC64SU4wE&autoplay=1&playsinline=1';
  videoIframe.setAttribute('allow', 'autoplay');
  videoImage.style.display = 'none';
  playButton.style.display = 'none';
  videoIframe.style.display = 'block';
});


// const play = () => {
//   playButton.addEventListener('click', () => {
//     videoIframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?si=uGVGnern785zKMiR';
//     videoIframe.setAttribute('allow', 'autoplay');
//     videoImage.style.display = 'none';
//     playButton.style.display = 'none';
//     videoIframe.style.display = 'block';
//   });
// };

// export { play };
