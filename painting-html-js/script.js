window.addEventListener("load", () => {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    window.addEventListener("resize", () => {

        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

    });

    // ctx.strokeStyle = 'red';
    // ctx.lineWidth = '5';
    // ctx.strokeRect(100,100,200,500);


    // ctx.beginPath();
    // ctx.moveTo(100,100);
    // ctx.lineTo(200,100);
    // ctx.lineTo(200,150);
    // ctx.closePath();
    // ctx.stroke();


    let painting = false;

    function start(e) {
        painting = true;
        draw(e)
    }

    function finish() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if(!painting) return
        ctx.lineWidth = '10'
        ctx.lineCap = 'round';

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);

    }

    canvas.addEventListener("mousedown",start);
    canvas.addEventListener("mouseup",finish);
    canvas.addEventListener("mousemove",draw);

})