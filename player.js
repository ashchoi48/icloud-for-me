function playYouTube(event, anchorEl) {
  // 로컬 파일(file://)로 열면 YouTube 임베드가 막히므로 새 탭에서 열기
  if (window.location.protocol === 'file:') return true;
  event.preventDefault();
  var wrapper = anchorEl.parentElement;
  var videoId = wrapper.getAttribute('data-yt-id');
  var title = wrapper.getAttribute('data-yt-title') || 'YouTube Video';
  wrapper.innerHTML =
    '<a href="https://www.youtube.com/watch?v=' + videoId + '" target="_blank" rel="noopener noreferrer" class="yt-fallback-bar">YouTube에서 열기 &nearr;</a>' +
    '<iframe src="https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0" title="' + title + '" ' +
    'referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  return false;
}
