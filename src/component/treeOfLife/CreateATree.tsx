import { useEffect, useState } from "react";

export default function CreateATree() {
  var myCanvas = document.getElementById("tree-of-life") as HTMLCanvasElement;
  var ctx = myCanvas ? myCanvas.getContext("2d") : null;

  function random(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  //The main draw function
  function drawTree(
    startX: number,
    startY: number,
    length: number,
    angle: number,
    branchWidth: number,
    hue: number,
    sat: number,
    light: number
  ) {
    console.log("render try 2");
    if (ctx) {
      console.log("render try 3");
      //Sets line width
      ctx.lineWidth = branchWidth;

      //Starts a path
      ctx.beginPath();

      //Adds current canvas to call stack
      ctx.save();

      //Uses template literals to get the color of the nodes (in HSL)
      ctx.strokeStyle = `hsl(${random(hue - 10, hue + 10)}, ${sat}%, ${light}%`;
      ctx.fillStyle = `hsl(${hue}, ${sat}%, ${light}%`;

      //Translates the branch and rotates it
      ctx.translate(startX, startY);
      ctx.rotate((angle * Math.PI) / 180);
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -length);
      ctx.stroke();

      //Some nice shadow blur and color
      //   ctx.shadowBlur = 15;
      //   ctx.shadowColor = "rgba(0, 0, 0, 0.4)";

      //Returns the last canvas
      if (length < 10) {
        ctx.restore();
        return;
      }

      //The recursive part: when a branch is long enough,, draw two branches on it's end in different angles
      //Changes the hue, saturation and lightness to create a gradient based on where the node is (nearer the top = greener)
      drawTree(
        0,
        //Starts at the end of the previous branch
        -length,
        //A little bit smaller
        length * 0.8,
        //Angles it
        angle - 12.5,
        //Makes it thinner
        branchWidth * 0.8,
        //And adjusts the colors
        (hue += 2),
        100,
        (light += 1)
      );
      drawTree(
        0,
        //Starts at the end of the previous branch
        -length,
        //A little bit smaller
        length * 0.8,
        //Angles it
        angle + 12.5,
        //Makes it thinner
        branchWidth * 0.8,
        //And adjusts the colors
        (hue += 2),
        100,
        (light += 1)
      );

      ctx.restore();
    }
  }

  //The first branch being drawn
  useEffect(() => {
    console.log("first render try of lot");
    drawTree(100, 675, 120, 0, 10, 30, 100, 29);
  }, [myCanvas]);
  return <></>;
}
