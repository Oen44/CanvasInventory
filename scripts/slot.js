class Slot {
    constructor(_x, _y) {
        this.width = 42;
        this.height = 42;
        this.x = _x;
        this.y = _y;
        this.image = new Image();
    }
    draw() {
        ctx.save();
        ctx.drawImage(this.image, this.x, this.y, 42, 42);
        ctx.restore();
    }
    addItem(_item) {
        this.item = _item;
    }
    removeItem() {
        this.item = null;
    }
}
//# sourceMappingURL=slot.js.map