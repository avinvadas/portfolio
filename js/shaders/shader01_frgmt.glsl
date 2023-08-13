#ifdef GL_ES
precision mediump float;
#endif
#define PI 3.14159265359;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

uniform float u_grid_column_width;
uniform vec3 u_color_primary;
uniform float u_shader_speed;





void main() {
vec2 st = gl_FragCoord.xy/u_resolution;
    float pct01 = 0.0;
    float pct02 = 0.0;
    float pct03 = 0.0;
   
    float u_shader_speed = 0.2;
    pct01 = distance(st,vec2(sin(0.75+u_time* u_shader_speed),cos(0.5+u_time* u_shader_speed)));
    pct02 = distance(st,vec2(cos(0.75+u_time* u_shader_speed),sin(0.75+u_time* u_shader_speed) ));
    pct03 = distance(st, vec2(0.5));
 

    vec3 color = vec3(pct02*0.5, 0.3, 0.3)+
                 vec3(0.3, 0.3,pct01)+
                 vec3( pct03);

	gl_FragColor = vec4( color, 1.0 );
}