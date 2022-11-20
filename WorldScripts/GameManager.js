const Global = {
    c: document.getElementById("c"),
    ctx: c.getContext("2d"),
    fps: 144,
    clearColor: '#0000ff', // solid blue

    Clear: () =>
    {
        Global.ctx.clearRect(0, 0, Global.c.width, Global.c.height);
        Global.ctx.fillStyle = Global.clearColor;
        Global.ctx.fillRect(0, 0, Global.c.width, Global.c.height);
        Global.time.now = performance.now();
        Global.time.delta = Global.time.now - Global.time.last;
        Global.time.last = Global.time.now;
    },

    Init: () => {
        Global.c.width = Global.c.height = 800;
        Global.c.style = "border: 1px solid black;";
    },

    time: {
        now: 0,
        last: 0,
        delta: 0
      },

    Rect: (x, y, w, h, c) =>
    {
        Global.ctx.fillStyle = c;
        Global.ctx.fillRect(x, y, w, h);
    }
}