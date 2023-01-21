var last_blog_video = document.getElementById("last_blog_video");
var last_blog_video_tag = document.getElementById("last_blog_video_tag");
function play() {
  last_blog_video.classList.add("play_modal");
  last_blog_video_tag.play();
  if (last_blog_video.classList.contains("play_modal")) {
    window.onclick = function (event) {
      if (last_blog_video == event.target) {
        unplay();
      }
    };
  }
}
function unplay() {
  last_blog_video.classList.remove("play_modal");
  last_blog_video_tag.pause();
}
///////// stats

function stat_on_load() {
  setTimeout(function () {
    let a = 0;
    function incement_stat_radio() {
      let stat_radio = document.getElementById("stat_radio");
      stat_radio.innerHTML = a;
      a++;
      if (a > document.getElementById("stat_radio_var").innerHTML * 1) {
        clearInterval(stat_radio_interval);
      }
    }
    const stat_radio_interval = setInterval(incement_stat_radio, 20);

    let b = 0;
    function incement_stat_video() {
      let stat_video = document.getElementById("stat_video");
      stat_video.innerHTML = b;
      b++;
      if (b > document.getElementById("stat_video_var").innerHTML * 1) {
        clearInterval(stat_video_interval);
      }
    }
    const stat_video_interval = setInterval(incement_stat_video, 20);

    let c = 0;
    function incement_stat_audio() {
      let stat_audio = document.getElementById("stat_audio");

      stat_audio.innerHTML = c;
      c++;
      if (c > document.getElementById("stat_audio_var").innerHTML * 1) {
        clearInterval(stat_audio_interval);
      }
    }
    const stat_audio_interval = setInterval(incement_stat_audio, 20);

    let d = 0;
    function incement_stat_photo() {
      let stat_photo = document.getElementById("stat_photo");

      stat_photo.innerHTML = d;
      d++;
      if (d > document.getElementById("stat_photo_var").innerHTML * 1) {
        clearInterval(stat_photo_interval);
      }
    }
    const stat_photo_interval = setInterval(incement_stat_photo, 20);
  }, 2000);
}
// For section3 Habarlar
// function section3_see_toggle() {
//   let section3 = document.getElementById("section3");
//   let card_horizontal = document.getElementsByClassName("card_horizontal");
//   let xabar_btn = document.getElementById("xabar_btn");
//   function section3_see_all() {
//     for (let it = 0; it < card_horizontal.length; it++) {
//       card_horizontal[it].classList.add("card_active");
//     }
//     xabar_btn.innerHTML = "Kamroq";
//   }
//   function section3_see_short() {
//     for (let it = 0; it < card_horizontal.length; it++) {
//       card_horizontal[it].classList.remove("card_active");
//     }
//     for (let it = 0; it < 4; it++) {
//       card_horizontal[it].classList.add("card_active");
//     }
//     xabar_btn.innerHTML = "Barchasini ko'rish";
//   }
//   if (
//     section3.children[1].children[0].classList.contains("card_active") &
//     !section3.children[1].children[4].classList.contains("card_active")
//   ) {
//     section3_see_all();
//   } else {
//     section3_see_short();
//   }
// }
// search modal
function search_modal() {
  let search_modal = document.getElementById("search_modal");
  search_modal.classList.add("search_modal_active");
  if (search_modal.classList.contains("search_modal_active")) {
    window.onclick = function (event) {
      if (search_modal == event.target) {
        search_close_func();
      }
    };
  }
}
function search_close_func() {
  let search_modal = document.getElementById("search_modal");
  search_modal.classList.remove("search_modal_active");
}

//////Izohlar
function izohlar() {
  // alert(document.getElementById("izohlar").children.length > 0);
  if (document.getElementById("izohlar").children.length < 1) {
    document.getElementById("izoh_topilmadi").style.display = "block";
  }
}

///////Bog'lanish modal
function contactUs() {
  document.getElementById("contactus_modal").classList.toggle("display_flex");
}
////////Responsive
// alert(screen.width);
function open_menu() {
  document.getElementById("logo_nav_lang").style.display = "flex";
  document.getElementById("menu_tab_modal").style.display = "block";
}
function close_menu() {
  document.getElementById("logo_nav_lang").style.display = "none";
  document.getElementById("menu_tab_modal").style.display = "none";
}

//////Video yuborish
function video_yuborish() {
  document.getElementById("video_yubor_modal").classList.add("display_flex");
}
function video_yuborish_close() {
  document.getElementById("video_yubor_modal").classList.remove("display_flex");
}
function oferta_show() {
  document
    .getElementById("video_yubor_modal_oferta")
    .classList.add("display_flex");
}
function oferta_close() {
  document
    .getElementById("video_yubor_modal_oferta")
    .classList.remove("display_flex");
}

