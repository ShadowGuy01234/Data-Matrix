// <--------------------loading page/effect------------------>

document.querySelectorAll(".reveal").forEach(function (elem) {
    let parent = document.createElement("span");
    let child = document.createElement("span");
    parent.classList.add("parent");
    child.classList.add("child");
    child.innerHTML = elem.innerHTML;
    elem.innerHTML = "";
    parent.appendChild(child);
    elem.appendChild(parent);
  });
  
  var tl = gsap.timeline();
  
  tl.to(".loader-top .parent .child", {
    y: "-100%",
    delay: 1.5,
    duration: 0.9,
    ease: Back.easeOut,
  })
    .to(".center .parent .child ", {
      x: "0%",
      ease: Back.easeinOut,
      delay: -2,
      duration: 0.5,
      stagger: 0.2,
    })
    .to(".center .parent .child", {
      y: "-100%",
      duration: 0.2,
      stagger: 0.2,
    })
    .to(".loader", {
      height: "0%",
      duration: 2,
      ease: Expo.easeInOut,
    })
    .to(".green-div", {
      height: "100%",
      duration: 2,
      delay: -1.999,
      ease: Expo.easeInOut,
    })
    .to(".landing-page", {
      height: "100%",
      duration: 2,
      delay: -1.8,
      ease: Expo.easeInOut,
    });
  
  // <--------------------landing page --------------->
  let imgObject = [
  "./sports/ipl.jpg",
  "https://wallpapers.com/images/featured/la-liga-0aro8g4lgynmd197.jpg",
  "https://wallpapers.com/images/featured/mlb-baseball-league-7mkvscut7kdjdnrd.jpg",
  "https://glaws.in/wp-content/uploads/2018/12/6.-Dream11-Becomes-Official-Fantasy-Game-Partner-of-Australian-Big-Bash-League-1280x720.png",
  "https://thechessdrum.net/blog/wp-content/uploads/2024/11/Ding-Gukesh.png",
  "https://media.sketchfab.com/models/24c50b8aace1421da1fd7b682c818180/thumbnails/003034192b2f474aa911898aee1bb5bb/4ea18c2d023d48e19d2f79eab875505c.jpeg",
  "https://www.prokabaddi.com/static-assets/waf-images/32/18/55/16-9/pkllogodec14.jpg",
  "https://i.pinimg.com/originals/c7/08/8d/c7088df551317fb2915a5f15f10ae8ee.jpg",
  "https://wallpaperaccess.com/full/2241951.png",
  ];
  
  let mainImg = 0;
  let prevImg = imgObject.length - 1;
  let nextImg = 1;
  let autoScrollInterval;
  
  function loadGallery() {
    let mainView = document.getElementById("mainView");
    mainView.style.background = "url(" + imgObject[mainImg] + ")";
    mainView.style.backgroundSize = "cover";
  
    let leftView = document.getElementById("leftView");
    leftView.style.background = "url(" + imgObject[prevImg] + ")";
    leftView.style.backgroundSize = "cover";
  
    let rightView = document.getElementById("rightView");
    rightView.style.background = "url(" + imgObject[nextImg] + ")";
    rightView.style.backgroundSize = "cover";
  
    let linkTag = document.getElementById("linkTag");
    linkTag.href = imgObject[mainImg];
  }
  
  function scrollRight() {
    prevImg = mainImg;
    mainImg = nextImg;
    if (nextImg >= imgObject.length - 1) {
      nextImg = 0;
    } else {
      nextImg++;
    }
    loadGallery();
  }
  
  function scrollLeft() {
    nextImg = mainImg;
    mainImg = prevImg;
    if (prevImg === 0) {
      prevImg = imgObject.length - 1;
    } else {
      prevImg--;
    }
    loadGallery();
  }
  
  function startAutoScroll() {
    autoScrollInterval = setInterval(scrollRight, 1500); // Change image every 3 seconds
  }
  
  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }
  
  document.getElementById("outer3").addEventListener("click", toggleState3);
  
  function toggleState3() {
    let galleryView = document.getElementById("galleryView");
    let tilesView = document.getElementById("tilesView");
    let outer = document.getElementById("outer3");
    let slider = document.getElementById("slider3");
    let tilesContainer = document.getElementById("tilesContainer");
  
    if (slider.classList.contains("active")) {
      slider.classList.remove("active");
      outer.classList.remove("outerActive");
      galleryView.style.display = "flex";
      tilesView.style.display = "none";
  
      while (tilesContainer.hasChildNodes()) {
        tilesContainer.removeChild(tilesContainer.firstChild);
      }
    } else {
      slider.classList.add("active");
      outer.classList.add("outerActive");
      galleryView.style.display = "none";
      tilesView.style.display = "flex";
  
      for (let i = 0; i < imgObject.length; i++) {
        let tileItem = document.createElement("div");
        tileItem.classList.add("tileItem");
        tileItem.style.background = "url(" + imgObject[i] + ")";
        tileItem.style.backgroundSize = "cover";
        tilesContainer.appendChild(tileItem);
      }
    }
  }
  
  document.getElementById("navRight").addEventListener("click", () => {
    stopAutoScroll();
    scrollRight();
    startAutoScroll();
  });
  
  document.getElementById("navLeft").addEventListener("click", () => {
    stopAutoScroll();
    scrollLeft();
    startAutoScroll();
  });
  
  document.getElementById("rightView").addEventListener("click", () => {
    stopAutoScroll();
    scrollRight();
    startAutoScroll();
  });
  
  document.getElementById("leftView").addEventListener("click", () => {
    stopAutoScroll();
    scrollLeft();
    startAutoScroll();
  });
  
  document.addEventListener("keyup", (e) => {
    if (e.keyCode === 37) {
      stopAutoScroll();
      scrollLeft();
      startAutoScroll();
    } else if (e.keyCode === 39) {
      stopAutoScroll();
      scrollRight();
      startAutoScroll();
    }
  });
  
  const galleryContainer = document.getElementById("galleryContainer");
  galleryContainer.addEventListener("mouseenter", stopAutoScroll);
  galleryContainer.addEventListener("mouseleave", startAutoScroll);
  
  // Initial loading of the gallery and start auto-scroll
  loadGallery();
  startAutoScroll();
  document.addEventListener('DOMContentLoaded', function () {
    const privacyLink = document.querySelector('.privacy-link');
    privacyLink.addEventListener('click', function () {
        alert('You are being redirected to the Privacy Policy page.');
    })});