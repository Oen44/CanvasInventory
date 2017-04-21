class Item {
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
    picked: boolean;
    hover: boolean;
    slot: Slot;
    image: HTMLImageElement;

    name: string;
    damage: string;
    value: number;

    constructor(_name: string, _damage: string, _value: number, _x: number, _y: number, _s: Slot, _src: string) {

        this.name = _name;
        this.damage = _damage;
        this.value = _value;

        this.x = _x + 4;
        this.y = _y + 4;
        this.width = 34;
        this.height = 34;
        this.slot = _s;
        this.image = new Image();
        this.image.src = "images/" + _src + ".png";
        this.id = itemList.length;

        itemList[itemList.length] = this;

        return this;
    }

    draw() {
        ctx.save();

        if (this.picked) {
            this.x = mouseX - this.width / 2;
            this.y = mouseY - this.height / 2;
        }

        ctx.drawImage(this.image, this.x, this.y, 34, 34);

        ctx.restore();
    }

    drawTooltip() {
        ctx.save();

        ctx.fillStyle = "#3366CC";
        ctx.fillRect(mouseX, mouseY, 200, 75);

        ctx.strokeStyle = "#3399FF";
        ctx.lineWidth = 5;
        ctx.strokeRect(mouseX, mouseY, 200, 75);

        ctx.fillStyle = "white";
        ctx.font = "14pt Ubuntu";
        ctx.textBaseline = "middle";
        ctx.fillText(this.name, mouseX + 100 - ctx.measureText(this.name).width / 2, mouseY + 15);

        
        ctx.font = "11pt Ubuntu";
        ctx.fillText(this.damage, mouseX + 100 - ctx.measureText(this.damage).width / 2, mouseY + 40);

        ctx.font = "8pt Ubuntu";
        ctx.textAlign = "right";
        ctx.fillText("Value: " + this.value + "g", mouseX + 190, mouseY + 65);

        ctx.restore();
    }

    pickup() {
        this.picked = true;
    }

    drop() {
        this.picked = false;
        this.x = this.slot.x + 4;
        this.y = this.slot.y + 4;
    }

    dropOnSlot(_x: number, _y: number, _slot: Slot) {
        this.picked = false;
        this.x = _x + 4;
        this.y = _y + 4;
        this.slot = _slot;
    }
}
let itemList: Item[] = [];