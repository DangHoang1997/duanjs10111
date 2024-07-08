// 1. tao danh sach diem tu data lay o layout
// document.querryselectorAll > innerText
// 2. tim phan tu co gia tri lon nhat



// var dsDiem = [];

// function timSVGioiNhat() {
//     var danhsachTD = document.querySelectorAll(".td-scores");
//     dsDiem = []; // Làm rỗng mảng trước khi điền dữ liệu mới

//     for (var index = 0; index < danhsachTD.length; index++) {
//         var phanTuHienTai = danhsachTD[index];
//         dsDiem.push(Number(phanTuHienTai.innerHTML)); // Chuyển đổi innerHTML thành số
//         console.log(phanTuHienTai.innerHTML);
//     }

//     var diemLonNhat = dsDiem[0];
//     for (var i = 1; i < dsDiem.length; i++) {
//         if (diemLonNhat < dsDiem[i]) {
//             diemLonNhat = dsDiem[i];
//         }
//     }
//     var tenSV = timTenSinhVienTheoDiem(diemLonNhat);
//     console.log(`ten sinh vien la ,${tenSV}`);

    
//     document.getElementById('svGioiNhat').innerHTML = `${diemLonNhat} , ${tenSV}`;
// }

// function timSVYeuNhat() {
//     var diemNhoNhat = dsDiem[0];
//     for (var i = 1; i < dsDiem.length; i++) {
//         if (diemNhoNhat > dsDiem[i]) {
//             diemNhoNhat = dsDiem[i];
//         }
//     }

//     var tenSV = timTenSinhVienTheoDiem(diemNhoNhat);
//     document.getElementById('svYeuNhat').innerHTML = `${diemNhoNhat},${tenSV}`;
// }

// timSVGioiNhat();
// timSVYeuNhat();



// // tao ham nhan vao 1 diem va tra ve ten sinh vien 
// function timTenSinhVienTheoDiem(diem){
//     // tu diem tim ra the tr chua diem do 
//     var viTri = dsDiem.indexOf(diem);
    
//     var dsTr = document.querySelectorAll("#tblBody tr");
//     var trTag = dsTr[viTri];
//     // tu the tr tim ra ds the td 
//     // lay ra cac the td nam trong trTag 
//     var dsTd = trTag.querySelectorAll("td");
//     console.log(dsTd[2].innerText);
//     return tenSV;
    
   
// }



// var dsDiem = [];

// function timSVGioiNhat() {
//     var danhsachTD = document.querySelectorAll(".td-scores");
//     dsDiem = []; // Làm rỗng mảng trước khi điền dữ liệu mới

//     for (var index = 0; index < danhsachTD.length; index++) {
//         var phanTuHienTai = danhsachTD[index];
//         dsDiem.push(Number(phanTuHienTai.innerHTML)); // Chuyển đổi innerHTML thành số
//     }

//     var diemLonNhat = Math.max(...dsDiem);
//     var tenSV = timTenSinhVienTheoDiem(diemLonNhat);
//     console.log(`Tên sinh viên là: ${tenSV}`);
//     document.getElementById('svGioiNhat').innerHTML = diemLonNhat;
// }

// function timSVYeuNhat() {
//     var diemNhoNhat = Math.min(...dsDiem);
//     console.log(diemNhoNhat);
//     document.getElementById('svYeuNhat').innerHTML = diemNhoNhat;
// }

// function timTenSinhVienTheoDiem(diem) {
//     var viTri = dsDiem.indexOf(diem);
//     var dsTr = document.querySelectorAll("#tblBody tr");
//     var trTag = dsTr[viTri];
//     var dsTd = trTag.querySelectorAll("td");
//     return dsTd[1].innerHTML; // Giả sử tên sinh viên ở cột thứ 2
// }

// timSVGioiNhat();
// timSVYeuNhat();





//...............

// var dsDiem = [];

// function timSVGioiNhat() {
//     var danhsachTD = document.querySelectorAll(".td-scores");
//     dsDiem = []; // Làm rỗng mảng trước khi điền dữ liệu mới

//     for (var index = 0; index < danhsachTD.length; index++) {
//         var phanTuHienTai = danhsachTD[index];
//         dsDiem.push(Number(phanTuHienTai.innerHTML)); // Chuyển đổi innerHTML thành số
//         console.log(phanTuHienTai.innerHTML);
//     }

//     var diemLonNhat = dsDiem[0];
//     for (var i = 1; i < dsDiem.length; i++) {
//         if (diemLonNhat < dsDiem[i]) {
//             diemLonNhat = dsDiem[i];
//         }
//     }
//     var tenSV = timTenSinhVienTheoDiem(diemLonNhat);
//     console.log(`Tên sinh viên giỏi nhất: ${tenSV}`);

//     document.getElementById('svGioiNhat').innerHTML = `${diemLonNhat} , ${tenSV}`;
// }

// function timSVYeuNhat() {
//     var diemNhoNhat = dsDiem[0];
//     for (var i = 1; i < dsDiem.length; i++) {
//         if (diemNhoNhat > dsDiem[i]) {
//             diemNhoNhat = dsDiem[i];
//         }
//     }

//     var tenSV = timTenSinhVienTheoDiem(diemNhoNhat);
//     console.log(`Tên sinh viên yếu nhất: ${tenSV}`);
//     document.getElementById('svYeuNhat').innerHTML = `${diemNhoNhat} , ${tenSV}`;
// }

// timSVGioiNhat();
// timSVYeuNhat();

// // Tạo hàm nhận vào 1 điểm và trả về tên sinh viên
// function timTenSinhVienTheoDiem(diem){
//     // Tìm vị trí của điểm trong mảng dsDiem
//     var viTri = dsDiem.indexOf(diem);
    
//     // Lấy tất cả các thẻ <tr> trong tbody
//     var dsTr = document.querySelectorAll("#tblBody tr");
//     var trTag = dsTr[viTri];
    
//     // Lấy các thẻ <td> trong trTag
//     var dsTd = trTag.querySelectorAll("td");
    
//     // Trả về tên sinh viên từ nội dung của thẻ <td> thứ 3 (giả sử thứ tự là từ 0)
//     var tenSV = dsTd[2].innerText;
//     console.log(tenSV);
//     return tenSV;
// }
// // đếm số sinh viên giỏi 

// function timSoSVGioiVaDanhSach(){
//     var soSinhVienGioi =0;
//     var dsSVLonHon5 ="";
//     for(var index = 0; index < dsDiem.length; index ++ ){
//         var phanTu = dsDiem[index];
//         if(phanTu >= 8){
//             soSinhVienGioi++
//             console.log(soSinhVienGioi);
//         }
//         // tìm số sinh viên có điểm lớn hơn 5 => lấy ra tên 
//         if(phanTu >=5){
//             var tenSV = timTenSinhVienTheoDiem(phanTu);
//             dsSVLonHon5 += "<p>${tenSV}</p>";
//         }

            

            
//         }

//     }
//     // hiển thị ra màn hình 
//     document.getElementById("soSVGioi").innerHTML = soSinhVienGioi;
//     document.getElementById("dsDiemHon5").innerHTML =dsSVLonHon5;


// timSoSVGioiVaDanhSach();













var dsDiem = [];

function timSVGioiNhat() {
    var danhsachTD = document.querySelectorAll(".td-scores");
    dsDiem = []; // Làm rỗng mảng trước khi điền dữ liệu mới

    for (var index = 0; index < danhsachTD.length; index++) {
        var phanTuHienTai = danhsachTD[index];
        dsDiem.push(Number(phanTuHienTai.innerHTML)); // Chuyển đổi innerHTML thành số
        console.log(phanTuHienTai.innerHTML);
    }

    var diemLonNhat = dsDiem[0];
    for (var i = 1; i < dsDiem.length; i++) {
        if (diemLonNhat < dsDiem[i]) {
            diemLonNhat = dsDiem[i];
        }
    }
    var tenSV = timTenSinhVienTheoDiem(diemLonNhat);
    console.log(`Tên sinh viên giỏi nhất: ${tenSV}`);

    document.getElementById('svGioiNhat').innerHTML = `${diemLonNhat} , ${tenSV}`;
}

function timSVYeuNhat() {
    var diemNhoNhat = dsDiem[0];
    for (var i = 1; i < dsDiem.length; i++) {
        if (diemNhoNhat > dsDiem[i]) {
            diemNhoNhat = dsDiem[i];
        }
    }

    var tenSV = timTenSinhVienTheoDiem(diemNhoNhat);
    console.log(`Tên sinh viên yếu nhất: ${tenSV}`);
    document.getElementById('svYeuNhat').innerHTML = `${diemNhoNhat} , ${tenSV}`;
}

function timSoSVGioiVaDanhSach(){
    var soSinhVienGioi = 0;
    var dsSVLonHon5 = "";
    for (var index = 0; index < dsDiem.length; index++) {
        var phanTu = dsDiem[index];
        if (phanTu >= 8) {
            soSinhVienGioi++;
            console.log(soSinhVienGioi);
        }
        // Tìm số sinh viên có điểm lớn hơn 5 => lấy ra tên
        if (phanTu >= 5) {
            var tenSV = timTenSinhVienTheoDiem(phanTu);
            dsSVLonHon5 += `<p>${tenSV}</p>`;
        }
    }
    // Hiển thị ra màn hình
    document.getElementById("soSVGioi").innerHTML = soSinhVienGioi;
    document.getElementById("dsDiemHon5").innerHTML = dsSVLonHon5;
}

timSVGioiNhat();
timSVYeuNhat();
timSoSVGioiVaDanhSach();

// Tạo hàm nhận vào 1 điểm và trả về tên sinh viên
function timTenSinhVienTheoDiem(diem){
    // Tìm vị trí của điểm trong mảng dsDiem
    var viTri = dsDiem.indexOf(diem);
    
    // Lấy tất cả các thẻ <tr> trong tbody
    var dsTr = document.querySelectorAll("#tblBody tr");
    var trTag = dsTr[viTri];
    
    // Lấy các thẻ <td> trong trTag
    var dsTd = trTag.querySelectorAll("td");
    
    // Trả về tên sinh viên từ nội dung của thẻ <td> thứ 3 (giả sử thứ tự là từ 0)
    var tenSV = dsTd[2].innerText;
    console.log(tenSV);
    return tenSV;
}

