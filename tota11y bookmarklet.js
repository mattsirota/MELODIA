/**
 * Adds accessibility tool tota11y to the page
 */
(function () {
  var totally = document.createElement('script');
  totally.src = 'https://cdn.rawgit.com/Khan/tota11y/0.1.3/build/tota11y.min.js';
  document.head.appendChild(totally);
})();
