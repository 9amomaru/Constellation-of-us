const memories = [
    { top: "20%", left: "30%", photo: "assets/adya.jpg", text: "MY LOVING BABY" },
    { top: "50%", left: "60%", photo: "assets/love.jpg", text: "the first time we said i love you to each other 17 April" },
    { top: "10%", left: "65%", photo: "assets/gf.jpg", text: "the day i asked you to be my gf 16 April" },
    { top: "35%", left: "80%", photo: "assets/kid.jpg", text: "This smile? Saved me ❤️" },
    { top: "60%", left: "15%", photo: "assets/misss.jpg", text: "i miss you more btw" },
    { top: "75%", left: "50%", photo: "assets/draw.jpg", text: "the perfect drawing" },
    { top: "45%", left: "40%", photo: "assets/us.jpg", text: "us" },
    { top: "70%", left: "20%", photo: "assets/me.jpg", text: "i love you " },
  ];
  
  const sky = document.getElementById("sky");
  
  memories.forEach((memory, index) => {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = memory.top;
    star.style.left = memory.left;
    star.dataset.index = index;
    sky.appendChild(star);
  
    star.addEventListener("click", () => {
      document.getElementById("memory-photo").src = memory.photo;
      document.getElementById("memory-text").innerText = memory.text;
      document.getElementById("modal").style.display = "flex";
    });
  });
  
  document.getElementById("close-btn").onclick = () => {
    document.getElementById("modal").style.display = "none";
  };
  
  document.getElementById("intro-screen").addEventListener("click", () => {
    // Hide intro screen with fade out
    const intro = document.getElementById("intro-screen");
    intro.style.opacity = 0;
    setTimeout(() => intro.style.display = "none", 2000);
  
    // Start music fade-in
    const music = document.getElementById("bg-music");
    if (music.muted) {
      music.muted = false;
      music.volume = 0;
      music.play();
  
      let volume = 0;
      const fadeInterval = setInterval(() => {
        if (volume < 1) {
          volume += 0.005;
          music.volume = volume;
        } else {
          clearInterval(fadeInterval);
        }
      }, 150);
    }
  });
  
    