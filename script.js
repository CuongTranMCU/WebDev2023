function signup(e){
    event.preventDefault();
    var username=document.getElementById("username").value;
    var password=document.getElementById("psw").value;
    var user = 
    {
        username: username,
        password:password,  
    }
    // lưu vào local storage
    var json=JSON.stringify(user)
    localStorage.setItem(username,json);
    // username:key
    // json: value 
    //  CuongTran 
    //  json: username:CuongTran
            //   psw:12345678
    alert("Đăng ký thành công");  
}
function login(e){
    event.preventDefault();
    var username=document.getElementById("username").value;
    var password=document.getElementById("psw").value;
    var user=localStorage.getItem(username);
    // user: dữ liệu username,password đã được đăng ký
    var data=JSON.parse(user);
    // chuyển về dưới dạng json: 
    if(username == data.username && password== data.password)
    {
        alert("Đăng nhập thành công");
        window.location.href = "index.html";
    }
    else
    {
        alert("Đăng nhập thất bại");
    }

}
