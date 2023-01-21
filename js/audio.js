//////audio tinglash
function play_audio() {
    let audio_tag = document.getElementById("audio_tag");
    let duration_time_sec = document.getElementById("sec");
    let duration_time_minut = document.getElementById("minut");
    let current_minnut = document.getElementById("current_minnut");
    let current_sec = document.getElementById("current_sec");
    let time_line = document.getElementById("time_line");
    let zero = "0";
    document.getElementById("audio_play").style.display = "none";
    document.getElementById("audio_pause").style.display = "block";
    audio_tag.play();
    if (Math.floor(audio_tag.duration / 60) < 10) {
      duration_time_minut.innerHTML = zero + Math.floor(audio_tag.duration / 60);
    } else {
      duration_time_minut.innerHTML = Math.floor(audio_tag.duration / 60);
    }
    if (Math.floor(audio_tag.duration % 60) < 10) {
      duration_time_sec.innerHTML = zero + Math.floor(audio_tag.duration % 60);
    } else {
      duration_time_sec.innerHTML = Math.floor(audio_tag.duration % 60);
    }
    setInterval(function () {
      if (Math.floor(audio_tag.currentTime / 60) < 10) {
        current_minnut.innerHTML = zero + Math.floor(audio_tag.currentTime / 60);
      } else {
        current_minnut.innerHTML = Math.floor(audio_tag.currentTime / 60);
      }
      if (Math.floor(audio_tag.currentTime % 60) < 10) {
        current_sec.innerHTML = zero + Math.floor(audio_tag.currentTime % 60);
      } else {
        current_sec.innerHTML = Math.floor(audio_tag.currentTime % 60);
      }
      time_line.value = `${Math.floor(
        (audio_tag.currentTime * 100) / audio_tag.duration
      )}`;
      ranging(time_line);
    }, 100);
  }
  function pause_audio() {
    let audio_tag = document.getElementById("audio_tag");
    document.getElementById("audio_play").style.display = "block";
    document.getElementById("audio_pause").style.display = "none";
    audio_tag.pause();
  }
  ////Audio Ranging
  function ranging(range) {
    const value = range.value;
    range.style.background = `linear-gradient(to right, #00ab26 0%, #00ab26 calc(${value}% + ${4}px), #e0e6e9 ${value}%, #e0e6e9 100%)`;
  }
  const time_line_class = document.querySelector(".time_line_class");
  time_line_class.addEventListener("input", function () {
    let audio_tag = document.getElementById("audio_tag");
    let time_line = document.getElementById("time_line");
    ranging(time_line);
    audio_tag.currentTime = (audio_tag.duration * this.value) / 100;
  });