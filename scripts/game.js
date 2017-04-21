let slots = [];
let itemImages = [
    "W_Sword001", "E_Wood02", "A_Armour02", "Ac_Ring05",
    "P_Red02", "A_Armor05", "C_Elm03", "A_Shoes03"
];
let itemNames = [
    "Iron Sword", "Wooden Shield", "Plate Armor", "Steel Ring",
    "Health Potion", "Demonic Armor", "Steel Helmet", "Shoes"
];
let itemDamage = [
    "Damage: 2 - 4", "Defense: 2", "Defense: 5", "Damage: 1-2",
    "+50 Health Points", "Defense: 12", "Defense: 4", "Defense: 1"
];
let itemValue = [
    10, 15, 25, 12, 5, 200, 20, 8
];
function init() {
    for (let i = 0; i < 4; i++) {
        slots[i] = new Slot(50 + (50 * i), 50);
        slots[i + 4] = new Slot(50 + (50 * i), 100);
        slots[i + 8] = new Slot(50 + (50 * i), 150);
        slots[i + 12] = new Slot(50 + (50 * i), 200);
    }
    for (let i = 0; i < 8; i++) {
        slots[i].item = new Item(itemNames[i], itemDamage[i], itemValue[i], slots[i].x, slots[i].y, slots[i], itemImages[i]);
    }
    for (let s in slots) {
        slots[s].image.src = 'images/skil.png';
    }
}
function draw() {
    clearCanvas();
    for (let i in slots) {
        slots[i].draw();
    }
    for (let i in itemList) {
        itemList[i].draw();
    }
    for (let i in itemList) {
        if (itemList[i].hover)
            itemList[i].drawTooltip();
    }
}
function mousePress() {
}
function mouseDown() {
    for (let i in itemList) {
        if (isInside(itemList[i])) {
            itemList[i].pickup();
        }
    }
}
function mouseUp() {
    for (let i in itemList) {
        if (itemList[i].picked) {
            for (let s in slots) {
                if (isInside(slots[s])) {
                    let x = slots[s].x;
                    let y = slots[s].y;
                    if (slots[s].item) {
                        let item = slots[s].item;
                        let newSlot = item.slot;
                        let oldSlot = itemList[i].slot;
                        newSlot.addItem(itemList[i]);
                        oldSlot.addItem(item);
                        item.dropOnSlot(oldSlot.x, oldSlot.y, oldSlot);
                        itemList[i].dropOnSlot(newSlot.x, newSlot.y, newSlot);
                    }
                    else {
                        itemList[i].slot.removeItem();
                        slots[s].addItem(itemList[i]);
                        itemList[i].dropOnSlot(x, y, slots[s]);
                    }
                }
                else {
                    itemList[i].drop();
                }
            }
        }
    }
}
function mouseMove() {
    for (let i in itemList) {
        let item = itemList[i];
        if (isInside(item)) {
            item.hover = true;
        }
        else if (item.hover)
            item.hover = false;
    }
}
//# sourceMappingURL=game.js.map