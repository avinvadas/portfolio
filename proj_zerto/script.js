/*var section__headings = document.getElementsByClassName("section__heading");*/
var controller = new ScrollMagic.Controller();

var scene_heading_need = new ScrollMagic.Scene({
  triggerElement: "#section_heading-need"
})
  .setClassToggle("#section_heading-need", "section__heading--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

var scene_heading_callenges = new ScrollMagic.Scene({
  triggerElement: "#section_heading-challenges"
})
  .setClassToggle("#section_heading-challenges", "section__heading--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

var scene_heading_architecture = new ScrollMagic.Scene({
  triggerElement: "#section_heading-architecture"
})
  .setClassToggle("#section_heading-architecture", "section__heading--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

var scene_heading_layout = new ScrollMagic.Scene({
  triggerElement: "#section_heading-layout"
})
  .setClassToggle("#section_heading-layout", "section__heading--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

var scene_heading_lowFidelity = new ScrollMagic.Scene({
  triggerElement: "#section_heading-lowFidelity"
})
  .setClassToggle("#section_heading-lowFidelity", "section__heading--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

var scene_heading_highFidelity = new ScrollMagic.Scene({
  triggerElement: "#section_heading-highFidelity"
})
  .setClassToggle("#section_heading-highFidelity", "section__heading--reveal")
  .triggerHook("onEnter")
  .addTo(controller);