// تفعيل AOS عند تحميل الصفحة
AOS.init({
  duration: 1000
});

// وظيفة زر القائمة في الجوال
function toggleMenu() {
  document.getElementById("navbarLinks").classList.toggle("active");
}

// التمرير لأعلى عند الضغط على زر الرجوع
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// إعداد سوايبر للأقسام
var swiper = new Swiper('.department-swiper', {
  loop: false,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      centeredSlides: false
    },
    1024: {
      slidesPerView: 3,
      centeredSlides: false
    }
  }
});


// ✅ دوال فتح وإغلاق التهاني
function showMessage(id) {
  document.getElementById(id).style.display = 'flex';
}

function closeMessage(id) {
  document.getElementById(id).style.display = 'none';
}
