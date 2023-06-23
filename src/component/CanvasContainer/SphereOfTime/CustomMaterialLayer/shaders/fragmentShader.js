const fragmentShader = `
uniform float u_time;
uniform float u_frequency;
uniform float u_amplitude;
uniform vec3 u_color;

varying vec2 v_Uv;
varying float v_Displacement;


void main() {
	float f_Distort = 2.0 * v_Displacement * u_amplitude*u_time;
	vec3 f_Color = vec3(abs(v_Uv - 0.5) * 2.0  * (1.0 - f_Distort), 1.0);
	vec4 f_EndColor = vec4(f_Color, 1.);
	return f_EndColor;
}`;
export default fragmentShader;
