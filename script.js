function handlePageTransition(event) {
  event.preventDefault();

  const nextPageURL = event.currentTarget.getAttribute('href');
  const nextPageClass = event.currentTarget.classList.contains('next-link') ? 'next' : 'previous';
  const currentPage = event.currentTarget.closest('.page');

  currentPage.classList.add(nextPageClass);

  setTimeout(function() {
    window.location.href = nextPageURL;
  }, 500);
}
