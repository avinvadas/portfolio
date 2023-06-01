gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease:"none", duration: 1.5});

var easeOut = "power2.inOut"
var unit_span = 2
const icons_tl = gsap.timeline();
const image_tl = gsap.timeline();

icons_tl.addLabel("AppScan_in","0")
icons_tl.addLabel("AppScan_out","1")
icons_tl.addLabel("ASE_in", "2")
icons_tl.addLabel("ASoC_in", "2")
//icons_tl.addLabel("ASoC_out", "2")
icons_tl.addLabel("SRC_in", "2")
//icons_tl.addLabel("SRC_out", "2")
icons_tl.addLabel("GO_in", "2")
//icons_tl.addLabel("GO_out", "2")
icons_tl.addLabel("ASD_in", "2")
//icons_tl.addLabel("ASD_out", "2")



icons_tl
.to("#AppScan",{ translateY: -1.5, scale:0.58, duration: unit_span},"AppScan_out")
.to("#AppScan_gradstop_02",{attr:{offset:"100%", duration: 0.25}},"AppScan_out-0.1")
.to("#AppScan",{opacity:0, duration: unit_span})
.to("#ASE",{opacity:1, duration: 1.0},"ASE_in")
.to("#ASoC",{opacity:1, duration: 0.5},"ASoC_in")
.to("#SRC",{opacity:1, duration: 0.5},"SRC_in")
.to("#GO",{opacity:1, duration: 0.5},"GO_in")
.to("#ASD",{opacity:1, duration: 0.5 },"ASD_in")



ScrollTrigger.create({
  animation: icons_tl,
  trigger: "#main_container",
  start:"top top",
  end:"+=1000",
  scrub:true,
  pin:"#icons_slide",
  anticipatePin:1
})



ScrollTrigger.create({
  animation: image_tl,
  trigger: "#slide_system__image01",
  scrub:false,

})
