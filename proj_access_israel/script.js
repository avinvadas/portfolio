var controller = new ScrollMagic.Controller();
var scene_heading_need = new ScrollMagic.Scene({
  triggerElement: "#section_heading-need"
})
  .setClassToggle("#section_heading-need", "section__heading--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

var scene_heading_challenges = new ScrollMagic.Scene({
  triggerElement: "#section_heading-challenges"
})
  .setClassToggle("#section_heading-challenges", "section__heading--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

var scene_heading_solutions = new ScrollMagic.Scene({
  triggerElement: "#section_heading-solutions"
})
  .setClassToggle("#section_heading-solutions", "section__heading--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

var scene_heading_suggested_journey = new ScrollMagic.Scene({
  triggerElement: "#section_heading-suggested_journey"
})
  .setClassToggle(
    "#section_heading-suggested_journey",
    "section__heading--reveal"
  )
  .triggerHook("onEnter")
  .addTo(controller);

var scene_heading_principles = new ScrollMagic.Scene({
  triggerElement: "#section_heading-principles"
})
  .setClassToggle("#section_heading-principles", "section__heading--reveal")
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

var scene_heading_hFidelity = new ScrollMagic.Scene({
  triggerElement: "#section_heading-highFidelity"
})
  .setClassToggle("#section_heading-highFidelity", "section__heading--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

var scene_heading_hFidelity = new ScrollMagic.Scene({
  triggerElement: "#section_heading-illustration"
})
  .setClassToggle("#section_heading-illustration", "section__heading--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

var scene_heading_hFidelity = new ScrollMagic.Scene({
  triggerElement: "#section_heading-interaction"
})
  .setClassToggle("#section_heading-interaction", "section__heading--reveal")
  .triggerHook("onEnter")
  .addTo(controller);