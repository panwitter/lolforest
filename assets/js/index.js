document.addEventListener("mousemove", (e) => {
  Object.assign(document.documentElement, {
    style: `--moveX: ${
      (e.clientX - window.innerWidth / 2) * -0.005
    }deg; --moveY: ${(e.clientY - window.innerHeight / 2) * 0.01}deg;`,
  });
});
