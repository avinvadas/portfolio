

/**/

#define PI 3.14159265359
// Uniforms
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
  

float circle(vec2 st, vec2 center, float radius){
float d = distance(st, vec2(pow(center.x,3.0 ),pow(center.y, 1.0 )));
//apply ripple effect to each circle based on mouse distance from center
d += 0.1*sin(distance(st, vec2(u_mouse/u_resolution.xy*5.)) * (0.5 - float(u_mouse/u_resolution.xy*10.)) - sin(u_time*0.1));

return 1.-smoothstep(radius-0.01, radius, d);
}




  
float totalRadius = 0.0;
//create multiple circles with different sizes on single ratio
float circles(vec2 st, vec2 center, float ratio, int circlesNum){
float color = 0.;
for(int i = 0; i < circlesNum; i++){
float radius = ratio *float(i-1);
radius += 0.01*sin(sin(u_time*0.1));
if(i == circlesNum -1){
radius = ratio *float(i-1);
totalRadius = radius;
//set area outside of the last circle to white




}
color += circle(st, vec2(0.5, (1. - (1.0-radius*2.0))-radius), radius*1.2);
}
//apply ripple effect to each circle based on mouse position
color += 0.01*sin(distance(st, vec2(0.5, 0.5)) * 10.0 - sin(u_time*0.1));
return color;
}

// Main
void main(){


// Normalized pixel coordinates (from 0 to 1)
vec2 uv = gl_FragCoord.xy/ u_resolution.xy;
uv = 1.-uv-vec2(0.33, 0.0); 
//normalize mouse position
vec2 mouse = u_mouse/u_resolution.xy;
// Time varying pixel color

  uv = (uv * 2.0) ;
  mouse = (mouse * 4.0);

float colorlayer = circles(uv, vec2(0.1, 0.15), 0.2, 8);
vec3 color = vec3(colorlayer * (sin((u_time))), 0.0,colorlayer * 0.15) * (sin((u_time)));

color += vec3(colorlayer , colorlayer * 0.5,colorlayer);
color -=  vec3(0.0,0.0,1.0-colorlayer);
//set area outside of the last circle to white


gl_FragColor = vec4(color, 1.0);
}