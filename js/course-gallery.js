$(document).ready(function() {
  // NAVBAR
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").removeClass("navbar-shrink");
    }
  });

  // COURSE GALLERY
  const searchInput = $('#search-input');
  const filterAll = $('#filter-all');
  const filterCategory1 = $('#filter-category1');
  const filterCategory2 = $('#filter-category2');
  const filterCategory3 = $('#filter-category3');
  const cardRow = $('#card-row');

  // Search function
  searchInput.on('input', function() {
    const searchQuery = searchInput.val().toLowerCase();
    const cards = cardRow.find('.filter-item');

    cards.each(function() {
      const title = $(this).find('.card-title').text().toLowerCase();
      const text = $(this).find('.card-text').text().toLowerCase();

      if (title.includes(searchQuery) || text.includes(searchQuery)) {
        $(this).css('display', 'block');
      } else {
        $(this).css('display', 'none');
      }
    });
  });

  filterAll.on('click', function() {
    const cards = cardRow.find('.filter-item');

    cards.css('display', 'block');

    filterAll.addClass('active');
    filterCategory1.removeClass('active');
    filterCategory2.removeClass('active');
    filterCategory3.removeClass('active');
  });

  filterCategory1.on('click', function() {
    const cards = cardRow.find('.filter-item');

    cards.each(function() {
      if ($(this).attr('data-category') === 'category1') {
        $(this).css('display', 'block');
      } else {
        $(this).css('display', 'none');
      }
    });

    filterAll.removeClass('active');
    filterCategory1.addClass('active');
    filterCategory2.removeClass('active');
    filterCategory3.removeClass('active');
  });

  filterCategory2.on('click', function() {
    const cards = cardRow.find('.filter-item');

    cards.each(function() {
      if ($(this).attr('data-category') === 'category2') {
        $(this).css('display', 'block');
      } else {
        $(this).css('display', 'none');
      }
    });

    filterAll.removeClass('active');
    filterCategory1.removeClass('active');
    filterCategory2.addClass('active');
    filterCategory3.removeClass('active');
  });

  filterCategory3.on('click', function() {
    const cards = cardRow.find('.filter-item');

    cards.each(function() {
      if ($(this).attr('data-category') === 'category3') {
        $(this).css('display', 'block');
      } else {
        $(this).css('display', 'none');
      }
    });

    filterAll.removeClass('active');
    filterCategory1.removeClass('active');
    filterCategory2.removeClass('active');
    filterCategory3.addClass('active');
  });
});
