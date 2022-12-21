const canvas = document.querySelector("canvas"); // html의 캔버스를 JS로 추출하여 const canvas에 배정했습니다.

const ctx = canvas.getContext("2d"); // canvas에서 그릴 그림의 종류를 2d로 지정했습니다.

// CSS에서 지정한 캔버스의 크기를 JS에서 지정했습니다. (캔버스에서 좌표는 좌측 상단으로부터 0, 0으로 시작합니다.)
canvas.width = 800;
canvas.height = 800;

/* rect = 사각형 그리기, fill = 도형 채우기 fillRect = 채워진 사각형 그리기.
 채워진 사각형을 그렸습니다. fillRect(X좌표, Y좌표, 넓이, 높이) */
// ctx.fillRect(50, 50, 100, 200);

// ctx.moveTo(50, 50); // moveTo 함수는 브러쉬를 지정된 자표로 이동시킵니다. (X, Y)
// ctx.lineTo(150, 50); // lineTo 함수는 지정된 위치까지 브러시를 이동시키며 선을 그립니다. (X, Y)
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.fill(); // 그려진 사각형의 내부를 채웁니다.
// ~#1.3

ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);
ctx.lineWidth = 2; // lineWidth는 선의 두께를 지정합니다. (이 코드 아래부터 그려지는 선에 적용됩니다.)
ctx.strokeRect(300, 300, 50, 100); // strokeRect는 중앙이 비어있는 사각형을 그립니다.
ctx.fillRect(200, 200, 200, 20);
ctx.moveTo(200, 200);
ctx.lineTo(325, 100);
ctx.lineTo(450, 200);
ctx.fill(); // stroke, fill은 lineTo 아래에 있어야합니다.
