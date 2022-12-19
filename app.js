const canvas = document.querySelector("canvas"); // html의 캔버스를 JS로 추출하여 const canvas에 배정했습니다.

const ctx = canvas.getContext("2d"); // canvas에서 그릴 그림의 종류를 2d로 지정했습니다.

// CSS에서 지정한 캔버스의 크기를 JS에 알려줬습니다.
canvas.width = 800;
canvas.height = 800;

// 채워진 사각형을 그렸습니다. fillRect.(X좌표, Y좌표, 넓이, 높이)
ctx.fillRect(50, 50, 100, 200);
