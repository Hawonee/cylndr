

//현재 시간, 날짜
function getTime(e) {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  e.innerText = `${hour} : ${minute} : ${second}`;
}
const time = document.querySelector(".time");
getTime(time);
setInterval(function () {
  getTime(time);
}, 1000);
const head = document.querySelector([".head.time"]);
getTime(head);
setInterval(function () {
  getTime(head);
}, 1000);

const date = new Date();
const options = {
  month: "short",
  day: "numeric",
  year: "numeric",
  daySuffix: true,
};
const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
const dateElement = document.querySelector(".head.date");
dateElement.textContent = formattedDate.toUpperCase();

gsap.registerPlugin(ScrollTrigger);

$('[data-motion="text"]').each(function (i, el) {
  child = $(this).find("span");
  gsap.from(child, {
    y: 30,
    scrollTrigger: {
      trigger: el,
      start: "0% 100%",
      // markers:true,
    },
    opacity: 0,
    duration: 0.5,
    stagger: 0.05,
  });
});

changeImg = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-aboutus .area5 .bg-list",
    start: "0% 0%",
    end: "100% 100%",
    // markers:true,
    scrub: 1,
  },
});

changeImg
  .to(".bg-list .bg-item", 0, { xPercent: -100 })
  .to(".bg-list .bg-item", 0, { delay: 0.1, xPercent: -200 })
  .to(".bg-list .bg-item", 0, { delay: 0.1, xPercent: -300 })
  .to(".bg-list .bg-item", 0, { delay: 0.1, xPercent: -400 })
  .to(".bg-list .bg-item", 0, { delay: 0.1, xPercent: -500 });

// gsap.from(".txt-box .others", {
//   y: 50,
//   scrollTrigger: {
//     trigger: ".area1",
//     start: "90% 100%",
//   },
//   opacity: 0,
//   duration: 0.5,
// });

gsap.to(".area2 .img-item", {
  x: "-500%",
  scrollTrigger: {
    trigger: ".area2",
    start: "-10% 100%",
    end: "100% 0",
    scrub: 1,
    // markers: true,
  },
});

gsap.to(".area4 .bg-wrap .txt.left", {
  x: "-15%",
  scrollTrigger: {
    trigger: ".area4",
    start: "0 100%",
    end: "100% 0",
    scrub: 1,
  },
});
gsap.to(".area4 .bg-wrap .txt.right", {
  x: "15%",
  scrollTrigger: {
    trigger: ".area4",
    start: "0 100%",
    end: "100% 0",
    scrub: 1,
  },
});

gsap.from(".area6 .team-box em", {
  y: 50,
  scrollTrigger: {
    trigger: ".area6",
    start: "0% 100%",
    end: "80% 0",
    scrub: 1,
    // markers: true,
  },
  opacity: 0,
  duration: 1,
});
gsap.from(".area6 .team-box .info1,.info2,.info3.others", {
  y: 50,
  scrollTrigger: {
    trigger: ".area6",
    start: "0% 100%",
    end: "60% 0",
    scrub: 1,
    // markers: true,
  },
  opacity: 0,
  stagger: 1,
  duration: 2,
});

// gsap.from('.area6 .team-box .info3.others', {
//   y: 30,
//   scrollTrigger: {
//     trigger: ".area6",
//     start: "0% 100%",
//     end: "80% 0",
//     scrub: 1,
//     markers: true,
//   },
//   opacity: 0,
//   stagger: 1,
// });

circleMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".area7",
    start: "0% 0%",
    end: "100% 0",
    scrub: 1,
    pin: true,
    //markers: true,
  },
});
circleMotion.addLabel("a").to(".circle", { ease: "none", scale: 30 }, "a").from(".circle-tit", { xPercent: 70 }, "a");
// 추가적으로

//배경색 바꾸기
gsap.utils.toArray(".area8").forEach((item) => {
  let color = item.getAttribute("data-bgcolor");

  ScrollTrigger.create({
    trigger: item,
    start: "10% 100%",
    end: "10% 0%",
    markers: true,
    scrub: 1,

    // onEnter: () => gsap.to(".area8", {
    //     backgroundColor: color,
    //     duration: 1.4,
    // }),
    // onEnterBack: () => gsap.to(".area8", {
    //     backgroundColor: color,
    //     duration: 1.4,
    // }),
  });
});

gsap.to(".area8 .bg-wrap .txt.left", {
  x: "-30%",
  scrollTrigger: {
    trigger: ".area8",
    start: "0 100%",
    end: "100% 0",
    scrub: 1,
  },
});
gsap.to(".area8 .bg-wrap .txt.right", {
  x: "30%",
  scrollTrigger: {
    trigger: ".area8",
    start: "0 100%",
    end: "100% 0",
    scrub: 1,
  },
});

const img = document.querySelector(".img-box");
const txt = document.querySelector(".txt-box");
const item = document.querySelector(".container");
const scrollSpeed = 0.2;

area9Motion = gsap.timeline({
  scrollTrigger: {
    trigger: ".area9",
    start: "0% 0%",
    end: "100% 0",
    scrub: 1,
    pin: true,
    //markers: true,
  },
});
area9Motion.to(".area9 .img-scale", { width: "100vw" }, "a").to(".area9 .img-scale .img1", { opacity: 0 }, "a").to(".area9 .img-scale .img2", { opacity: 0 }, "a+=0.1").to(item, { xPercent: -100 });

// area10 초록색 영역 가로 슬라이드
hell = gsap.timeline({
  scrollTrigger: {
    trigger: ".stiky-area",
    start: "0% 0%",
    end: "100% 0%",
    scrub: 1,
    pin: true,
    pinSpacing: false,
  },
});

hell.to(".area10", { xPercent: -100 });

gsap.from(".area14 .deco", {
  y: 50,
  scrollTrigger: {
    trigger: ".area14",
    start: "0 100%",
    end: "100% 0",
    scrub: true,
    // markers: true,
  },
});

$(".sc-recuit .container .main-txt .card").plate({
  inverse: true,
});
