
let roomDimensions = {
    width: 800,
    length: 100,

    getArea: function (width, length){
        return this.width * this.length;
    }
}

let boundGetArea = roomDimensions.getArea.bind(roomDimensions);

console.log(boundGetArea());
