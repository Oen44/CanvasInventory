class Slot {
    id: number;
    x: number;
    y: number;
    width: number = 42;
    height: number = 42;
    item: Item;
    image: HTMLImageElement;

    constructor(_x: number, _y: number) {
        this.x = _x;
        this.y = _y;
        this.image = new Image();
    }

    draw() {
        ctx.save();

        ctx.drawImage(this.image, this.x, this.y, 42, 42);

        ctx.restore();
    }

    addItem(_item: Item) {
        this.item = _item;
    }

    removeItem() {
        this.item = null;
    }

}