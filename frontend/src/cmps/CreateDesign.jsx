import React, { useRef, useEffect } from "react";
import { Canvas } from "./Canvas";

export function CreateDesign() {
  // const obj = {
  //   name: "mainFrame",
  //   type: "rect",
  //   height: 400,
  //   width: 400,
  //   zIndex: 1,
  //   bgColor: "red",
  //   image: "",
  // };

  // const canvasRef = useRef(null);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const context = canvas.getContext("2d");
  //   //Our first draw
  //   context.fillStyle = "#fff";
  //   context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  // }, []);

  const canvasRef = useRef(null);

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    //Our draw came here
    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    // render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return (
    <section className="canvas-container">
      {/* <Canvas /> */}
      <canvas ref={canvasRef} />
    </section>
  );
}
