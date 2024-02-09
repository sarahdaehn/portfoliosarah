import React from "react";
     
export default class Particles extends React.Component {
  componentDidMount() {
    this.generateParticles();
  }
 
  generateParticles = () => {
    const canvas = document.getElementById("particles");
 
    const ctx = canvas.getContext("2d");
 
    canvas.width = document.documentElement.clientWidth;
 
    canvas.height = document.documentElement.clientHeight;
 
    let num = 200;
 
    let size = 2;
 
    let min_speed = 0.5;
 
    let max_speed = 2;
 
    let line_distance = 100;
 
    let particles = [];
 
    const distance = (pointA, pointB) => {
      let dx = Math.abs(pointB.x - pointA.x);
 
      let dy = Math.abs(pointB.y - pointA.y);
 
      return Math.sqrt(dx * dx + dy * dy);
    };
 
    const randVelocity = () => {
      return max_speed * Math.random() - min_speed;
    };
 
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
 
        this.y = Math.random() * canvas.height;
 
        this.vx = randVelocity();
 
        this.vy = randVelocity();
 
        // Generate random color for each particle
 
        this.color = `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
 
        this.radius = Math.floor(Math.random() * 6) + 1;
      }
    }
 
    for (let i = 0; i < num; i++) {
      particles.push(new Particle());
    }
 
    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
 
      for (let t = 0; t < particles.length; t++) {
        let p = particles[t];
 
        for (let q = 0; q < particles.length; q++) {
          if (distance(particles[q], p) <= line_distance) {
            ctx.beginPath();
 
            ctx.lineWidth = 0.3;
 
            ctx.strokeStyle = p.color;
 
            ctx.moveTo(p.x, p.y);
 
            ctx.lineTo(particles[q].x, particles[q].y);
 
            ctx.stroke();
          }
        }
 
        // Draw each particle as a circle with gradient color
 
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius
        );
 
        gradient.addColorStop(0, p.color);
 
        gradient.addColorStop(1, "rgba(255, 255, 255, 0.3)");
 
        ctx.fillStyle = gradient;
 
        ctx.beginPath();
 
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
 
        ctx.fill();
 
        p.x += p.vx;
 
        p.y += p.vy;
 
        if (p.x <= size || p.x >= canvas.width - size) {
          p.vx *= -1;
        }
 
        if (p.y <= size || p.y >= canvas.height - size) {
          p.vy *= -1;
        }
      }
 
      requestAnimationFrame(draw);
    };
 
    draw();
  };
 
  render() {
    return <canvas id="particles"></canvas>;
  }
}
 