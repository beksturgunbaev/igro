$(document).ready(function () {  
  // Input mask:
  $(".phone_mask").inputmask("phone", {
    placeholder: "#",
    showMaskOnHover: false,
  });

  Inputmask.extendAliases({
    my_phone: {
      alias: "+7(###)###-##-##",
      phoneCodes: [
        {
          mask: "+7(###)###-##-##",
        },
      ],
    },
  });
  $(".phone_mask").inputmask("my_phone");
});

// Mobile menu:
let burgerBtn = document.querySelector(".burger_menu"),
  closeBtn = document.querySelector(".close_btn"),
  modal = document.querySelector(".modal"),
  mobileMenu = document.querySelector(".mobile_menu"),
  bodyScroll = document.querySelector("body");

burgerBtn.onclick = function () {
  modal.classList.add("active");
  mobileMenu.classList.add("active");
  bodyScroll.classList.add("no_scroll");
};
closeBtn.onclick = function () {
  modal.classList.remove("active");
  mobileMenu.classList.remove("active");
  bodyScroll.classList.remove("no_scroll");
};

// Accordion:
const acc = document.getElementsByClassName("catalog_link");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    let icon = this.querySelector("svg");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      icon.classList.remove("active");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      icon.classList.add("active");
    }
  });
}

// Dropdown
let dropdown = document.querySelectorAll(".dropp_down");

for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("active");
  });
}

let city = document.querySelector(".cities_select span div");
let cityUl = document.querySelector(".cities_option");
let cityOption = document.querySelectorAll(".cities_option li");

for (let i = 0; i < cityOption.length; i++) {
  cityOption[i].addEventListener("click", function () {
    city.innerText = this.innerText;
    cityUl.classList.remove("active");
  });
}

//  Choose file:

updateList = function () {
  let input = document.getElementById("file");
  let output = document.getElementById("fileList");

  for (var i = 0; i < input.files.length; ++i) {
    output.innerHTML += "<p>" + input.files.item(i).name + "</p>";
  }
};

// Counter:

let plusBtn = document.querySelectorAll('.plus');
let minusBtn = document.querySelectorAll('.minus');

let cost = 495;

for(let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].addEventListener('click', function() {
    let thisCount = this.previousElementSibling;
    thisCount.innerText++;
    let sum = this.closest('.korzina_counter').nextElementSibling.children[0].children[0];
    sum.innerText = cost += 495;
  });
}

for(let i = 0; i < plusBtn.length; i++) {
  minusBtn[i].addEventListener('click', function() {
    let thisCount = this.nextElementSibling;
    thisCount.innerText--;
    if(thisCount.innerText < 0) {
      thisCount.innerText = 0;
    }
    let sum = this.closest('.korzina_counter').nextElementSibling.children[0].children[0];
    if(sum.innerText <= 0) {
      sum.innerText = 0;
    } else {
      sum.innerText = cost -= 495;
    }
  });
}

// let plus = document.querySelector('.counter_btn_plus');
// let minus = document.querySelector('.counter_btn_minus');
// let costTwo = 365;

// plus.onclick = function() {
//   let thisCount = this.previousElementSibling;
//   thisCount.innerText++;
//   let sumTwo = this.closest('.counter').previousElementSibling.children[0];
//   sumTwo.innerText = cost += 365;
// }

// minus.onclick = function() {
//   let thisCount = this.nextElementSibling;
//     thisCount.innerText--;
//     if(thisCount.innerText < 0) {
//       thisCount.innerText = 0;
//     }
//   let sumTwo = this.closest('.counter').previousElementSibling.children[0];
//     if(sumTwo.innerText <= 0) {
//       sumTwo.innerText = 0;
//     } else {
//       sumTwo.innerText = costTwo -= 365;
//     }
// }
