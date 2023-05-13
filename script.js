$(document).ready(function() {
  // menyembunyikan card Studying secara default
  $('.studying.hidden').hide();
  $('.certificate.hidden').hide();

  // menampilkan dan menyembunyikan card Studying pada tombol "Lihat Lebih Banyak"
  var moreBtn = $('#moreBtn');
  var hiddenCards = $('.studying.hidden');

  moreBtn.click(function(event) {
    event.preventDefault();
    hiddenCards.slideToggle(500);
    moreBtn.text(function(i, text) {
      return text === "Lihat Lebih Banyak" ? "Lihat Lebih Sedikit" : "Lihat Lebih Banyak";
    });

    // Scroll ke atas ketika tombol "Lihat Lebih Sedikit" diklik
    if (moreBtn.text() === "Lihat Lebih Banyak") {
      $('html, body').animate({
        scrollTop: $("#studying").offset().top
      }, 500);
    }
  });

  // menampilkan dan menyembunyikan card Certificate pada tombol "Lihat Lebih Banyak"
  var moreBtn1 = $('#moreBtn1');
  var hiddenCards1 = $('.certificate.hidden');

  moreBtn1.click(function(event) {
    event.preventDefault();
    hiddenCards1.slideToggle(500);
    moreBtn1.text(function(i, text) {
      return text === "Lihat Lebih Banyak" ? "Lihat Lebih Sedikit" : "Lihat Lebih Banyak";
    });

    // Scroll ke atas ketika tombol "Lihat Lebih Sedikit" diklik
    if (moreBtn1.text() === "Lihat Lebih Banyak") {
      $('html, body').animate({
        scrollTop: $("#certificate").offset().top
      }, 500);
    }
  });

  const navbar = $('.navbar-expand-lg');
  const navLinks = $('.navbar-nav a');
  const sections = $('section');
  let prevScrollpos = $(window).scrollTop();

  $(window).on('scroll', function() {
    const currentScrollPos = $(this).scrollTop();
    if (prevScrollpos > currentScrollPos) {
      navbar.removeClass('navbar-scroll-out');
      navbar.removeClass('hidden');
      navbar.addClass('animated');
      navbar.removeClass('navbar-hidden'); // menampilkan navbar saat scroll ke atas
    } else {
      navbar.addClass('navbar-scroll-out');
      navbar.addClass('hidden');
      navbar.removeClass('animated');
      navbar.addClass('navbar-hidden'); // menyembunyikan navbar saat scroll ke bawah
    }
    prevScrollpos = currentScrollPos;

    sections.each(function() {
      const sectionTop = $(this).offset().top - navbar.outerHeight();
      const sectionBottom = sectionTop + $(this).outerHeight();
      const scrollPos = $(window).scrollTop();
      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        navLinks.removeClass('active');
        const href = $(this).attr('id');
        $(`.navbar-nav a[href='#${href}']`).addClass('active');
      }
    });
  });

  const mobileNavToggle = $('.navbar-toggler');
  const mobileNavLinks = $('.navbar-nav a');

  mobileNavToggle.on('click', function() {
    navbar.toggleClass('mobile-nav');
  });

  mobileNavLinks.on('click', function() {
    if (navbar.hasClass('mobile-nav')) {
      navbar.removeClass('mobile-nav');
    }
  });
});
