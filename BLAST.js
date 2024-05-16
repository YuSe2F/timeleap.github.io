let p1=document.getElementById('P1');
    let p2=document.getElementById('P2');
    let p3=document.getElementById('P3');
    let p4=document.getElementById('P4');
    let p5=document.getElementById('P5');
    let p6=document.getElementById('P6');

    window.addEventListener('scroll' , function(){
        let value=window.scrollY;

        p1.style.marginLeft = value * -2.5 + 'px';
        p2.style.marginRight = value * 1.5 + 'px';
        p3.style.marginTop = value * -2.5 + 'px';
        p4.style.marginBottom = value * 0.5 + 'px';
        p5.style.marginLeft = value * -2.5 + 'px';
        p6.style.marginRight = value * 2.5 + 'px';

    });