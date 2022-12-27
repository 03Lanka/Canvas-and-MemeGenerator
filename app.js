const canvas = document.querySelector("canvas"); // html의 캔버스를 JS로 추출하여 상수인 canvas에 배정했습니다.

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

// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2; // lineWidth는 선의 두께를 지정합니다. (이 코드 아래부터 그려지는 선에 적용됩니다.)
// ctx.strokeRect(300, 300, 50, 100); // strokeRect는 중앙이 비어있는 사각형을 그립니다.
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill(); // stroke, fill은 lineTo 아래에 있어야합니다. (투명으로 그려진 선에 색을 넣어주는 방식입니다.)
// ~#1.4

// ctx.fillRect(170, 200 - 10, 15, 100);
// ctx.fillRect(310, 200 - 10, 15, 100);
// ctx.fillRect(220, 200 - 10, 60, 200);
// ctx.stroke();

// ctx.arc(250, 100, 50, 0, 2 * Math.PI); // arc는 원을 그리는 도구로써, (X, Y, 반지름, 시작 각, 끝 각)이 입력됩니다. 원을 그릴때는, 시작 각을 0으로 두고 끝 각을 상수 * Math.PI로 구성하면 됩니다.
// ctx.fill();

// ctx.beginPath(); // 특정 그림에 색을 입히고자 한다면, beginPath를 이용하여 해당 그림을 독립적으로 만들어줘야합니다.
// ctx.fillStyle = "white"; // fillStyle은 그림의 색을 지정할 수 있습니다.
// ctx.arc(230, 90, 8, Math.PI, 2 * Math.PI);
// ctx.arc(270, 90, 8, Math.PI, 2 * Math.PI);
// ctx.fill();
// ~#1.5

// ctx.lineWidth = 2; // 그릴 선의 두께를 정했습니다.

// // 클릭시 캔버스에서 선이 그려지는 시작점이 달라지게 하기 위해 좌표값이 담긴 배열을 만들었습니다.
// const posX = ["0", "800", "400"];
// const posY = ["0", "800", "400"];
// let ranposX = posX[Math.floor(Math.random() * posX.length)]; // ranpos 함수는 pos 함수의 값을 무작위로 선택합니다.
// let ranposY = posY[Math.floor(Math.random() * posY.length)]; // ranpos 함수는 onClick 함수가 실행됐을때 값이 변해야 하기 때문에 let으로 선언했습니다.

// console.log(ranposX, ranposY);

// // 선을 그릴때 색을 입히기 위해 다양한 색이 담긴 배열을 만들었습니다.
// const colors = [
//   "#ff3838",
//   "#ffb8b8",
//   "#c56cf0",
//   "#ff9f1a",
//   "#fff200",
//   "#32ff7e",
//   "#7efff5",
// ];

// function onMouseMove(event) {
//   // onMouseMove 함수는 addEventListener로 감지한 마우스 움직임 이벤트의 좌표값을 입력받아 선을 그립니다.
//   ctx.beginPath(); // strokeStyle이 변화될때 그려진 모든 선의 색상이 변경되는 것을 막기위해 선이 그려질때마다 beginPath를 입력합니다.
//   ctx.moveTo(ranposX, ranposY); //onMouseMove 함수가 첫 실행 될때, 선을 출력하기 위해 moveTo로 ctx의 초기 위치를 정했습니다.
//   const color = colors[Math.floor(Math.random() * colors.length)]; // color 함수는 colors 배열에서 값을 무작위로 선택합니다.
//   ctx.strokeStyle = color; // color 함수의 값을 stroke의 색으로 지정합니다.
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke();
// }

// function onClick() {
//   // onClick 함수는 클릭 이벤트를 감지하여 선의 시작점을 바꿉니다.
//   ranposX = posX[Math.floor(Math.random() * posX.length)];
//   ranposY = posY[Math.floor(Math.random() * posY.length)];
// }

// canvas.addEventListener("mousemove", onMouseMove); // addEventLinstener로 캔버스 내에서 마우스의 클릭을 감지합니다.
// canvas.addEventListener("click", onClick);
// ~#2.0

const lineWidth = document.getElementById("line-width"); // html에서 line=width이라 id가 붙은 input 태그를 lineWidth 상수에 귀속했습니다.
ctx.lineWidth = lineWidth.value; // 불러온 lineWidth 값을 ctx의 lineWidth 값에 대입합니다.

const modeBtn = document.getElementById("mode-btn"); // 상태 변경 버튼을 지정했습니다.
const clearBtn = document.getElementById("clear"); // 캔버스 초기화 버튼 지졍했습니다.
const eraseBtn = document.getElementById("erase"); // 지우기 버튼을 지정했습니다.
const color = document.getElementById("color"); // html에서 "color" id 가 붙은 항목을 color 상수에 지정했습니다.
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
); // html에서 color-option이 붙은 항목을 불러와, 배열로 전환했습니다.

let isFilling = false; // 현재 그리기 상태를 확인하기 위한 변수입니다.
let isPainting = false; // 사용자가 그림을 그리는지 확인하기 위한 변수입니다.

function onMouseMove(event) {
  // 마우스가 움직일때 isPainting 변수의 값에 따라 그림을 그리거나, 브러쉬의 위치만 이동시킵니다.
  if (isPainting) {
    // if 문에 boolean 값이 들어가는 경우, 그 값이 참일때 if 문이 실행되고 아닐 경우 실행되지 않습니다.
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return; // 그림을 그린 후 return을 입력하여 onMouseMove 함수를 종료시킵니다.
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function onMouseDown(event) {
  // 사용자가 마우스를 누르고 있을때, isPainting 변수를 참으로 변경합니다.
  isPainting = true;
}

function onMouseUp(event) {
  // 사용자가 마우스를 누르다가 땠을때, isPainting 변수를 거짓으로 변경합니다.
  isPainting = false;
}

function onLineWidthChange(event) {
  // 작동시 beginPath를 이행하고 ctx의 lineWidth를 변화시킵니다.
  ctx.beginPath(); // beginPath를 이행하지 않는 경우, lineWidth가 변할때 미리 그려졌던 선의 두께도 같이 변하게 됩니다.
  ctx.lineWidth = event.target.value; // event.target은 이벤트가 발생된 목표입니다.
}

function onColorChange(event) {
  // 색상 변화에 대응하는 함수입니다.
  ctx.beginPath(); // 미리 그려진 캔버스의 선의 색상이 변하지 않게 합니다.
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
  // 미리 제시된 컬러 팔레트를 클릭할 시 대응하는 합수입니다.
  const colorValue = event.target.dataset.color; // 반복 사용되는 텍스트가 있어 상수로 지정했습니다.
  ctx.beginPath(); // 미리 그려진 캔버스의 선의 색상이 변하지 않도록 합니다.
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue; // html 인풋의 컬러 인디케이터를 사용자가 클릭한 색에 맞춰 변화시킵니다.
}

function onModeClick() {
  // 그리기 상태를 변경하는 버튼을 눌렀을때 작동하는 함수입니다.
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Draw";
  } else {
    isFilling = true;
    modeBtn.innerText = "Fill";
  }
}

function onCanvasClick() {
  // Fill 상태에서 캔버스를 클릭할때 작동하는 함수입니다.
  if (isFilling) {
    ctx.fillRect(0, 0, 800, 800);
  }
}

function onClearClick() {
  // 캔버스 초기화 버튼을 누를때 적동하는 함수입니다.
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 800, 800);
}

function onEraseClick() {
  // 지우기 버튼을 클릭했을때 작동하는 함수입니다.
  ctx.beginPath();
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Draw";
}

canvas.addEventListener("mousemove", onMouseMove); // 마우스의 움직임을 감지하고, onMouseMove 함수를 작동합니다.
canvas.addEventListener("mousedown", onMouseDown); // 마우스 버튼의 눌림을 감지하고, onMouseDown 함수를 작동합니다. (mousedown은 클릭과는 다르며, 버튼을 누르고 있는 상태입니다.)
canvas.addEventListener("mouseup", onMouseUp); // 마우스의 버튼이 눌리지 않는 것을, onMouseMove 함수를 작동합니다.
canvas.addEventListener("mouseleave", onMouseUp); // 마우스가 캔버스에서 떠난 것을 감지하고, onMouseMove 함수를 작동합니다. (마우스를 누르고 있는 상태에서 캔버스를 떠났을때, 다시 캔버스르 돌아오면 클릭하지 않아도 그림이 그려지는 버그를 방지합니다.)
lineWidth.addEventListener("change", onLineWidthChange); // html 태그의 값이 변할때, onLineWidthChange 함수를 작동합니다.
color.addEventListener("change", onColorChange); // html 인풋의 색상 값 변화를 감지하고 onColorChange 함수를 작동합니다.

colorOptions.forEach((color) => color.addEventListener("click", onColorClick)); // html 요소 모두에 이벤트리스너를 추가하고, onColorClick 함수를 작동합니다.
modeBtn.addEventListener("click", onModeClick); // 그리기 상태 변경 버튼을 누를때 작동됩니다.
canvas.addEventListener("click", onCanvasClick); // 그리기 상태가 '채우기'일때 캔버스를 클릭하면 작동합니다.
clearBtn.addEventListener("click", onClearClick); // 캔버스 초기화를 눌렀을때 onClearClick 함수를 실행합니다.
eraseBtn.addEventListener("click", onEraseClick); // 지우기 버튼을 눌렀을때 onEraseClick 함수를 실행합니다.
