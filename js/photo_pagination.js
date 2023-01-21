var sigimi = 12;
var card_block = document.getElementById("card_block");
var page = 1;
var page_max = Math.ceil(card_block.children.length / sigimi);
var big_page = 1;
var big_page_max = Math.ceil(page_max / 7);
function pagination() {
  for (let i = 0; i < card_block.children.length; i++) {
    card_block.children[i].classList.remove("card_active");
  }
  for (let i = 0; i < page * sigimi; i++) {
    if (page > 1) {
      if (i > page * sigimi - (sigimi + 1)) {
        if (card_block.children.length > i) {
          card_block.children[i].classList.add("card_active");
        }
      }
    } else {
      card_block.children[i].classList.add("card_active");
    }
  }
  displayed();
}
function displayed() {
  // for (let i = 1; i <= 7; i++) {
  //   let a = "li_" + i;
  //   document.getElementById(`${a}`).style.display = "none";
  // }
  if ((big_page == big_page_max) & (page_max % 7 > 0)) {
    for (let i = 1; i <= 7 - (page_max % 7); i++) {
      let a = "li_" + (8 - i);
      document.getElementById(`${a}`).style.display = "none";
    }
  }
  // else {
  //   for (let i = 1; i <= 7; i++) {
  //     let a = "li_" + i;
  //     document.getElementById(`${a}`).style.display = "flex";
  //   }
  // }
}
function next_n_th_page(n) {
  let old_active_li = 0;
  let new_active_li = 0;
  let tafovut = 0;
  let pagination_buttons = document.getElementById("pagination_buttons");
  for (let i = 0; i < pagination_buttons.children.length; i++) {
    if (pagination_buttons.children[i].classList.contains("active_li")) {
      old_active_li = i;
    }
  }
  for (let i = 0; i < pagination_buttons.children.length; i++) {
    if (pagination_buttons.children[i].classList.contains("active_li")) {
      pagination_buttons.children[i].classList.remove("active_li");
    }
  }
  document.getElementById(n).classList.add("active_li");
  for (let i = 0; i < pagination_buttons.children.length; i++) {
    if (pagination_buttons.children[i].classList.contains("active_li")) {
      new_active_li = i;
    }
  }
  tafovut = new_active_li - old_active_li;
  page += tafovut;
  pagination();
}
function prev() {
  if (big_page > 1) {
    big_page -= 1;
    page -= 7;
  }
  next_n_th_page("li_1");

  let li_1 = document.getElementById("li_1");
  let li_2 = document.getElementById("li_2");
  let li_3 = document.getElementById("li_3");
  let li_4 = document.getElementById("li_4");
  let li_5 = document.getElementById("li_5");
  let li_6 = document.getElementById("li_6");
  let li_7 = document.getElementById("li_7");
  let button_1;
  let button_2;
  let button_3;
  let button_4;
  let button_5;
  let button_6;
  let button_7;
  button_1 = li_1.innerHTML * 1;
  if (button_1 > 1) {
    button_1 = (big_page - 1) * 7 + 1;
  } else {
    button_1 = 1;
  }
  li_1.innerHTML = button_1;

  button_2 = li_2.innerHTML * 1;
  if (button_2 > 2) {
    button_2 = (big_page - 1) * 7 + 2;
  } else {
    button_2 = 2;
  }
  li_2.innerHTML = button_2;

  button_3 = li_3.innerHTML * 1;
  if (button_3 > 3) {
    button_3 = (big_page - 1) * 7 + 3;
  } else {
    button_3 = 3;
  }
  li_3.innerHTML = button_3;

  button_4 = li_4.innerHTML * 1;
  if (button_4 > 4) {
    button_4 = (big_page - 1) * 7 + 4;
  } else {
    button_4 = 4;
  }
  li_4.innerHTML = button_4;

  button_5 = li_5.innerHTML * 1;
  if (button_5 > 5) {
    button_5 = (big_page - 1) * 7 + 5;
  } else {
    button_5 = 5;
  }
  li_5.innerHTML = button_5;

  button_6 = li_6.innerHTML * 1;
  if (button_6 > 6) {
    button_6 = (big_page - 1) * 7 + 6;
  } else {
    button_6 = 6;
  }
  li_6.innerHTML = button_6;

  button_7 = li_7.innerHTML * 1;
  if (button_7 > 7) {
    button_7 = (big_page - 1) * 7 + 7;
  } else {
    button_7 = 7;
  }
  li_7.innerHTML = button_7;

  for (let i = 0; i < pagination_buttons.children.length; i++) {
    pagination_buttons.children[i].style.display = "flex";
  }
  pagination();
}
function next() {
  if (big_page < big_page_max) {
    next_n_th_page("li_1");
    let li_1 = document.getElementById("li_1");
    let li_2 = document.getElementById("li_2");
    let li_3 = document.getElementById("li_3");
    let li_4 = document.getElementById("li_4");
    let li_5 = document.getElementById("li_5");
    let li_6 = document.getElementById("li_6");
    let li_7 = document.getElementById("li_7");
    let button_1;
    let button_2;
    let button_3;
    let button_4;
    let button_5;
    let button_6;
    let button_7;

    button_1 = li_1.innerHTML * 1;
    button_1 += 7;
    if (button_1 <= page_max) {
      li_1.innerHTML = button_1;
    } else {
      li_1.style.display = "none";
    }
    button_2 = li_2.innerHTML * 1;
    button_2 += 7;
    if (button_2 <= page_max) {
      li_2.innerHTML = button_2;
    } else {
      li_2.style.display = "none";
    }

    button_3 = li_3.innerHTML * 1;
    button_3 += 7;
    if (button_3 <= page_max) {
      li_3.innerHTML = button_3;
    } else {
      li_3.style.display = "none";
    }

    button_4 = li_4.innerHTML * 1;
    button_4 += 7;
    if (button_4 <= page_max) {
      li_4.innerHTML = button_4;
    } else {
      li_4.style.display = "none";
    }

    button_5 = li_5.innerHTML * 1;
    button_5 += 7;
    if (button_5 <= page_max) {
      li_5.innerHTML = button_5;
    } else {
      li_5.style.display = "none";
    }

    button_6 = li_6.innerHTML * 1;
    button_6 += 7;
    if (button_6 <= page_max) {
      li_6.innerHTML = button_6;
    } else {
      li_6.style.display = "none";
    }

    button_7 = li_7.innerHTML * 1;
    button_7 += 7;
    if (button_7 <= page_max) {
      li_7.innerHTML = button_7;
    } else {
      li_7.style.display = "none";
    }
    page += 7;
    pagination();
  }
  if (big_page < big_page_max) {
    big_page += 1;
  }
}
