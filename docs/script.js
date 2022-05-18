function getRandomInt(max, random) {
    return Math.floor(random.quick() * max);
}

function randomIntFromInterval(min, max, random) { // min and max included
    return Math.floor(random.quick() * (max - min + 1) + min)
}


function drawSquareTriangle(ctx, x, y, size, color) {
    size = Number(size);
    console.log(`triangle (${x} ${y}) (${x + size} ${y}) (${x} ${y + size})`);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + size, y);
    ctx.lineTo(x, y + size);
    //ctx.lineTo(x, y);
    ctx.closePath();
    console.log(`color: ${color}`);
    if (color === 4294967040) {
        ctx.fillStyle = "#" + color.toString(16);
        ctx.fill();
        return 0;
    }
    ctx.fillStyle = "#" + (color + 2236962).toString(16);
    ctx.fill();
}

function drawAmorphCircle(ctx, x, y, size, color) {
    size = Number(size);
    ctx.beginPath();
    ctx.fillStyle = color

    FirstDivider = 8
    SecondDivider = 2

    ctx.arc(x + size / 2, y + size / 2, size / 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.arc(x + size / 2 + size / FirstDivider, y + size / 2 + size / FirstDivider, size / SecondDivider, 0, 2 * Math.PI);
    ctx.fill();
    ctx.arc(x + size / 2 + size / FirstDivider, y + size / 2 - size / FirstDivider, size / SecondDivider, 0, 2 * Math.PI);
    ctx.fill();
    ctx.arc(x + size / 2 - size / FirstDivider, y + size / 2 - size / FirstDivider, size / SecondDivider, 0, 2 * Math.PI);
    ctx.fill();
    ctx.arc(x + size / 2 - size / FirstDivider, y + size / 2 + size / FirstDivider, size / SecondDivider, 0, 2 * Math.PI);
    ctx.fill();



}
function drawCircle(ctx, x, y, size, color) {
    size = Number(size);
    ctx.beginPath();
    ctx.fillStyle = color

    FirstDivider = 8
    SecondDivider = 2

    ctx.arc(x + size / 2, y + size / 2, size / 2, 0, 2 * Math.PI);
    ctx.fill();
}

function drawAvatar(seed, pixelsize, pixelcountx, pixelcounty) {
    myrng = new Math.seedrandom(seed);
    let canvassizex = pixelsize * pixelcountx;
    let canvassizey = pixelsize * pixelcounty;

    let randomColor = Math.floor(randomIntFromInterval(10066329, 16777215, myrng)).toString(16);

    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext('2d');
    canvas.width = canvassizex;
    canvas.height = canvassizey;

    for (let f = 0; f < pixelcounty; f++) {
        for (let i = 0; i < pixelcountx / 2 + 1; i++) {
            ctx.fillStyle = '#ffffff00';
            if (getRandomInt(2, myrng) === 1) {
                ctx.fillStyle = '#' + randomColor;
            }
            ctx.fillRect(i * pixelsize - pixelsize, f * pixelsize, pixelsize, pixelsize);
            ctx.fillRect(canvassizex - i * pixelsize, f * pixelsize, pixelsize, pixelsize);
        }
    }
}

function drawCircleAvatar(seed, pixelsize, pixelcountx, pixelcounty) {
    myrng = new Math.seedrandom(seed);
    let canvassizex = pixelsize * pixelcountx;
    let canvassizey = pixelsize * pixelcounty;

    let randomColor = Math.floor(randomIntFromInterval(10066329, 16777215, myrng)).toString(16);

    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext('2d');
    canvas.width = canvassizex;
    canvas.height = canvassizey;

    for (let f = 0; f < pixelcounty; f++) {
        for (let i = 0; i < pixelcountx / 2 + 1; i++) {
            ctx.fillStyle = '#ffffff00';
            if (getRandomInt(2, myrng) === 1) {
                ctx.fillStyle = '#' + randomColor;
            }
            drawCircle(ctx, i * pixelsize - pixelsize, f * pixelsize, pixelsize, ctx.fillStyle);
            drawCircle(ctx, canvassizex - i * pixelsize, f * pixelsize, pixelsize, ctx.fillStyle);
        }
    }
}

function drawAmorphAvatar(seed, pixelsize, pixelcountx, pixelcounty) {
    myrng = new Math.seedrandom(seed);
    let canvassizex = pixelsize * pixelcountx;
    let canvassizey = pixelsize * pixelcounty;

    let randomColor = Math.floor(randomIntFromInterval(10066329, 16777215, myrng)).toString(16);

    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext('2d');
    canvas.width = canvassizex;
    canvas.height = canvassizey;

    for (let f = 0; f < pixelcounty; f++) {
        for (let i = 0; i < pixelcountx / 2 + 1; i++) {
            ctx.fillStyle = '#ffffff00';
            if (getRandomInt(2, myrng) === 1) {
                ctx.fillStyle = '#' + randomColor;
            }
            drawAmorphCircle(ctx, i * pixelsize - pixelsize, f * pixelsize, pixelsize*1.2, ctx.fillStyle);
            drawAmorphCircle(ctx, canvassizex - i * pixelsize, f * pixelsize, pixelsize*1.2, ctx.fillStyle);

        }
    }
}

function drawTriAvatar(seed, pixelsize, pixelcountx, pixelcounty) {
    myrng = new Math.seedrandom(seed);
    let canvassizex = pixelsize * pixelcountx;
    let canvassizey = pixelsize * pixelcounty;

    let PreRandomColor = Math.floor(randomIntFromInterval(10066329, 16777215, myrng))
    let randomColor = PreRandomColor.toString(16);
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext('2d');
    canvas.width = canvassizex;
    canvas.height = canvassizey;

    for (let f = 0; f < pixelcounty; f++) {
        for (let i = 1; i < pixelcountx / 2 + 1; i++) {
            ctx.fillStyle = '#ffffff00';
            let Col = 4294967040;

            if (getRandomInt(2, myrng) === 1) {
                ctx.fillStyle = '#' + randomColor;
                Col = PreRandomColor;
            }

            //console.log(pixelsize)
            ctx.fillRect(i * pixelsize - pixelsize, f * pixelsize, pixelsize, pixelsize);
            ctx.fillRect(canvassizex - i * pixelsize, f * pixelsize, pixelsize, pixelsize);
            drawSquareTriangle(ctx, i * pixelsize - pixelsize, f * pixelsize, pixelsize, Col);
            drawSquareTriangle(ctx, canvassizex - i * pixelsize, f * pixelsize, pixelsize, Col);
            //console.log(pixelsize)
            //drawSquareTriangle(ctx, 1, 1, pixelsize, myrng);
        }
    }
}

function onButtonClick() {
    let seed = document.getElementById("input").value;
    let pxsize = document.getElementById("pixelsize").value;
    let pxcounty = document.getElementById("pixelsy").value;
    let pxcountx = document.getElementById("pixelsx").value;
    let drawStyle = document.getElementById("drawstyle").value;

    if (drawStyle === "t") {
        drawTriAvatar(seed, pxsize, pxcountx, pxcounty);
    } else if (drawStyle === "c") {
        drawCircleAvatar(seed, pxsize, pxcountx, pxcounty);
    } else if (drawStyle === "a") {
        drawAmorphAvatar(seed, pxsize, pxcountx, pxcounty);
    } else {
        drawAvatar(seed, pxsize, pxcountx, pxcounty);
    }

}