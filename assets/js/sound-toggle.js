document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('hero2-video');
  const toggle = document.getElementById('hero2-sound-toggle');
  const label = toggle ? toggle.querySelector('.mic-toggle__label') : null;
  if (!video || !toggle || !label) return;

  toggle.addEventListener('click', () => {
    video.muted = !video.muted;
    if (!video.muted) {
      video.play();
    }
    toggle.classList.toggle('is-unmuted', !video.muted);
    label.textContent = video.muted ? 'Ativar som' : 'Silenciar';
    toggle.setAttribute('aria-label', video.muted ? 'Ativar som do vídeo' : 'Silenciar vídeo');
  });
});
