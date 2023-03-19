//lấy ra các phần tử HTML được gắn thẻ "results" và "element" thông qua phương thức querySelector() và querySelectorAll().
var results = document.querySelector(".results");
var elements = Array.from(document.querySelectorAll(".element")); //phương thức Array.from() để chuyển đổi các phần tử được tìm thấy thành một mảng.
//hàm forEach sẽ chạy khi nhận sự kiện click người dùng
elements.forEach(function (btn) {
    //thêm sự kiện "click" cho mỗi nút bằng cách sử dụng phương thức addEventListener().
    btn.addEventListener("click", function () {
        // đk để ko bị trường hợp 0123 mà chỉ hiển thị 123
        if (results.innerHTML == "0") results.innerHTML = "";
        if (btn.innerHTML == "AC") results.innerHTML = "0";
        //nếu click trúng AC màn hình sẽ hiển thị số 0
        else if (btn.innerHTML == "Del") {
            //nếu đó là Del sẽ xoá đi kí tự cuối cùng của biểu thức trên màn hình
            var arrtext = Array.from(results.innerHTML);
            arrtext.splice(arrtext.length - 1, 1);
            if (arrtext.length != 0) results.innerHTML = arrtext.join("");
            else results.innerHTML = "0";
        } else if (btn.innerHTML == "=") {
            // nếu click nút = sẽ tính toán biểu thức trên màn hình và hiển thị kết quả.
            results.innerHTML = eval(results.innerHTML); //eval giúp tính toán 1 string có số và các phép toán
        } else results.innerHTML += btn.innerHTML;
        // Khi tiếp tục nhấn các nút khác, các kí tự tương ứng sẽ được thêm vào và hiển thị trên màn hình.
    });
});
