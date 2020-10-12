var controller = new ScrollMagic.Controller();

var scene_heading_need = new ScrollMagic.Scene({
  triggerElement: "#section_heading-need"
})
  .setClassToggle("#section_heading-need", "section__heading--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

var scene_heading_need = new ScrollMagic.Scene({
  triggerElement: "#section_heading-guidelines"
})
  .setClassToggle("#section_heading-guidelines", "section__heading--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

var scene_heading_need = new ScrollMagic.Scene({
  triggerElement: "#section_heading-solution"
})
  .setClassToggle("#section_heading-solution", "section__heading--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

var scene_heading_need = new ScrollMagic.Scene({
  triggerElement: "#section_heading-conclusion"
})
  .setClassToggle("#section_heading-conclusion", "section__heading--reveal")
  .triggerHook("onEnter")
  .addTo(controller);