let canvas = document.createElement("canvas");
document.body.appendChild(canvas);
let ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;
let mouseX, mouseY;
window.onload = function () {
    init();
    requestAnimationFrame(requestFrame);
};
function requestFrame() {
    draw();
    requestAnimationFrame(requestFrame);
}
canvas.addEventListener("mousemove", function (evt) {
    let mousePos = getMousePos(canvas, evt);
    mouseX = mousePos.x;
    mouseY = mousePos.y;
    mouseMove();
});
canvas.addEventListener('click', mousePress, false);
canvas.addEventListener("mousedown", mouseDown, false);
canvas.addEventListener('mouseup', mouseUp, false);
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function isInside(rect) {
    let pos = { x: mouseX, y: mouseY };
    return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y;
}
function getMousePos(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}
//# sourceMappingURL=main.js.map