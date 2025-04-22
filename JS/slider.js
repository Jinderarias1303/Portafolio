
  const sliders = document.querySelectorAll('.slider-proyecto');

  sliders.forEach(slider => {
    let i = 0;
    const total = slider.children.length;

    setInterval(() => {
      i = (i + 1) % total;
      slider.style.transform = `translateX(-${i * 100}%)`;
    }, 4000);
  });


