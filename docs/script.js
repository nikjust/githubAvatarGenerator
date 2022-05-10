function getRandomInt(max, random) {
    return Math.floor(random.quick() * max);
}

function randomIntFromInterval(min, max, random) { // min and max included
    return Math.floor(random.quick() * (max - min + 1) + min)
}

function drawAvatar(seed, pixelsize, pixelcountx, pixelcounty) {
    myrng = new Math.seedrandom(seed);
    let canvassizex = pixelsize*pixelcountx;
    let canvassizey = pixelsize*pixelcounty;


    let randomColor = Math.floor( randomIntFromInterval(10066329,16777215, myrng)).toString(16);
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext('2d');
    canvas.width = canvassizex;
    canvas.height = canvassizey;

    for (let f = 0; f < pixelcounty; f++) {
        for (let i = 0; i < pixelcountx/2+1; i++) {
            ctx.fillStyle = '#fff';
            if (getRandomInt(2, myrng) == 1) {
                ctx.fillStyle = '#' + randomColor;
            }
            ctx.fillRect(i * pixelsize - pixelsize, f*pixelsize, pixelsize, pixelsize);
            ctx.fillRect(canvassizex - i * pixelsize, f*pixelsize, pixelsize, pixelsize);
        }
    }
}

function onButtonClick() {
    let seed = document.getElementById("input").value;
    let pxsize = document.getElementById("pixelsize").value;
    let pxcounty = document.getElementById("pixelsy").value;
    let pxcountx = document.getElementById("pixelsx").value;
    drawAvatar(seed, pxsize, pxcountx, pxcounty);
}