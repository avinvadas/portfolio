/*var section__headings = document.getElementsByClassName("section__heading");*/
var controller = new ScrollMagic.Controller();

var scene_heading_services = new ScrollMagic.Scene({
  triggerElement: "#section_heading-services"
})
  .setClassToggle("#section_heading-services", "section__heading--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

var scene_heading_work = new ScrollMagic.Scene({
  triggerElement: "#section_heading-work"
})
  .setClassToggle("#section_heading-work", "section__heading--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

  var scene_heading_testimonials = new ScrollMagic.Scene({
    triggerElement: "#section_heading-about"
  })
    .setClassToggle("#section_heading-about", "section__heading--reveal")
    .triggerHook("onEnter")
    .addTo(controller);
var scene_heading_testimonials = new ScrollMagic.Scene({
  triggerElement: "#section_heading-testimonials"
})
  .setClassToggle("#section_heading-testimonials", "section__heading--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

var scene_proj01_image = new ScrollMagic.Scene({
  triggerElement: "#project01_image"
})
  .setClassToggle("#project01_image", "project_li__image--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

var scene_proj02_image = new ScrollMagic.Scene({
  triggerElement: "#project02_image"
})
  .setClassToggle("#project02_image", "project_li__image--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

var scene_proj03_image = new ScrollMagic.Scene({
  triggerElement: "#project03_image"
})
  .setClassToggle("#project03_image", "project_li__image--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

var scene_button_email = new ScrollMagic.Scene({
  triggerElement: "#hero__button_email",
  reverse: true
})
  .setClassToggle("#nav__button_email", "nav_icon--revealed")
  .triggerHook("onLeave")
  .addTo(controller);
/*#nav__button_email*/
/*
var scene_hero_title = new ScrollMagic.Scene({
  triggerElement: "#logotype",
  reverse: true
})
  .setClassToggle("#hero_heading", "hero_heading--hidden")
  .triggerHook("onLeave")
  .addTo(controller);
*/

  //timelines//
  /*
var tl_hero_in = new TimelineMax();

tl_hero_in.to("#your", 1, {
  textIndent: "0%"
}).to("#product", 1, {
  textIndent: "0%"
}).to("#clearer", 1, {
  textIndent: "0%"
});
*/
var tl_hero_out = new TimelineMax();
tl_hero_out.to("#your", 1, {textIndent: "100%", autoAlpha:0},0)
.to("#product", 1, {textIndent: "-100%", autoAlpha:0},0.1)
.to("#clearer", 1, {textIndent: "100%", autoAlpha:0},0.2);


var scene_heading_leave = new ScrollMagic.Scene({
  triggerElement: "#hero_content",
  duration: '10%',
  triggerHook: 'onLeave',
  triggerOffset: 300,
  reverse: true
})
  .addTo(controller)
  .setTween(tl_hero_out);
var tl_heroBG_out = new TimelineMax();
tl_heroBG_out.to("#hero_background",1,{css:{transform:"rotate(-45deg", opacity:0}, scale:1, autoAlpha:0},0);

var scene_heading_leave = new ScrollMagic.Scene({
  triggerElement: ".section_hero",
  duration: '100%',
  triggerHook: 'onLeave',

  reverse: true
})
  .addTo(controller)
  .setTween(tl_heroBG_out);
/*

var scene_heading_enter = new ScrollMagic.Scene({
  triggerElement: "#hero_content",

  duration: 400,
  reverse: true
})
  .addTo(controller)
  .setTween(tl_hero_in);
*/
