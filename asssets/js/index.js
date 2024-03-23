document.addEventListener("mousemove", (e) => {
  Object.assign(document.documentElement, {
    style: `--moveX:${e.clientX - innerWidth / 2}deg;
        --moveY:${e.clientY - innerHeight / 2}deg;
        `,
  });
});
