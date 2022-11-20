Global.Init();

let x = 0;
  function Update()
  {
    Global.Clear();
    x += 100 * (Global.time.delta / 1000);
    Global.Rect(x, x, 50, 50, '#ff0000');
    gl.useProgram(programInfo.program);
    twgl.setUniforms(programInfo, uniforms);
    twgl.setBuffersAndAttributes(gl, programInfo, bufferInfoStorm);
    twgl.drawBufferInfo(gl, bufferInfoStorm);

     gl.depthFunc(gl.LEQUAL);

    // Sky Box
    gl.useProgram(programInfoSky.program);
    twgl.setUniforms(programInfoSky, uniformsBox);
    twgl.setBuffersAndAttributes(gl, programInfoSky, skyBufferInfo);
    twgl.drawBufferInfo(gl, skyBufferInfo);
    setTimeout(Update, 1000 / Global.fps);
    return gl.canvas;
  }
  Update();