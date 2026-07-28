document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('hero2-video');
  const toggle = document.getElementById('hero2-sound-toggle');
  if (!video || !toggle) return;

  toggle.addEventListener('click', () => {
    video.muted = !video.muted;
    if (!video.muted) {
      video.play();
    }
    toggle.textContent = video.muted ? '🔇' : '🔊';
    toggle.setAttribute('aria-label', video.muted ? 'Ativar som do vídeo' : 'Silenciar vídeo');
  });
});
