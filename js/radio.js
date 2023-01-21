/////Radio

// next.addEventListener("click",function(){
//     // radio.
// })
var radio_nomi = document.getElementById("radio_nomi");
function arrow_left_controls() {
  document.getElementById("arrow_left").classList.toggle("display_block");
  document.getElementById("radio_close").classList.toggle("display_block");
  document.getElementById("radio_pause").classList.toggle("display_block");
  document.getElementById("controls").classList.toggle("display_flex");
}
function radio_close_stop() {
  document.getElementById("arrow_left").classList.toggle("display_block");
  document.getElementById("radio_close").classList.toggle("display_block");
  document.getElementById("radio_pause").classList.toggle("display_block");
  document.getElementById("controls").classList.toggle("display_flex");
  player.classList.remove("display_flex");
  for (let i = 0; i < radio.length; i++) {
    radio[i].children[2].pause();
    //agarda stopni o'chirish kerak bolsa
    radio[i].children[2].currentTime = 0;
    //agarda stopni o'chirish kerak bolsa
  }
}
var radio = document.getElementsByClassName("radio");
for (var i = 0; i < radio.length; i++) {
  radio[i].addEventListener("click", function () {
    let player = document.getElementById("player");
    player.classList.add("display_flex");
    for (let i = 0; i < radio.length; i++) {
      radio[i].children[2].pause();
    }
    radio_nomi.innerHTML = this.children[1].innerHTML;
    this.children[2].play();
    /////// play
    let play1 = document.getElementById("play1");
    play1.classList.remove("display_block");
    let pause1 = document.getElementById("pause1");
    pause1.classList.add("display_block");

    pause1.addEventListener("click", function () {
      for (let i = 0; i < radio.length; i++) {
        radio[i].children[2].pause();
      }
      //////pause
      let play1 = document.getElementById("play1");
      play1.classList.add("display_block");
      radio[i].children[2].pause();
      let pause1 = document.getElementById("pause1");
      pause1.classList.remove("display_block");
    });
    play1.addEventListener("click", function () {
      for (let i = 0; i < radio.length; i++) {
        radio[i].children[2].pause();
      }
      let pause1 = document.getElementById("pause1");
      pause1.classList.add("display_block");
      let play1 = document.getElementById("play1");
      play1.classList.remove("display_block");
      radio[i].children[2].play();
    });
    // ///////controls
    let black_pause = document.getElementById("black_pause");
    let black_play = document.getElementById("black_play");
    black_pause.style.display = "block";
    black_play.style.display = "none";
    //////
    black_pause.addEventListener("click", function () {
      for (let i = 0; i < radio.length; i++) {
        radio[i].children[2].pause();
      }
      radio[i].children[2].pause();
      black_play.style.display = "block";
      black_pause.style.display = "none";
    });
    black_play.addEventListener("click", function () {
      for (let i = 0; i < radio.length; i++) {
        radio[i].children[2].pause();
      }
      radio[i].children[2].play();
      black_play.style.display = "none";
      black_pause.style.display = "block";
    });
  });
}

let prev = document.getElementById("prev");
let next = document.getElementById("next");

prev.addEventListener("click", function () {
  for (let i = 0; i < radio.length; i++) {
    radio[i].children[2].pause();
  }
  black_play.style.display = "none";
  black_pause.style.display = "block";
  if (i > 0) {
    i--;
  } else {
    i = radio.length - 1;
  }
  radio[i].children[2].play();
  radio_nomi.innerHTML = radio[i].children[1].innerHTML;

  console.log(i);
});
next.addEventListener("click", function () {
  for (let i = 0; i < radio.length; i++) {
    radio[i].children[2].pause();
  }
  black_play.style.display = "none";
  black_pause.style.display = "block";
  if (i < radio.length - 1) {
    i++;
  } else {
    i = 0;
  }
  radio[i].children[2].play();
  radio_nomi.innerHTML = radio[i].children[1].innerHTML;
  console.log(i);
});
