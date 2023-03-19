// Lấy thông tin người dùng
const hoTen = prompt('Nhập họ và tên của bạn: ');
const gioiTinh = prompt('Nhập giới tính của bạn (Nam hoặc Nữ): ');

// Tách họ, tên đệm và tên riêng biệt
const hoTenArr = hoTen.split(' ');
const ho = hoTenArr[0];
const tenDem = hoTenArr.slice(1, -1).join(' ');
const ten = hoTenArr[hoTenArr.length - 1];

// Thay đổi tên đệm dựa trên giới tính
let tenDemMoi;
if (gioiTinh === 'Nam') {
  tenDemMoi = ' Văn ';
} else if (gioiTinh === 'Nữ') {
  tenDemMoi = ' Thị ';
} else {
  tenDemMoi = tenDem;
}

// In ra kết quả họ, tên đệm và tên
document.write('Họ: ' + ho);
document.write('. Tên đệm: ' + tenDem);
document.write('. Tên: ' + ten);

// In ra kết quả tên mới
const tenMoi = ho + tenDemMoi + ten ;
document.write('. Tên mới: ' + tenMoi);
