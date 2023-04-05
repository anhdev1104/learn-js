// The onmouseover Event
    document.getElementById('benefit-img-car').addEventListener('mouseover', mouseOver);
    document.getElementById('benefit-img-car').addEventListener('mouseout', mouseOut);

function mouseOver() {
    document.getElementById('benefit-img-car').style.transform = 'scale(1.3)';
    document.getElementById('benefit-img-car').style.transition = 'linear .25s';
}

function mouseOut() {
    document.getElementById('benefit-img-car').style.transform = 'scale(1)';
}