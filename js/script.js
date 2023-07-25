$(function () {
  $('.hero').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',


    arrows: true,
    prevArrow: `<button type="button" class="prev-btn"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></button>`,
    nextArrow: `<button type="button" class="next-btn"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>`

  });
});
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days + " : ";
  document.getElementById("hours").innerHTML = hours + " : ";
  document.getElementById("minutes").innerHTML = minutes + " : ";
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

let menu = [{
    id: 1,
    status: "NEW",
    title: "Piqué Biker Jacket",
    img: "./img/product/product-1.webp",
    price: "$67.24",
    category: "arivals"
  },
  {
    id: 2,
    status: "SALE",
    title: "Piqué Biker Jacket",
    img: "./img/product/product-2.webp",
    price: "$67.24",
    category: "sales"
  },
  {
    id: 3,
    status: "SALE",
    title: "Multi-pocket Chest Bag",
    img: "./img/product/product-3.webp",
    price: "$38.43",
    category: "arivals"
  },
  {
    id: 4,
    status: "SALE",
    title: "Diagonal Textured Cap",
    img: "./img/product/product-4.webp",
    price: "$60.9",
    category: "sales"
  },
  {
    id: 5,
    status: "SALE",
    title: "Lether Backpack",
    img: "./img/product/product-5.webp",
    price: "$31.37",
    category: "arivals"
  },
  {
    id: 6,
    status: "SALE",
    title: "T-shirt Contrast Pocket",
    img: "./img/product/product-6.webp",
    price: "$98.49",
    category: "sales"
  },
  {
    id: 7,
    status: "SALE",
    title: "Basic Flowing Scarf",
    img: "./img/product/product-7.webp",
    price: "$49.66",
    category: "arivals"
  },
  {
    id: 8,
    status: "SALE",
    title: "Piqué Biker Jacket",
    img: "./img/product/product-8.webp",
    price: "$26.28",
    category: "sales"
  },

]

let controlItems = document.querySelectorAll('.controls_item');
let productsItem = document.querySelectorAll('.product_item');
let productIcon = document.querySelectorAll('.product_icon');
let productHeart = document.querySelectorAll('.heart_icon');
let menuBtn = document.querySelector('.header_menu_btn');
let myDiv = document.querySelector('.header_right_inner');
let myscrollDiv = document.querySelectorAll('.header_item');
let menuBtnn = document.querySelector('.menu_btnn');
let scrollMen = document.querySelector('.header_menu');
let dropInner = document.querySelector('.dropdown_inner');
let dropUl = document.querySelector('.dropdown');
let modalContent = document.querySelector('.modal_block');
let modalExit = document.querySelector('.times');
let searchBtn = document.querySelector('.search_btn');
let product_filter = document.querySelector('.product_filter');

productHeart.forEach(element => {
  element.addEventListener('click', () => {
    let color = element.style.color = "black";
    if (color == 'black') {
      color = element.style.color = "red"
    } else if (color == red) {
      color = element.style.color = "black"
    }
  })
})

//Tab
function hide() {
  controlItems.forEach(element => {
    element.classList.remove('filter_controls_active')
  })
}

function show(i = 0) {
  controlItems[i].classList.add('filter_controls_active')
}
// hide();
// show();

// function showPro(i) {
//   if (i == 0) {
//     productsItem[i].classList.add('show')
//     console.log(1);
//   }
// }
controlItems.forEach((element, indx) => {
  element.addEventListener('click', () => {
    hide();
    show(indx);
    // showPro(indx);
    if (indx == 0) {
      productsItem.forEach(element => {
        if (element.classList.contains('product_item')) {
          element.style.cssText = `display:block;`
        }
      })
    }
    if (indx == 1) {
      productsItem.forEach(element => {
        if (!element.classList.contains('new_arrivals')) {
          element.style.cssText = `animation:fide; display:none;transition:1s;`
        } else if (element.classList.contains('new_arrivals')) {
          element.style.cssText = `dilsplay:block;`
        }
      })
    }
    if (indx == 2) {
      productsItem.forEach(element => {
        if (!element.classList.contains('hot_sales')) {
          element.style.cssText = `animation:fide; display:none;transition:1s;`
        } else if (element.classList.contains('hot_sales')) {
          element.style.cssText = `dilsplay:block;`
        }
      })
    }
  })
})
// Menu_btn

function menuBar() {
  let myDivContent = document.createElement('div')
  myDivContent.innerHTML = `
  <a href="#">Sign In</a>
  <a href="#">Faqs</a>
  <div class="usd">
      <span>
          Usd &nbsp;&nbsp;
          <i class="fa fa-angle-down" aria-hidden="true"></i>
      </span>
      <ul>
          <li>USD</li>
          <li>EUR</li>
          <li>USD</li>
      </ul>
  </div>
  `
  myDivContent.classList.add('myelement')
  myDiv.append(myDivContent)
}
// menuBar()
menuBtnn.addEventListener('click', (e) => {
  // let sfdsd = myscrollDiv.style.height = myscrollDiv.scrollHeight +"px"
  myscrollDiv.forEach(element => {
    element.classList.toggle('scrollY')
  })
})
dropInner.addEventListener('click', () => {
  dropUl.classList.toggle('scrollY')
})
menuBtn.addEventListener('click', () => {
  myDiv.classList.toggle('transformX')
})
modalExit.addEventListener('click', () => {
  modalContent.style.display = 'none'
})
searchBtn.addEventListener('click', () => {
  modalContent.style.display = 'flex'
})

window.addEventListener('DOMContentLoaded', () => {
  displayFiltered(menu);
  getMenu()
})

let displayFiltered = (val) => {
  let displayMenu = val.map((item) => {
    return `<div class="product_item new_arrivals">
              <div class="product_item_pic">
                 <span class="new">${item.status}</span>
                 <ul class="product_icon">
                    <li><i class="fa fa-heart-o heart_icon" aria-hidden="true"></i>
                    </li>
                    <li><a href="#"><i class="fa fa-exchange" aria-hidden="true"></i>
                       </a></li>
                    <li><a href="#"><i class="fa fa-search" aria-hidden="true"></i>
                        </a></li>
                  </ul>
                  <img src=${item.img} alt="">
              </div>
              <div class="product_item_text">
                 <h6>${item.title}</h6>
                 <a href="#" class="add_card">+ Add To Cart</a>
                 <div class="stars">
                    <i class="fa fa-star start "></i>
                    <i class="fa fa-star start"></i>
                    <i class="fa fa-star start"></i>
                    <i class="fa fa-star start"></i>
                    <i class="fa fa-star start"></i>
                  </div>
                  <h5>${item.price}</h5>
                  <div class="product_color_select">
                     <label for="pc_1" class="blue">
                         <input type="radio" name="gender" id="pc_1">
                     </label>
                     <label for="pc_2" class="black">
                         <input type="radio" name="gender" id="pc_2">
                     </label>
                     <label for="pc_3" class="brown">
                         <input type="radio" name="gender" id="pc_3">
                     </label>
                  </div>
              </div>
            </div>`
  });
  displayMenu = displayMenu.join('');
  product_filter.innerHTML = displayMenu;
}

let getMenu = () => {
  controlItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      const category = e.currentTarget.id;
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem
        }
      })
      if (category == "all") {
        displayFiltered(menu)
      } else {
        displayFiltered(menuCategory)
      }
    })
  })
}