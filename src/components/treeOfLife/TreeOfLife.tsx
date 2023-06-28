import { useEffect, useRef } from "react";
import styles from "./treeoflife.module.css";
export default function TreeOfLife() {
  const svgRef = useRef<SVGSVGElement>(null);

  //The first branch being drawn
  useEffect(() => {
    const svg = svgRef.current;
    function random(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }
    // The main draw function
    function drawTree(
      startX: number,
      startY: number,
      length: number,
      angle: number,
      branchWidth: number,
      hue: number,
      sat: number,
      light: number,
      delay: number,
      iteration: number
    ) {
      const randomAngle = random(angle - 45, angle + 45);
      // Returns when the branch is too small
      //   console.log("length", length);
      if (branchWidth < 1) {
        return;
      }
      // Create a new path element
      var path = document.createElementNS("http://www.w3.org/2000/svg", "path");

      // Uses template literals to get the color of the nodes (in HSL)
      var strokeColor = `hsl(${random(
        hue - 10,
        hue + 10
      )}, ${sat}%, ${light}%)`;
      var fillColor = `hsl(${hue}, ${sat}%, ${light}%)`;

      // Construct the path data
      const factor = length * 0.30125;
      const quadraticFactor = 1.5; // Adjust the factor to control the rate of decrease
      const quadraticAngleMinus = Math.max(
        -360,
        angle - Math.pow(iteration, 2) * quadraticFactor
      );
      const quadraticAnglePlus = Math.min(
        270,
        angle + Math.pow(iteration, 2) * quadraticFactor
      );

      const rotationAngleX = Math.cos((angle * Math.PI) / 180);
      const rotationAngleY = Math.sin((angle * Math.PI) / 180);

      var pathData = `M${startX},${startY} L${
        startX + rotationAngleX * length
      },${startY + rotationAngleY * length}`;

      // Set attributes for the path
      path.setAttribute("d", pathData);
      path.setAttribute("stroke", strokeColor);
      path.setAttribute("fill", fillColor);
      path.setAttribute("stroke-width", branchWidth.toString());

      // Append the path to the SVG
      svg?.appendChild(path);
      // The recursive part: draw two branches on the end of the current branch in different angles
      // Changes the hue, saturation, and lightness to create a gradient based on the node position
      const childBranches = [
        {
          startX: startX + rotationAngleX * length,
          startY: startY + rotationAngleY * length,
          length: length * 0.8,
          angle: angle - 18,
          branchWidth: branchWidth * 0.82,
          hue: hue + 3.5,
          light: light + 4,
          sat: sat,
          delay: delay,
          iteration: iteration++,
        },
        {
          startX: startX + rotationAngleX * length,
          startY: startY + rotationAngleY * length,
          length: length * 0.8,
          angle: angle + 18,
          branchWidth: branchWidth * 0.82,
          hue: hue + 3.5,
          light: light + 4,
          sat: sat,
          delay: delay,
          iteration: iteration++,
        },
      ];

      for (const branch of childBranches) {
        setTimeout(() => {
          drawTree(
            branch.startX,
            branch.startY,
            branch.length,
            branch.angle,
            branch.branchWidth,
            branch.hue,
            branch.sat,
            branch.light,
            branch.delay,
            branch.iteration
          );
        }, delay);
      }
    }

    if (svg) {
      // Clear any existing content in the SVG
      while (svg.firstChild) {
        svg.firstChild.remove();
      }

      // The first branch being drawn
      const { width, height } = svg.getBoundingClientRect();

      drawTree(
        width / 2,
        (height * 3.1) / 4,
        120,
        -90,
        10,
        35,
        200,
        29,
        100,
        0
      );
    }
  }, []);
  return (
    <>
      {/* <p id="title">A weeping willow fractal tree</p> */}
      <svg
        ref={svgRef}
        className={styles["tree-of-life"]}
        id="my-svg"
        width="100%"
        height="100%"
      ></svg>
    </>
  );
}
