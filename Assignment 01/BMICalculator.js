function tinhtoan(){
    var height = Number(document.getElementById('height').value)/100;
    var weight = Number(document.getElementById('weight').value);
   var ketqua = (weight/Math.pow(height,2)).toFixed(1);
   if(height =='' || weight == ''){
    alert('Vui lòng nhập chiều cao hoặc cân nặng');
   }
   else{
       document.getElementById('result').innerText = ketqua;
       if(ketqua < 18.5){
            document.getElementById('phanloai').innerText = "Gầy";
            document.getElementById('canhbao').innerText = "Thấp";   
        }else if( ketqua >= 18.5 && ketqua < 24.9){
            document.getElementById('phanloai').innerText = "Bình thường";
            document.getElementById('canhbao').innerText = "Không";   
        }
        else if( ketqua >= 25 && ketqua < 29.9){
            document.getElementById('phanloai').innerText = "Hơi béo";
            document.getElementById('canhbao').innerText = "Có khả năng";   
        }
        else if( ketqua >= 30 && ketqua < 34.9){
            document.getElementById('phanloai').innerText = "Béo phì cấp độ 1";
            document.getElementById('canhbao').innerText = "Cao";   
        }
        else if( ketqua >=  35 && ketqua < 39.9){
            document.getElementById('phanloai').innerText = "Béo phì cấp độ 2";
            document.getElementById('canhbao').innerText = "Cao";   
        }
        else if( ketqua >= 40 ){
            document.getElementById('phanloai').innerText = "Béo phì cấp độ 3";
            document.getElementById('canhbao').innerText = "Rất cao";   
        }

   }
}