function tinhLaiSuat() {
  //khai báo biến và gán giá trị
  var tienVay = Number(document.getElementById("tienVay").value)
  var thoiHan = Number(document.getElementById("thoiHan").value)
  var laiSuat = Number(document.getElementById("laiSuat").value)
  var ngayGiaiNgan = new Date(document.getElementById("ngayGiaiNgan").value)
  //xóa kết quả trước đó
  xoadulieucu()
  //tính toán
  var kyTraNo = 0, laiHangThang = 0, gocHangThang = 0, tongLaiHT = 0, gocConLai = tienVay
  dateFormat(ngayGiaiNgan)
  createRow(kyTraNo, ngayTraNo, gocConLai, gocHangThang, laiHangThang)
  gocHangThang = tienVay/thoiHan

  for (let i = 0; i < thoiHan; i++) {
    kyTraNo++
    ngayGiaiNgan.setMonth(ngayGiaiNgan.getMonth()+1)
    dateFormat(ngayGiaiNgan)
    laiHangThang = (gocConLai)/100*laiSuat/12
    gocConLai = gocConLai-gocHangThang
    tongLaiHT= tongLaiHT + laiHangThang
    createRow(kyTraNo, ngayTraNo, gocConLai, gocHangThang, laiHangThang)
  }
  kyTraNo="Tổng"
  ngayTraNo=""
    createRow(kyTraNo, ngayTraNo, gocConLai, tienVay, tongLaiHT)
}

//format cho ngày tháng năm
function dateFormat(ngayGiaiNgan){
  let dd = String(ngayGiaiNgan.getDate()).padStart(2, '0')
  let mm = String(ngayGiaiNgan.getMonth() + 1).padStart(2, '0')
  let yyyy = ngayGiaiNgan.getFullYear()
  ngayTraNo =  dd + '/' + mm + '/' + yyyy
  return ngayTraNo
}

//format cho số tiền
function numberFormat(number){
  let newNumber = number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  if (newNumber == 0){
    newNumber = ""
  }
  return newNumber
}

//liệt kê hiển thị kết quả
function createRow(kyTraNo, ngayTraNo, gocConLai, gocHangThang, laiHangThang) {
  let table = document.getElementById("bangtinhlaisuat")
  // insertRow(số thứ tự của hàng); bắt đầu từ 0, nhập -1 để thêm vào hàng cuối cùng
  let row = table.insertRow(-1)
  row.insertCell(0).innerHTML = kyTraNo
  row.insertCell(1).innerHTML = ngayTraNo
  row.insertCell(2).innerHTML = numberFormat(gocConLai)
  row.insertCell(3).innerHTML = numberFormat(gocHangThang)
  row.insertCell(4).innerHTML = numberFormat(laiHangThang)
  row.insertCell(5).innerHTML = numberFormat(gocHangThang+laiHangThang)
}
//xóa kết quả trước đó
function xoadulieucu(){
  let table = document.getElementById("bangtinhlaisuat")
  for(var i = table.rows.length - 1; i > 0; i--){
    table.deleteRow(i)
  }
}