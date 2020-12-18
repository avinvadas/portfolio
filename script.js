/*var section__headings = document.getElementsByClassName("section__heading");*/
var controller = new ScrollMagic.Controller();


//ScrollMagic//
var controller = new ScrollMagic.Controller();

//timelines//
var tl_hero_in = new TimelineMax();
tl_hero_in.from("#hero_graphics_container", 1, {
  backgroundImage: "radial-gradient(white 2em, black 2em)"
});
tl_hero_in.to("#hero_graphics_container", 1, {
  backgroundImage: "radial-gradient(white 1px, black 1px)"
});

var tl_hero_out = new TimelineMax();
tl_hero_out.from("#hero_graphics_container", 1, {
  backgroundImage: "radial-gradient(white 1px, black 1px)"
});
tl_hero_out.to("#hero_graphics_container", 1, {
  backgroundImage: "radial-gradient(white 2em, black 2em)"
});

var scene_heading__leave = new ScrollMagic.Scene({
  triggerElement: "#hero_graphics_container",
  triggerHook: "onLeave",
  duration: "200%"
})
  .setTween(tl_hero_out)
  .addTo(controller);

var scene_heading__enter = new ScrollMagic.Scene({
  triggerElement: "#hero_graphics_container",
  triggerHook: "onEnter",
  duration: "100%"
})
  .setTween(tl_hero_in)
  .addTo(controller);

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

var scene_hero_title = new ScrollMagic.Scene({
  triggerElement: "#logotype",
  reverse: true
})
  .setClassToggle("#hero_heading", "hero_heading--hidden")
  .triggerHook("onLeave")
  .addTo(controller);
