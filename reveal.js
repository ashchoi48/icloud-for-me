// 스크롤하면 카드가 살짝 떠오르며 나타나는 효과 (모션 최소화 설정 존중)
(function () {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var els = document.querySelectorAll('.story-card, .book-card, .finder, .hero-section');
  els.forEach(function (el) { el.classList.add('reveal'); });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.08 });
  els.forEach(function (el) { io.observe(el); });
})();
