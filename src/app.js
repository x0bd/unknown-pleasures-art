/*

 Unknown Pleasures

Curves constructed from the actual data from the first
recorded radio pulsar, PSR B1919+21. Artist Peter Saville
saw the image in The Cambridge Encyclopaedia of Astronomy,
and presented a few options to the band. Bernard Sumner
chose PSR B1919+21, and the rest is history.

*/

import "../css/style.css";
import { sketch } from "p5js-wrapper";

const outerOffset = 200;
const innerOffset = 100;

sketch.setup = function () {
	createCanvas(800, 800);
	colorMode(HSB, 360, 100, 100, 100);
	angleMode(DEGREES);
};

sketch.draw = function () {
	background(0, 0, 10);

	const w = width - innerOffset * 2 - outerOffset;
	const h = height - innerOffset * 2 - outerOffset;

	push();
	translate(outerOffset, outerOffset);
	stroke(0, 0, 100);
	fill(0, 0, 10);
	for (let y0 = 0; y0 <= h; y0 += h / 50) {
		beginShape();
		for (let x = 0; x <= w; x += 1) {
			let dist = abs(x - w / 2);
			let theta = map(dist, 0, w / 2, 0, 90);
			let amp = map(sin(theta), 0, 1, h / 5, h / 100);
			let n = noise(y0 / 20, x / 40, frameCount / 100);
			n = map(n * n, 0, 1, -0.1, 0.7);
			let y = y0 - n * amp;
			vertex(x, y);
		}
		endShape();
	}
	pop();
};
