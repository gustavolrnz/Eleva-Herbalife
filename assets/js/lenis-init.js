document.addEventListener('DOMContentLoaded', () => {
  if (typeof Lenis === 'undefined') return;

  new Lenis({
    autoRaf: true,
    duration: 1.1,
    smoothWheel: true,
    syncTouch: true,
  });
});
