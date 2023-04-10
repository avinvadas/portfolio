gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease:"none", duration: 1.5});

var easeOut = "power2.inOut"
var unit_span = 2
const icons_tl = gsap.timeline();
const image_tl = gsap.timeline();

icons_tl.addLabel("AppScan_in","0")
icons_tl.addLabel("ASE_in", "1")
icons_tl.addLabel("ASE_in_1", "1")
icons_tl.addLabel("ASE_in_2", "2")
icons_tl.addLabel("ASE_in_3", "3")
icons_tl.addLabel("ASE_out", "7")
icons_tl.addLabel("ASoC_in", "9")
icons_tl.addLabel("ASoC_in_1", "10")
icons_tl.addLabel("ASoC_out", "12")
icons_tl.addLabel("SRC_in", "14")
icons_tl.addLabel("SRC_in_1", "15")
icons_tl.addLabel("SRC_out", "17")
icons_tl.addLabel("GO_in", "17")
icons_tl.addLabel("GO_in_1", "17")
icons_tl.addLabel("GO_out", "27")
icons_tl.addLabel("ASD_in", "27")
icons_tl.addLabel("ASD_out", "36")



icons_tl
.to("#AppScan",{scale:0.58, duration: unit_span, ease: easeOut},"AppScan_out")
.to("#AppScan_gradstop_02",{attr:{offset:"100%", duration: unit_span}})

.to("#product_title",{text:"HCL AppScan Enterprise",  ease: easeOut, duration: unit_span},"ASE_in")
.to("#product_subtitle",{text:"On-permise application security and risk-management tool",  ease: easeOut, duration: unit_span},"ASE_in")
.to("#AppScan",{opacity:0, duration: unit_span})
.to("#ASE",{opacity:1, duration: unit_span},"ASE_in")
.to("#rib_l",{opacity:1, duration: unit_span},"ASE_in_1")
.to("#rib_r",{opacity:1, duration: unit_span},"ASE_in_2")
.to("#rib_bot",{opacity:1, duration: unit_span},"ASE_in_3")
.to("#rib_bot",{opacity:0, duration: unit_span},"ASE_out")
.to("#rib_l",{opacity:0, duration: unit_span},"ASE_out")
.to("#rib_r",{opacity:0, duration: unit_span},"ASE_out")
.to("#ASoC",{opacity:1, duration: unit_span},"ASoC_in")
.to("#product_title",{text:"HCL AppScan on Cloud", ease: easeOut, duration: unit_span},"ASoC_in")
.to("#product_subtitle",{text:"Cloud-based application security and risk-management tool",  ease: easeOut, duration: unit_span},"ASoC_in")
.to("#ASoC_gradstop_02", {attr:{offset:"0%", duration: unit_span}},"ASoC_in")
.to("#ASoC_gradstop_03", {attr:{offset:"0%", duration: unit_span}},"ASoC_in")
.to("#ASoC_gradstop_04",{attr:{offset:"33%", duration: unit_span}},"ASoC_in")
.to("#ASoC_gradstop_05",{attr:{offset:"33%", duration: unit_span}},"ASoC_in")
.to("#ASoC_gradstop_10",{attr:{offset:"66%", duration: unit_span}},"ASoC_in")
.to("#ASoC_gradstop_11",{attr:{offset:"66%", duration: unit_span}},"ASoC_in")
.to("#ASoC_gradstop_12",{attr:{offset:"100%", duration: unit_span}},"ASoC_in")
.to("#ASoC_gradstop_13",{attr:{offset:"100%", duration: unit_span}},"ASoC_in")
.to("#ASoC_gradstop_06", {attr:{offset:"33%", duration: unit_span* 2}},"ASoC_in_1")
.to("#ASoC_gradstop_07", {attr:{offset:"33%", duration: unit_span* 2}},"ASoC_in_1")
.to("#ASoC_gradstop_08",{attr:{offset:"66%", duration: unit_span* 2}},"ASoC_in_1")
.to("#ASoC_gradstop_09",{attr:{offset:"66%", duration: unit_span* 2}},"ASoC_in_1")
.to("#ASoC",{opacity:"1", duration: unit_span},"ASoC_out")
.to("#ASoC",{opacity:"0", duration: unit_span},"ASoC_out")
.to("#product_title",{text:"HCL AppScan Source", ease: easeOut, duration: unit_span})
.to("#SRC",{opacity:1, duration: unit_span},"SRC_in")
.to("#product_subtitle",{text:"Static application security testing (SAST) tool",  ease: easeOut, duration: unit_span},"SRC_in")
.to("#SRC_gradstop_01a", {attr:{offset:"0%", duration: unit_span }},"SRC_in")
.to("#SRC_gradstop_02a", {attr:{offset:"0%", duration: unit_span }},"SRC_in")
.to("#SRC_gradstop_03a", {attr:{offset:"0%", duration: unit_span }},"SRC_in")
.to("#SRC_gradstop_04a", {attr:{offset:"100%", duration: unit_span }},"SRC_in")
.to("#SRC_gradstop_05a", {attr:{offset:"100%", duration: unit_span }},"SRC_in")
.to("#SRC_gradstop_06a", {attr:{offset:"100%", duration: unit_span }},"SRC_in")
.to("#SRC_gradstop_02b", {attr:{offset:"50%", duration: unit_span }},"SRC_in")
.to("#SRC_gradstop_03b", {attr:{offset:"50%", duration: unit_span }},"SRC_in")
.to("#SRC_gradstop_04b", {attr:{offset:"50%", duration: unit_span }},"SRC_in")
.to("#SRC_gradstop_05b", {attr:{offset:"50%", duration: unit_span }},"SRC_in")
.to("#SRC_gradstop_02c", {attr:{offset:"100%", duration: unit_span* 2 }},"SRC_in_1")
.to("#SRC_gradstop_03c", {attr:{offset:"100%", duration: unit_span* 2 }},"SRC_in_1")
.to("#SRC", {opacity:1, duration: unit_span},"SRC_OUT")
.to("#SRC", {opacity:0, duration: unit_span},"SRC_OUT")
.to("#GO",{opacity:1, duration: 0},"GO_in")
.to("#product_title",{text:"HCL AppScan Go!", ease: easeOut, duration: unit_span},"GO_in")
.to("#product_subtitle",{text:"Static application security testing (SAST) configuration tool",  ease: easeOut, duration: unit_span},"GO_in")
.to("#GO_filler", {strokeDashoffset:1600, duration: unit_span*4},"GO_in")
.to("#GO", {opacity:0, duration: unit_span},"GO_out")
.to("#product_title",{text:"HCL AppScan Standard"},"ASD_in")
.to("#ASD",{opacity:1, duration: unit_span },"ASD_in")
.to("#product_subtitle",{text:"Dynamic application security testing (DAST) tool",  ease: easeOut, duration: unit_span},"ASD_in")
.to("#ASD_gradstop_01b",{attr:{offset:"100%", duration: unit_span * 0.75}},"ASD_in_1")
.to("#ASD_gradstop_01c",{attr:{offset:"100%", duration: unit_span * 0.75}},"ASD_in_1")
.to("#ASD_gradstop_02b",{attr:{offset:"100%", duration: unit_span * 0.75}},"ASD_in_1")
.to("#ASD_gradstop_02c",{attr:{offset:"100%", duration: unit_span * 0.75}},"ASD_in_1")
.to("#ASD_gradstop_03b",{attr:{offset:"0%", duration: unit_span * 0.75}},"ASD_in_1")
.to("#ASD_gradstop_03c",{attr:{offset:"0%", duration: unit_span * 0.75}},"ASD_in_1")

//.to("#ASD", {opacity:0, duration: unit_span},"ASD_out");

ScrollTrigger.create({
  animation: icons_tl,
  trigger: "#main_container",
  start:"top top",
  end:"+=4000",
  scrub:true,
  pin:"#icons_slide",
  anticipatePin:1
})



ScrollTrigger.create({
  animation: image_tl,
  trigger: "#slide_system__image01",
  scrub:false,

})
