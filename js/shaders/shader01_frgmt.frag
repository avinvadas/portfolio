#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359
#define TWO_PI 6.28318539718
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float circle(in vec2 _st, in float _radius, in float blurFactor, in float speedFactor){
  vec2 l = _st-vec2(0.5);
  return 1.0 - smoothstep(_radius - (_radius * blurFactor),
  _radius+(_radius* blurFactor),
  dot(l,l)*4.0);
}

void main(){

  vec2 st= gl_FragCoord.xy / u_resolution.xy;
  vec3 color = vec3(circle(vec2(st.x+sin(u_time*0.15),st.y+cos(u_time*0.15)),0.5,6.,0.25),
                    circle(vec2(st.x+cos(u_time*0.15),st.y+sin(u_time*0.15)),0.5,9.,0.25),
                    circle(vec2(st.x+cos(u_time*0.15),st.y+sin(u_time*0.15)),0.5,9.,0.25));



  gl_FragColor = vec4(color,1.0);
  //gl_FragColor = vec4(vUv,0.0,1.0);
  //gl_FragColor = bmp;
  //gl_FragColor = vec4(vNoise);
}
