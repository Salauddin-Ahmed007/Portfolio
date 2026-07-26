// নেভবার স্ক্রোল শ্যাডো ইফেক্ট
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});