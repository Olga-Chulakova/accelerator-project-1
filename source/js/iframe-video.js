const playButton = document.querySelector('.video__play-button');
const videoWrapper = document.querySelector('.about__video-wrapper');
const videoIframe = document.querySelector('.video__iframe');
const videoImage = videoWrapper.querySelector('.video__image');

playButton.addEventListener('click', () => {
  videoIframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?si=uGVGnern785zKMiR';
  videoIframe.setAttribute('allow', 'autoplay');
  videoImage.style.display = 'none';
  playButton.style.display = 'none';
});
