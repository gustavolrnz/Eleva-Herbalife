document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.site-section--audio');
  const video = document.getElementById('hero2-video');
  const toggle = document.getElementById('hero2-sound-toggle');
  const label = toggle ? toggle.querySelector('.mic-toggle__label') : null;
  if (!section || !video || !toggle || !label) return;

  const setMuted = (muted) => {
    video.muted = muted;
    toggle.classList.toggle('is-unmuted', !muted);
    label.textContent = muted ? 'Ative o som' : 'Silenciar';
    toggle.setAttribute('aria-label', muted ? 'Ativar som do vídeo' : 'Silenciar vídeo');
  };

  toggle.addEventListener('click', () => {
    setMuted(!video.muted);
    if (!video.muted) {
      video.play();
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
        setMuted(true);
      }
    });
  }, { threshold: 0 });

  observer.observe(section);
});
