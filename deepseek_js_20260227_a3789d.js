// main.js

document.addEventListener('DOMContentLoaded', function() {
  // الوضع الليلي
  const darkToggle = document.getElementById('darkModeToggle');
  if (darkToggle) {
    darkToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      const icon = this.querySelector('i');
      if (document.body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
      } else {
        icon.classList.replace('fa-sun', 'fa-moon');
      }
    });
  }

  // زر العودة للأعلى
  const scrollBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });

  // البحث المباشر (في الصفحة الرئيسية)
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase();
      const cards = document.querySelectorAll('.sector-card');
      cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        const desc = card.querySelector('p').innerText.toLowerCase();
        if (title.includes(query) || desc.includes(query)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // الطقس (مثال بسيط باستخدام API تجريبي)
  const weatherInfo = document.getElementById('weatherInfo');
  const weatherIcon = document.getElementById('weatherIcon');
  if (weatherInfo) {
    // محاكاة لجلب الطقس (يمكن استبدالها بـ API حقيقي)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Algiers&units=metric&appid=YOUR_API_KEY&lang=ar')
      .then(res => res.json())
      .then(data => {
        weatherInfo.textContent = `${data.name}: ${Math.round(data.main.temp)}°C`;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      })
      .catch(() => {
        weatherInfo.textContent = 'الجزائر: 22°C';
      });
  }
});