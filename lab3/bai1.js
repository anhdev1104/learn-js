// menu chương trình
do {
    //tạo biến nhập dữ liệu người dùng chọn chức năng menu
    var select = parseInt(
        prompt(
            "Moi chon chuc nang: \n1. Tinh diem trung binh (switch case)\n2. Tinh diem trung binh (if else)\n0. Thoat"
        )
    );
    switch (select) {
        case 1:
            message();
            break;
        case 2:
            message2();
            break;
        case 0:
            break;
        default:
            console.log("Nhap sai chuc nang, nhap lai !");
            break;
    }
} while (select);

// hàm switch case
function message() {
    // input
    let Math = parseFloat(prompt("Nhap diem(kieu so thuc) mon toan: "));
    let Physics = parseFloat(prompt("Nhap diem(kieu so thuc) mon ly: "));
    let Chemistry = parseFloat(prompt("Nhap diem(kieu so thuc) mon hoa: "));
    let Biology = parseFloat(prompt("Nhap diem(kieu so thuc) mon sinh: "));

    // tạo biến tính trung bình cộng gán các giá trị input
    var average = (Math + Physics + Chemistry + Biology) / 4;

    switch (average) {
        case 10:
        case 9:
            console.log("Xep loai gioi !");
            break;
        case 8:
        case 7:
            console.log("Xep loai kha !");
            break;
        case 6:
        case 5:
            console.log("Xep loai trung binh !");
            break;
        default:
            console.log("Xep loai yeu !");
            break;
    }
}

// hàm if else
function message2() {
    // input
    let Math = parseFloat(prompt("Nhap diem(kieu so thuc) mon toan: "));
    let Physics = parseFloat(prompt("Nhap diem(kieu so thuc) mon ly: "));
    let Chemistry = parseFloat(prompt("Nhap diem(kieu so thuc) mon hoa: "));
    let Biology = parseFloat(prompt("Nhap diem(kieu so thuc) mon sinh: "));

    // tạo biến tính trung bình cộng gán các giá trị input
    var average = (Math + Physics + Chemistry + Biology) / 4;

    if (average >= 9) {
        console.log("Xep loai gioi !");
    } else if (average >= 7) {
        console.log("Xep loai kha !");
    } else if (average >= 5) {
        console.log("Xep loai trung binh !");
    } else {
        console.log("Xep loai yeu !");
    }
}
