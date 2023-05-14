$(function() {
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

  // menambahkan kelas "loaded" pada body setelah halaman selesai dimuat
  $('body').addClass('loaded');

  const navbar = $('.navbar-expand-lg');
  const navLinks = $('.navbar-nav a');
  const sections = $('section');
  let prevScrollpos = $(window).scrollTop();
  let isScrollingDown = false;
  let timer;

  $(window).on('scroll', function() {
    const currentScrollPos = $(this).scrollTop();
    if (prevScrollpos > currentScrollPos) {
      navbar.removeClass('navbar-scroll-out');
      navbar.removeClass('hidden');
      navbar.addClass('animated');
      navbar.removeClass('navbar-hidden'); // menampilkan navbar saat scroll ke atas
      isScrollingDown = false;
    } else {
      navbar.addClass('navbar-scroll-out');
      navbar.addClass('hidden');
      navbar.removeClass('animated');
      navbar.addClass('navbar-hidden'); // menyembunyikan navbar saat scroll ke bawah
      isScrollingDown = true;
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

    // tambahkan kode berikut
    clearTimeout(timer);
    timer = setTimeout(function() {
      navbar.removeClass('navbar-scroll-out');
navbar.removeClass('hidden');
navbar.removeClass('animated');
navbar.removeClass('navbar-hidden');
navbar.addClass('nav-scroll');
}, 1000);

const navHeight = navbar.outerHeight();
const documentHeight = $(document).height();
const windowHeight = $(window).height();
const scrollDistance = documentHeight - (navHeight + windowHeight);
if ($(window).scrollTop() >= scrollDistance) {
  navbar.removeClass('navbar-scroll-out');
  navbar.removeClass('hidden');
  navbar.removeClass('animated');
  navbar.removeClass('navbar-hidden');
  navbar.addClass('nav-scroll');
} else if ($(window).scrollTop() > 50 || isScrollingDown) {
  navbar.addClass('nav-scroll');
} else {
  navbar.removeClass('nav-scroll');
}
});

// tambahkan kode berikut
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
