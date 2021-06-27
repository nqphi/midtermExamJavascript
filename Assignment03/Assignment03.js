//khởi tạo lớp student
class Student {
    constructor(name, gender, markSub01, markSub02) {
        this.$name = name
        this.$gender = gender
        this.$markSub01 = markSub01
        this.$markSub02 = markSub02
        this.$mark = (this.$markSub01 + this.$markSub02)/2 //Điểm trung bình tích luỹ
        this.$subjects = [
            {Title: "Math", Mark: this.$markSub01},
            {Title: "Physical", Mark: this.$markSub02}
        ]
    }
    //get name
    get name(){
        return this.$name
    }
    //set giá trị mới
    set name(newName){
        return this.$name = newName
    }
    get mark(){
        return this.$mark
    }
    //mark sẽ bị thay đỏi theo subject nên không cần hàm set
    get gender(){
        return this.$gender
    }
    set  gender(newGender){
        return this.$gender = newGender
    }
    get subjects(){
        return this.$subjects
    }
    set subjects(newSubject){
        return this.$subjects = newSubject
    }
    showInfo(){
        return `Name: ${this.name}, Mark: ${this.mark}`;
    }
}

// Tạo một mảng array để lưu danh sách sinh viên
var studentArray = [];

//thêm giá trị đã nhập vào lớp
function submitFormStudent(){
    let i = studentArray.length;
    let name = document.getElementById("name").value;
    let gender = document.getElementById("gender").value;
    let markSub01 = Number(document.getElementById("markSub01").value);
    let markSub02 = Number(document.getElementById("markSub02").value);
    //thêm vào mảng studentArray
    studentArray.push(new Student(name, gender, markSub01, markSub02));
    createRow(studentArray[i].$name, studentArray[i].$gender, studentArray[i].$mark, studentArray[i].$markSub01, studentArray[i].$markSub02);
    i++;
}

//in ra kết quả sau xử lý ra bảng
function returnDataTable(arrayInput){
    deleteAllRow();
    for (let i = 0; i < arrayInput.length; i++) {
        createRow(arrayInput[i].$name, arrayInput[i].$gender, arrayInput[i].$mark, arrayInput[i].$markSub01, arrayInput[i].$markSub02);
    }
}

//thêm một dòng vào bảng
function createRow(name, gender, mark, markSub01, markSub02) {
    let table = document.getElementById("datatable");
    // insertRow(số thứ tự của hàng); bắt đầu từ 0, nhập -1 để thêm vào hàng cuối cùng
    let row = table.insertRow(-1);
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = gender;
    row.insertCell(2).innerHTML = markSub01;
    row.insertCell(3).innerHTML = markSub02;
    row.insertCell(4).innerHTML = mark;
}

//deleteAllRow
function deleteAllRow(){
    let table = document.getElementById("datatable");
    for(var i = table.rows.length - 1; i > 0; i--){
      table.deleteRow(i);
    }
}

//hàm này sẽ xóa 1 hàng cuối
function deleteLastRow(){
    if((document.getElementById("datatable").rows.length) > 1 ){
        document.getElementById("datatable").deleteRow(-1);
        studentArray.shift(studentArray.length);
    }
}

// tạo nhanh 10 thành viên trong lớp
function createdSudents(){
    studentArray[0]= new Student('Nguyễn Quang Phi', 'Nam', 10, 9);
    studentArray[1]= new Student('Ngô Nguyễn Nhật Hùng', 'Nam', 10, 8);
    studentArray[2]= new Student('Nguyễn Ngọc Thiên', 'Nam', 1, 9);
    studentArray[3]= new Student('Phan Ngọc Bá', 'Nữ', 5, 8);
    studentArray[4]= new Student('Ngô Thị Hà', 'Nữ', 4, 3);
    studentArray[5]= new Student('Nguyễn Hoài An', 'Nam', 4, 9);
    studentArray[6]= new Student('Phan Thi Ngọc Anh', 'Nữ', 7, 8);
    studentArray[7]= new Student('Ngô Thị Thư', 'Nữ', 10, 8);
    studentArray[8]= new Student('Nguyễn Văn Toàn', 'Nam',0, 0);
    studentArray[9]= new Student('Phan Ngọc Hiệu', 'Nữ', 7, 8);
    returnDataTable(studentArray)
}

//Sắp xếp danh sách sinh viên theo thứ tự điểm tích luỹ từ bé đến lớn
function sortAsc(arrayInput){
    this.$array = arrayInput
    this.$array.sort((numberA, numberB) => {return numberA.$mark - numberB.$mark})
    return this.$array
}

//Sắp xếp danh sách sinh viên theo thứ tự điểm tích luỹ từ lớn đến bé
function SortDesc(arrayInput){
    this.$array = arrayInput
    this.$array.sort((numberA, numberB) => {return numberB.$mark - numberA.$mark})
    return this.$array
}

//hàm lọc giới tính
function filterGender(arrayInput, genderInput){
    this.$array = arrayInput.filter((item) => item.$gender == genderInput)
    return this.$array
}

//hàm lọc điểm trung bình tích lỹ > markInput
function filterMark(arrayInput, markInput){
    this.$array = arrayInput.filter((item) => item.$mark > markInput)
    return this.$array
}

//Lọc ra danh sách sinh viên là nữ và có điểm tích luỹ lớn hơn 5.0
function filterGenderMark(arrayInput, genderInput, markInput){
    this.$array = arrayInput.filter((item) => ((item.$gender == genderInput) && (item.$mark > markInput)))
    return this.$array
}

//Lọc ra danh sách sinh viên có điểm toán hoặc lý lớn hơn 8.0
function filterSubMark(arrayInput, markInput){
    this.$array = arrayInput.filter((item) => ((item.$subjects[0].Mark > markInput) || (item.$subjects[1].Mark > markInput)))
    return this.$array
}

//ìm sinh viên có điểm môn Toán cao nhất
function filterMaxSubMark(arrayInput, subIndex){
    let max = -Infinity
    this.$array = []
    //tìm điểm cao nhất
    for (let i = 0; i < arrayInput.length; i++) {
        if (arrayInput[i].$subjects[subIndex].Mark > max) {
            max = arrayInput[i].$subjects[subIndex].Mark
        }
    }
    //tìm những người cùng có điểm cao nhất
    for (let i = 0; i < arrayInput.length; i++) {
        if (arrayInput[i].$subjects[subIndex].Mark == max) {
            this.$array.push(arrayInput[i])
        }
    }
    return this.$array
}

//tìm sinh viên có điểm môn Toán thấp nhất
function filterMinSubMark(arrayInput, subIndex){
    let min = Infinity
    //khỏi tạo 1 mảng array
    this.$array = []
    //tìm điểm thấp nhất
    for (let i = 0; i < arrayInput.length; i++) {
        if (arrayInput[i].$subjects[subIndex].Mark < min) {
            min = arrayInput[i].$subjects[subIndex].Mark
        }
    }
    //tìm những người cùng có điểm thấp nhất
    for (let i = 0; i < arrayInput.length; i++) {
        if (arrayInput[i].$subjects[subIndex].Mark == min) {
            this.$array.push(arrayInput[i])
        }
    }
    return this.$array
}

// xXoá khỏi danh sách sinh viên có điểm tích luỹ là 0
function removeStudent(arrayInput, markInput){
    studentArray = filterMark(arrayInput, markInput)
    return studentArray
}
function resetData(){
location.reload();
}