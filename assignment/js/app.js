// auto slideShow background-images 
var images = ['./img/banner.png', './img/banner2.jpg', './img/banner3.webp'];
var currentIndex = 0; // Chỉ số hiện tại của hình ảnh

function changeBackground() {
    document.getElementById('background').style.backgroundImage = 'url(' + images[currentIndex] + ')';
    currentIndex = (currentIndex + 1) % images.length; // Tăng chỉ số hiện tại lên 1, nếu đã đạt đến cuối danh sách thì quay lại đầu danh sách
}
setInterval(changeBackground, 5000); // Gọi hàm changeBackground mỗi 5 giây để thay đổi background


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


// contact form

// Đối tượng `Validator`
function Validator(options) {
    var formElement = document.querySelector(options.form);

    if (formElement) {
        
    }
}


// định nghĩa các rules
Validator.isRequired = function (selector) {
    return {
        selector: selector, 
        test: function () {

        }
    };
}


Validator.isEmail = function (selector) {
    return {
        selector: selector, 
        test: function () {

        }
    };
}