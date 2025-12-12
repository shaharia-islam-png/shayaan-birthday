window.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("openSurprise");
  const closeBtn = document.getElementById("closeWish");
  const overlay = document.getElementById("wishOverlay");
  const candle = document.querySelector(".candle");
  const audio = document.getElementById("birthdayAudio");

  function lightCandle() {
    candle.classList.add("lit");
  }

  function playSong() {
    audio.currentTime = 0;

    audio.play().then(() => {
      console.log("Song playing");
    }).catch((err) => {
      console.log("Autoplay blocked:", err);
      alert("🔊 Please tap anywhere on the screen once, then click again to play the song!");
    });
  }

  function stopSong() {
    audio.pause();
  }

  openBtn.onclick = function () {
    overlay.classList.add("show");
    lightCandle();
    playSong();
  };

  closeBtn.onclick = function () {
    overlay.classList.remove("show");
    stopSong();
  };
});