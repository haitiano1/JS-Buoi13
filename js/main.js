// BÀI 1: Tính tiền lương nhân viên

/**
 * Khối 1: Input
 * soNgayLam
 * 
 * Khối 2: Các bước xử lý
 * 
 * B1: Lấy giá trị soNgayLam từ form theo id
 * B2: Lập công thức
 *     tongLuong = soNgayLam * 100000;
 * B3: Thông báo kết quả
 * 
 *  Khối 3: Output ( Kết quả đạt được)
 * tongLuong

 */

function tinhTongLuong() {
  var soNgayLam = document.getElementById("ngayLam").value;

  var tongLuong = 0;
  tongLuong = soNgayLam * 100000;

  document.getElementById("luongNv").innerHTML = tongLuong.toLocaleString();
}

// BÀI 2: Tính giá trị trung bình 5 số
/**
 * Khối 1: Input
 * 
 * so1,so2,so3,so4,so5
 * 
 * Khối 2: Các bước xử lý
 * 
 * B1: Khai báo biến
 *      -Lấy giá trị từ form theo id các số
 * B2: Lập công thức
 *     Điểm trung bình: tổng 5 số / 5
 * B3: Thông báo kết quả
 * 
 *  Khối 3: Output ( Kết quả đạt được)
 * diemTrungBinh

 */

function tinhTrungBinh() {
  var so1 = document.getElementById("so1").value;
  var so2 = document.getElementById("so2").value;
  var so3 = document.getElementById("so3").value;
  var so4 = document.getElementById("so4").value;
  var so5 = document.getElementById("so5").value;

  var diemTrungBinh = 0;
  diemTrungBinh =
    (Number(so1) + Number(so2) + Number(so3) + Number(so4) + Number(so5)) / 5;
  document.getElementById("diemTb").innerHTML = diemTrungBinh;
}

//BÀI 3: Quy đổi tiền
/**
 * Khối 1: Input
 * soTien
 * 
 * Khối 2: Các bước xử lý
 * 
 * B1: Khai báo biến
 *      -Lấy giá trị soTien từ form theo id
 * B2: Lập công thức
 *     tinhTien = soTien * 23500
 * B3: Thông báo kết quả
 * 
 *  Khối 3: Output ( Kết quả đạt được)
 * tinhTien

 */
function tienQuyDoi() {
  var soTien = document.getElementById("soTien").value;

  var tinhTien = 0;
  tinhTien = soTien * 23500;
  document.getElementById("tinhTien").innerHTML = tinhTien.toLocaleString();
}

// BÀI 4
/**
 * Khối 1: Input
 * 
 * chieuDai, chieuRong
 * 
 * Khối 2: Các bước xử lý
 * 
 * B1: Khai báo biến
 *      - Lấy giá trị chieuDai, chieuRong từ form theo id
 *  
 * B2: Lập công thức
 *     Chu vi = ( dài + rộng) *2
 *     Diện tích = dài * rộng
 * B3: Thông báo kết quả
 * 
 *  Khối 3: Output ( Kết quả đạt được)
 * chuViHcn
 * dienTichHcn

 */
function tinhCvDt() {
  var chieuDai = document.getElementById("chieuDai").value;
  var chieuRong = document.getElementById("chieuRong").value;

  var chuViHcn = 0;
  chuViHcn = (Number(chieuDai) + Number(chieuRong)) * 2;
  document.getElementById("chuViHcn").innerHTML = chuViHcn;

  var dienTichHcn = 0;
  dienTichHcn = chieuDai * chieuRong;
  document.getElementById("dienTichHcn").innerHTML = dienTichHcn;
}

//BÀI 5: Tính tổng 2 ký số
/**
 * Khối 1: Input
 * 
 * số nguyên dương có 2 chữ số ( 12, 56, 33)
 * ten (hàng chục), unit (hàng đơn vị)
 * 
 * Khối 2: Các bước xử lý
 * 
 * B1: Khai báo biến 
 *      - lấy giá trị số người dùng đã nhập theo id
 * B2: Lập công thức
 *     bóc tách từng số hàng chục, đơn vị
 *      + lấy hàng chục
 *      lấy số đã nhập chia 10 => lấy phần nguyên
 *      + lấy hàng đơn vị
 *      - lấy số đã nhập chia 10 => lấy phần dư
 * B3: Thông báo kết quả
 * 
 *  Khối 3: Output ( Kết quả đạt được)
 * tổng 2 chữ số 

 */
function tinhTong() {
  var kySo = document.getElementById("kySo").value;

  var hangChuc = 0;
  var hangDonvi = 0;
  var tongKySo = 0;

  hangChuc = Math.floor(kySo / 10);
  hangDonvi = kySo % 10;
  tongKySo = hangChuc + hangDonvi;

  document.getElementById("tinhTong").innerHTML = tongKySo;
}
