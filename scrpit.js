const email=document.getElementById('email');
const number=document.getElementById('number');
const form=document.getElementById('register');
form.addEventListener('submit',function(){
    const email=document.getElementById('email').value;
    const number=document.getElementById('number').value;
    if(email != 0| number != 0){
        alert('Đăng kí thành công.');
    }
    else alert('Bạn chưa điền thông tin.');
});