(() => {
  const mobileQuery = window.matchMedia('(max-width: 768px)');

  const applySources = () => {
    const isMobile = mobileQuery.matches;
    document.querySelectorAll('video.responsive-video').forEach((video) => {
      const desired = isMobile ? video.dataset.mobile : video.dataset.desktop;
      const source = video.querySelector('source');
      if (!desired || !source || source.getAttribute('src') === desired) return;

      const wasPlaying = !video.paused;
      source.setAttribute('src', desired);
      video.load();
      if (wasPlaying) {
        video.play().catch(() => {});
      }
    });
  };

  document.addEventListener('DOMContentLoaded', applySources);
  mobileQuery.addEventListener('change', applySources);
})();
