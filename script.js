
// data
// 
const items = [
    {
        id: 1,
        tittle: "Violín", 
        category: "violin",
        price: 500,
        img: "img/violin.png",
    },
    {
        id: 2,
        tittle: "Viola", 
        category: "viola",
        price: 700,
        img: "img/viola.png",
    },
    {
        id: 3,
        tittle: "Violonchelo", 
        category: "violoncello",
        price: 1000,
        img: "img/cello.png",
    },
    {
        id: 4,
        tittle: "Contrabajo", 
        category: "doublebass",
        price: 3000,
        img: "img/doublebass.png",
    },
    {
        id: 5,
        tittle: "Violín", 
        category: "violin",
        price: 1000,
        img: "img/violin.png",
    },
    {
        id: 6,
        tittle: "Contrabajo", 
        category: "doublebass",
        price: 3500,
        img: "img/doublebass.png",
    },
    {
        id: 7,
        tittle: "Violonchelo", 
        category: "violoncello",
        price: 1500,
        img: "img/cello.png",
    },
    {
        id: 8,
        tittle: "Violonchelo", 
        category: "violoncello",
        price: 2300,
        img: "img/cello.png",
    },
]

// variables
let path = window.location.pathname;
let page = path.split("/").pop();

const navBar = document.querySelector('.navigation');
const burguerBtn = document.querySelector('.menu-btn');
const hero = document.querySelector('.hero');



// Instrument page variables
const showcaseSection = document.querySelector('.showcase-section');
const filterContent = document.querySelector('.filter-content');
const filterBtn = document.querySelectorAll('.filter-btn');
const pageTittle = document.querySelector('.page-tittle');
// Product Page variables
const activeImage = document.querySelector('.product-image .active');
const productImages = document.querySelectorAll('.image-list img');


// navigation
window.addEventListener('scroll', function () {
    let navigation = document.getElementById("header");
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if (page === "index.html") {
        if (scrollHeight > navHeight) {
            navBar.classList.add('top');
            navigation.style.backgroundColor = "#fff";
        } else {
            navBar.classList.remove('top');
            navigation.style.backgroundColor = "transparent";
        }

    } else {
        navBar.classList.add('top');
        navigation.style.backgroundColor = "#fff";
    }

})

let status = false;
burguerBtn.addEventListener('click', function () {
    let navContainer = document.querySelector('.nav-desktop');


    if (status === false) {
        burguerBtn.classList.add("open"); 
        navContainer.classList.add("open"); 
        status = true;
    } else {
        burguerBtn.classList.remove("open"); 
        navContainer.classList.remove("open"); 
        status = false;
    }

});

// menu
window.addEventListener("DOMContentLoaded", function() {
    displayItems(items);
});

//this function displays all the items in our data
function displayItems(items) {
    let displayedItems = items.map(function (item) {
        return `<li class="menu-item">
                   <a href="product.html">
                      <img src=${item.img} alt=${item.tittle} />
                      <div class="item-info">
                          <h4>${item.tittle}</h4>
                          <h4>$${item.price}</h4>
                      </div>
                    </a>
                </li>`;
    })
    displayedItems = displayedItems.join("");
    showcaseSection.innerHTML = displayedItems;
};

// this function filters throught the items displayed by displayItems
filterBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.category;
        const menuCategory = items.filter(function (menuItem) {
            if (menuItem.category === category) {
                return(menuItem);
            }
        }) 
        if (category === "all") {
           displayItems(items);
            filterContent.classList.remove("open"); 
            status = false;
        } else {
            displayItems(menuCategory);
            filterContent.classList.remove("open"); 
            status = false;
        }
    })
});

// //display Product
// function displayProduct(product) {
//     const productName = document.querySelector('.product-tittle');
//     productName = items[id]
// }


//Procduct Gallery
function changeImage(e) {
    activeImage.src = e.target.src; 
}

productImages.forEach( image => image.addEventListener('click', changeImage));



pageTittle.addEventListener('click', function () {

    if (status === false) {
        filterContent.classList.add("open"); 
        status = true;
    } else {
        filterContent.classList.remove("open"); 
        status = false;
    }
});
