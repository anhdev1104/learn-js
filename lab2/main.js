let a1 = prompt("Mời Nhập Số Nguyên a: ");
let b1 = prompt("Mời nhập Số Nguyên b: ");
let c1 = prompt("Mời Nhập Số nguyên c: ");

let a = parseInt(a1);
let b = parseInt(b1);
let c = parseInt(c1);

let delta = b * b - 4 * a * c;

if (delta < 0) {
  //trường hợp delta < 0
  document.write("Phương trình vô nghiệm");
}
//delta > or = 0
else if (delta == 0) {
  let x = -(b / (2 * a));
  document.write("Phương trình có nghiệm kép: " + x);
}
//delta > 0
else {
  let x1 = -(b - Math.sqrt(delta) / (2 * a));
  let x2 = -(b + Math.sqrt(delta) / (2 * a));
  document.write("Phương trình có 2 nghiệm phân biệt: " + x1 + x2);
}
