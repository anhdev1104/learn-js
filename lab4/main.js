class Student {
    constructor(id, firstName, lastName, class_id, email, phone, dob) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.class_id = class_id;
        this.email = email;
        this.phone = phone;
        this.dob = dob;
    }
    //Phương thức cho phép lấy tên đầy đủ. (họ trước tên sau)
    getFullName() {
        return this.lastName + ' ' + this.firstName;
    }
    // phương thức tính tuổi dựa trên ngày sinh được cung cấp.
    getAgeInYears() {
        const today = new Date(); //tạo Date() để lưu thời gian hiện tại.
        const birthDate = new Date(this.dob); //tạo Date() mới truyền input dob của user để lưu ngày tháng năm sinh của HS
        let age = today.getFullYear() - birthDate.getFullYear(); //ta lấy năm của ngày hiện tại trừ cho năm sinh để ra số tuổi hiện tại.
        return age; //trả về số tuổi được tính.
    }

    // Phương thức tính số ngày từ ngày sinh đến ngày hiện tại.
    getAgeInDays() {
        const today = new Date(); //tạo Date() để lưu thời hiện tại.
        const birthDate = new Date(this.dob); //tạo Date() mới truyền input dob của user để lưu ngày tháng năm sinh của HS
        const timeDiff = today.getTime() - birthDate.getTime(); //tính sự chênh lệch giữa giờ của ngày hiện tại và giờ của ngày sinh
        const daysDiff = timeDiff / (24 * 60 * 60 * 1000); //Chia timeDiff cho số milisecond trong một ngày để tính số ngày cách nhau của today & birthDate 
        return Math.floor(daysDiff); //hàm Math.floor() sử dụng để làm tròn dưới và trả về giá trị của biến daysDiff
    }
}

// Khởi tạo đối tượng và truyền tham số cần thiết vào constructor
let freshMan = new Student(
    'PD08263',
    'Hoàng Anh',
    'Bùi',
    'WE18305',
    'anhpd08263@fpt.edu.vn',
    '0395787557',
    '2004-01-01'
);

console.log(freshMan);
console.log('FullName: ' + freshMan.getFullName());
console.log('Age: ' + freshMan.getAgeInYears());
console.log('Age in Days: ' + freshMan.getAgeInDays());

// tạo danh sách gồm 5 sinh viên
var listStudents = [
    new Student(
        '1',
        'Hoàng Anh',
        'Bùi',
        'WE18305',
        'anhpd08263@fpt.edu.vn',
        '0395787557',
        '2004-01-01'
    ),
    new Student(
        '2',
        'Ngọc Huy',
        'Huỳnh Nguyễn',
        'WE18305',
        'huyngu@fpt.edu.vn',
        '0367957857',
        '1995-07-26'
    ),
    new Student(
        '3',
        'Huy Hoàn',
        'Nguyễn Đức',
        'WE18305',
        'hoan123@fpt.edu.vn',
        '036777957',
        '2000-09-14'
    ),
    new Student(
        '4',
        'Văn Đạt',
        'Đoàn',
        'WE18305',
        'dat09@fpt.edu.vn',
        '0397967847',
        '1990-11-18'
    ),
    new Student(
        '5',
        'Thanh Hà',
        'Nguyễn',
        'WE18305',
        'hanguyen@fpt.edu.vn',
        '0367957857',
        '2001-02-06'
    ),
];
// Sắp xếp danh sách sinh viên theo thứ tự tuổi tăng dần
listStudents.sort((a, b) => {
    const now = new Date();
    const aDob = new Date(a.dob);
    const bDob = new Date(b.dob);
    const aDiffTime = Math.abs(now - aDob);
    const bDiffTime = Math.abs(now - bDob);
    return aDiffTime - bDiffTime;
  }); //phương thức sort() để sắp xếp danh sách, hàm này lấy giá trị dob của lớp Student là đối tượng Date, sẽ trả về một số âm nếu a < b, ngược lại trả về dương nếu a > b. trả về 0 nếu bằng nhau.
// tức là nếu nhỏ hơn sẽ đứng trước và sắp xếp theo thứ tự
console.log('Danh sách sinh viên theo thứ tự số tuổi từ thấp đến cao:');
console.table(listStudents.sort());  //hàm table() này giúp tạo bạn trông đẹp mắt hơn, bật và kéo rộng cửa sổ console để xem hết chi tiết.
//lúc đầu chạy chương trình hay gặp lỗi không hiện table, hãy reload lại trang giúp mình nhé.
console.log(`Kích thước màn hình là ${window.innerWidth} x ${window.innerHeight} pixel.`); 
//window.innerWidth trả về chiều rộng của khu vực nội dung của cửa sổ trình duyệt.
//window.innerHeight trả về chiều cao của khu vực nội dung của cửa sổ trình duyệt.
//hãy thay đổi kích cửa sổ console và reload lại trang để xem sự khác nhau của kích thước màn hình. 
