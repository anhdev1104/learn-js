// lấy ra element có class là my-video gán cho biến vid 
var vid = document.querySelector('.my-video'); 

// Play / Pause video
var btnPlay = document.querySelector('.btn-pause'); 
//lấy ra element có class là btn-pause gán cho biến btnPlay.
//lắng nghe sự kiện click lên btnPlay tức là button có class là btn-pause và thực hiện function.
btnPlay.addEventListener('click', () => { 
    //thuộc tính "paused" chính là thuộc tính mặc định của đối tượng video, đc lưu trữ trong biến vid.
    if (vid.paused) { //nếu video đang tạm dừng, tức là nó trả về true.
        vid.play(); //thì sẽ gọi tới hàm play() để bắt đầu video.
    } else { //ngược lại nếu nó trả về false, tức là video đang phát.
        vid.pause(); // thì sẽ gọi hàm pause() để tạm dừng.
    }
});

// Stop video
var btnStop = document.querySelector('.btn-stop');
btnStop.addEventListener('click', () => { //lắng nghe sự kiện click và thực hiện function.
    vid.pause(); //đầu tiên cho thực hiện hàm pause để tạm dừng, sau đó kiểm tra điều kiện.
    //trỏ đến thuộc tính currentTime là thuộc tính mặc định của video.
    //kiểm tra nếu giá trị của thuộc tính này khác 0, tức là video đã được phát 1 thời gian nào đó.
    if (vid.currentTime) { //trả về true.
        vid.currentTime = 0; //thì ta sẽ thiết lập lại giá trị của thuộc tính về 0.
    }
});

//Volume (-)
var btnReduce = document.querySelector('.btn-reduce');
btnReduce.addEventListener('click', () => {
//trỏ đến thuộc tính volume của vid, giá trị mặc định của thuộc tính = 1, giá trị âm thanh từ 0 --> 1 là tối đa giá trị âm lượng
    if (vid.volume >= 1) { // tức là ban đầu âm thanh bằng 1 vì thế xét đk nhỏ hơn hoặc bằng thì thực thi đk
        vid.volume = 0.2; // xét giảm giá trị volume thành 0.2 âm lượng
    }
});

//Volume (+)
var btnIncrease = document.querySelector('.btn-increase');
btnIncrease.addEventListener('click', () => {
    if (vid.volume < 1) { // nếu giá trị volume nhỏ hơn 1 sẽ thực thi câu lệnh bên trong
        vid.volume = 1.0; // xét tăng giá trị volume thành 1.0 âm lượng
    }
});

//enable loop
var btnLoop = document.querySelector('.btn-enable-loop');
btnLoop.addEventListener('click', () => {
    //trỏ đến thuộc tính loop của vid, khi nhận sự kiện click thì gán giá trị true, tức là vid lúc này đã cho phép lặp
    vid.loop = true; 
    vid.load(); //gọi lại hàm load chỉ để load lại vid giúp user dễ nhận biết đã bật loop
});

//disable loop
var btnLoop = document.querySelector('.btn-disable-loop');
btnLoop.addEventListener('click', () => {
    // khi nhận sự kiện click thì gán về giá trị false, tức là vid đã nhận giá trị sai của loop nên k được phép lặp
    vid.loop = false; 
    vid.load(); //gọi lại hàm load chỉ để load lại vid giúp user dễ nhận biết đã tắt loop
});