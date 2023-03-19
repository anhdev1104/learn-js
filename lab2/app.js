// danh sách mảng ban đầu
let arr = ["Tue", "Thu", "Sat", "Nine"];
console.log("Mảng ban đầu: " + arr);

arr.pop(); // xoá phần tử cuối mảng
console.log("Mảng sau khi xoá phần tử cuối: " + arr);

// thêm các phần tử vào mảng và sắp xếp theo các ngày trong tuần
arr.splice(0, 0, "Mon"); //thêm 'Mon' vào đầu mảng
arr.splice(2, 0, "Wed"); // thêm 'Wed' vào phần tử thứ 2 của mảng
arr.splice(4, 0, "Fri"); // thêm 'Fri' vào phần tử thứ 4 của mảng
arr.push("Sun"); // thêm phần tử vào cuối mảng
console.log("Mảng sau khi đã được thêm và sắp xếp: " + arr);
