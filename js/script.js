function createAdmin(){
    var userArray=[];
    var bien="KhachHangA";
    if(localStorage.getItem('TaiKhoan')===null){
        var user1={
            username: 'admin',
            password: 'admin',
            address:'367 NVL',
            phone:'0828098274',
            fullname: 'admin',
            datesignup: '17/11/2021',
            usertype: "admin"
        }
        /*var user2={
            username:bien,
            password:'123',
            firstname:'N',
            lastname:'O',
            dob:'27082002',
            datesignup:'17/11/2021',
            usertype:"kh"
        }*/
        userArray.push(user1);
        // console.log(userArray);
        localStorage.setItem('TaiKhoan',JSON.stringify(userArray));
        showUserList();
    }
}
// function showUserList(){
//     if(localStorage.getItem('TaiKhoan')===null){
//         return false;
//     }
//     var tr='';
//     userArray=JSON.parse(localStorage.getItem('TaiKhoan'));
//     for(var i=0;i<userArray.length;i++){
//         tr+='<tr>'+
//         '<td scope="row">'+(i+1)+'</th>'+
//         '<td class="username">'+userArray[i].username+'</td>'+
//         '<td class="password">'+userArray[i].password+'</td>'+
//         '<td class="address">'+userArray[i].address+'</td>'+
//         '<td class="fullname">'+userArray[i].fullname+'</td>'+
//         '<td class="phone">'+userArray[i].phone+'</td>'+
//         '<td class="datesignup">'+userArray[i].datesignup+'</td>'+
//         '<td class="usertype">'+userArray[i].usertype+'</td>'+
//         '<td>'+
//             '<a onclick="toggleModal(this, '+(i+1)+')">Edit</a>'+
//         '</td>'+
//         '<td>'+
//             '<a onclick="removeRow(this)">Delete</a>'+
//         '</td>'+
//         '</tr>';   
//     }
//     document.getElementById('row').innerHTML=tr;
// }
function showUserList(){
    if(localStorage.getItem('TaiKhoan')===null){
        return false;
    }
    userArray=JSON.parse(localStorage.getItem('TaiKhoan'));
    var tr=`
    <thead>
            <tr>
                    <th>STT</th>
                    <th>Tên tài khoản</th>
                    <th>Password</th>
                    <th>Địa chỉ</th>
                    <th>Họ và tên</th>
                    <th>Số điện thoại</th>
                    <th>Ngày đăng ký</th>
                    <th>User type</th>
                    <th colspan="2">Thao tác</th>
            </tr>
    </thead>
    `;
    for(var i=0;i<userArray.length;i++){
        tr+='<tbody>'+
        '<tr>'+
            '<td>'+(i+1)+'</td>'+
            '<td class="tentk">'+userArray[i].username+'</td>'+
            '<td class="pass">'+userArray[i].password+'</td>'+
            '<td class="address">'+userArray[i].address+'</td>'+
            '<td class="fullname">'+userArray[i].fullname+'</td>'+
            '<td class="phone">'+userArray[i].phone+'</td>'+
            '<td class="datesignup">'+userArray[i].datesignup+'</td>'+
            '<td class="usertype">'+userArray[i].usertype+'</td>'+
            '<td style="cursor:pointer;" onclick="layThongTin(this, '+(i+1)+')" id="save-button" ><i class="fas fa-edit"></i></td>'+
            '<td style="cursor:pointer;" onclick="deleteUser(\''+userArray[i].username+'\')"><i class="fas fa-trash-alt"></i></td>'+
            '</tr>'+
            '</tbody>';
    }
    document.getElementById('usersList').innerHTML=tr;
}

function deleteUser(usernameDelete){
    var userArray= JSON.parse(localStorage.getItem('TaiKhoan'));
    for(var i=0;i<userArray.length;i++){
        if(userArray[i].username == usernameDelete){
            if(confirm('Bạn muốn xoá tài khoản này?'))
                userArray.splice(i,1);
        }
    }
    localStorage.setItem('TaiKhoan',JSON.stringify(userArray));
    showUserList();
}
var userkh;
// function createUser(){
//     userArray=JSON.parse(localStorage.getItem('TaiKhoan'));
//     // user1={
//     //     username: "onhauyennhi",
//     //     password: "123",
//     //     firtname: "on",
//     //     lastname: "nhi",
//     //     dob: "27082002",
//     //     datesignup: "17/11/2021",
//     //     datatype: "kh"
//     // }
//     var username =document.getElementById('login_name').value;
//     var password =document.getElementById('pass').value;
//     var phone =document.getElementById('phone').value;
//     var address = document.getElementById('address').value;
//     var fullname= document.getElementById('fullname').value;
//     var datesignup=today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
//     if(username=='' || password==''|| phone==''|| address=='' || fullname==''|| datesignup==''){
//         document.getElementById('innerloi').innerHTML='Đây là thông tin bắt buộc!';
//     }
//     userkh ={
//         username: document.getElementById('login_name').value,
//         password: document.getElementById('pass').value,
//         phone:document.getElementById('phone').value,
//         address:document.getElementById('address').value,
//         fullname:document.getElementById('fullname').value,
//         datesignup:today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear(),
//         usertype:"khachhang"
//     }
//     console.log(userkh);
//     userArray.push(userkh);
//     localStorage.setItem('TaiKhoan',JSON.stringify(userArray));
//     showUserList();
// } 
function login()
{   
    // var username=document.getElementById("login_name").value;
    // var password=document.getElementById("pass").value;
    // var userArray = JSON.parse(localStorage.getItem('TaiKhoan'));
    // for(i=0;i<userArray.length;i++){
    //  if(username=='admin' && password=='admin'){
    //         alert('Bạn đã đăng nhập với tư cách quản trị admin thành công!');
    //         window.location.href = 'admin.html';
    //         return;

    //     }
    //     else if(userArray[i].username==username && userArray[i].password==password){
    //         alert('Bạn đã đăng nhập với tư cách được admin cấp quyền!');
    //         window.location.href='index.html';
    //         return;
    //     }
    // }
    // alert("Tài khoản này không tồn tại");    
   
    let username,password;
    username = document.getElementById('login_name').value;
    password = document.getElementById('pass').value;
    let userArray = [];
    userArray = JSON.parse(localStorage.getItem('TaiKhoan')) ? JSON.parse(localStorage.getItem('TaiKhoan')) : [];
    if(userArray.some((v) => {return v.username==username && v.password==password})){
        let currentUser = userArray.filter((v) => {return v.username==username && v.password==password})[0]
        localStorage.setItem('loginName', currentUser.username);
        localStorage.setItem('loginPass', currentUser.password);
        window.location.href = 'index.html';
    }
    else{
        alert('Bạn đăng nhập thất bại!');
    }
}
function Logout(){
    localStorage.removeItem('loginName');
    localStorage.removeItem('loginPass');
    window.location.href = 'dangnhap.html';
}
function hienthimenuAdmin(){
    var menu=['Danh Mục', 'Sản Phẩm', 'Tài Khoản'];
    var s="";
    for(i=0;i<menu.length;i++){
        var a='<li><a href="admin.html?'+i+'">'+menu[i]+'</a></li>';
        s+=a;
    }
    console.log(menu);
    document.getElementById("admin-menu").innerHTML=s;
}
function hienthiAdmin(){
    var url=window.location.href;
    var id=url.split('?');
    id=parseInt(id[1]);
    switch(id){
        case 0: document.getElementsByClassName('admin-content-right').innerHTML='<div class="information">HELLO</div>';
                break;
        case 1: document.getElementsByClassName('admin-content-right').innerHTML='<div class="information">HELLO</div>';
                break;
        case 2: document.getElementsByClassName('admin-content-right').innerHTML=' <h2>DANH SÁCH TÀI KHOẢN</h2><div class="information"><table  id="usersList"></table></div>';
                break;
        default: break;
    }
}

window.onload=function(){
    showUserList();
    createAdmin();
    hienthimenuAdmin();
    hienthiAdmin();
    createProduct();
    showProductList();
}