let images = {};
let context2d = null;

let makeSnapshot = (id, x, y, width, height) => {
    let desiredWidth = width;
    let desiredHeight = height;
    let config = {
        callback: (img) => {
            document.getElementById("images").appendChild(img);
        },		
        x:x,
        y:y,
        width:desiredWidth,
        height:desiredHeight
    }
    context2d.toImage(config);
}

let SnapshotManager = {
    init : (obj) => {
        context2d = obj;
        console.log(context2d);
    },
    schedule: (id, x, y, width, height)=> {
        setTimeout(() => {
            makeSnapshot(id, x, y, width, height);
        }, 100);
    }
}

export {
    SnapshotManager
}