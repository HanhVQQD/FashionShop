// _product_list______
var products1=[
    {
        img:"image/girl1.jpg",
        name:"Medium Lady",
        price:"100$",
        type:"girl"
    },
    {
        img:"image/girl2.jpg",
        name:"Petit CD Bracelet",
        price:"150$",
        type:"girl"
    },
    {
        img:"image/pexels-jack-winbow-1457983.jpg",
        name:"Montaigne BAS",
        price:"120$",
        type:"girl"
    },
    {
        img:"image/sweater1.jpg",
        name:"Montaigne PHP",
        price:"120$",
        type:"winter"
    },
    {
        img:"image/sweater3.jpg",
        name:"Montaigne BCS",
        price:"120$",
        type:"winter"
    },
    {
        img:"image/sweater2.jpg",
        name:"Montaigne ASD",
        price:"190$",
        type:"winter"
    }

];
var count_img=0;
var i=0;
for(i=i; i< products1.length; i++){
    if(products1[i].type=="girl"){
        document.getElementById("girl").innerHTML +=`
    <div class="boxsp">
        <img src="${products1[i].img}" id="count_img${count_img}">
        <div class="info1">
            <p id="count_name${count_img}">${products1[i].name}</p>
            <p id="count_price${count_img}">${products1[i].price}</p>
            <button class="add_cart" type="button" onclick='add_in_cart(${count_img})'>ADD Cart</button>
        </div>
    </div>
    `;
    }else{
        document.getElementById("winter").innerHTML +=`
        <div class="boxsp">
            <img src="${products1[i].img}" id="count_img${count_img}">
            <div class="info1">
                <p id="count_name${count_img}">${products1[i].name}</p>
                <p id="count_price${count_img}">${products1[i].price}</p>
                <button class="add_cart" type="button" onclick='add_in_cart(${count_img})'>ADD Cart</button>
            </div>
        </div>
        `;
    }
    count_img++;
};
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

var products_in_cart1=[];
var count_cart = 0;
var count_cart_id=0;
var soluongsp;
var SubTotal1=0;
var gia;
var tong1;
function add_in_cart(count_img){
    var content_in_cart={
        img_pr: products1[count_img].img,
        name_pr: products1[count_img].name,
        price: products1[count_img].price
    }
    products_in_cart1.push(content_in_cart);
    var tong =0;
    for(count_cart=count_cart; count_cart<products_in_cart1.length; count_cart++){
        // var check_cart= document.querySelectorAll(".title1")
        // if(check_cart[count_cart].innerHTML == img_pr){
        //     alert('SPDC')
        //     return
        // }
        document.getElementById('pro_in_cart').innerHTML +=
    `
    <div>
        <form>
            <table class="table_cart">
                <tr>
                    <td><img class="title1" src="${products_in_cart1[count_cart].img_pr}" alt=""></td>
                    <td>
                        <p>${products_in_cart1[count_cart].name_pr}</p>
                        <p>${products_in_cart1[count_cart].price}</p>
                        <input class="subtotal" type="number" min="1" max="10" value="1" id="table_cart${count_cart_id}">
                    </td>
                    <td><a id="clots${count_cart_id}"><i class="ri-close-circle-fill"></i></a></td>
                </tr>
            </table>
        </form>
    </div>                 
    `
    showcountsp();
    function showcountsp() {
        document.getElementById("count1").innerHTML = products_in_cart1.length;
    };

    soluongsp =document.getElementById("table_cart"+count_cart_id).value;
    gia=parseInt(products_in_cart1[count_cart].price);
    // var n;
    // function remove__products() {
    //         document.getElementById('clots'+(${count_cart_id}));

    //         products_in_cart1.splice([],1)
    // };
    };      
}
function SubTotal(){
    var soluong=soluongsp;
    var thanhtien=parseInt(soluong)*parseInt(gia);
    SubTotal1+=thanhtien;
    document.getElementById('SubTotal').innerHTML= SubTotal1+"$";;
}
// remove__products



// cart___open
function openNav() {
    document.getElementById("myNav1").style.width = "30%";
  }
  function closeNav() {
    document.getElementById("myNav1").style.width = "0%";
  }
// info___user
function openNav2() {
    document.getElementById("myNav2").style.display = "block";
  }
  
  function closeNav2() {
    document.getElementById("myNav2").style.display = "none";
  }

//   Hanh________________++++++++++
var arr3 = [];
// ----------------SAVE DATA------------
function SaveData() {
    var FullName = document.getElementById("Fn3").value;
    if (FullName == "") {
        alert("Full name must not blank!")
    }
    var PhoneNumber = document.getElementById("Pn3").value;
    if (PhoneNumber == "") {
        alert("Phone number must not blank!")
    }
    var Email = document.getElementById("Em3").value;
    if (Email == "") {
        alert("Email must not blank!")
    }
    var Address = document.getElementById("Adr3").value;
    if (Address == "") {
        alert("Address must not blank!")
    }
    var Messages = document.getElementById("Mess3").value;
    if (Messages == "") {
        alert("Messages must not blank!")
    }
    var Banks = document.getElementById("Sl3").value;
    if (Banks == "") {
        alert("Please choose bank of your payment!")
    }

    arr3.push(FullName, PhoneNumber, Email, Address, Messages, Banks)
    ResetData()
}

var p=0;
function show_name_total_pro(){
    for(p=p;p<products_in_cart1.length;p++){
        document.getElementById('tbody').innerHTML+=
        `
            <tr>
                <td>${products_in_cart1[p].name_pr}</td>
                <td>${products_in_cart1[p].price}</td>     
            </tr>
        `;       
    };
    document.getElementById('Temp3').innerHTML=SubTotal1+"$";
}
// -------------------RESET--------------------------------------
function ResetData() {
    document.getElementById('Fn3').value = '';
    document.getElementById('Pn3').value = '';
    document.getElementById('Ema3').value = '';
    document.getElementById('Adr3').value = '';
    document.getElementById('Mess3').value = '';
    document.getElementById('Sl3').value = '';
}

// Duong___________________/


function openNav5() {
    document.getElementById("myNav5").style.display = "block";
  }
  
  function closeNav5() {
    document.getElementById("myNav5").style.display = "none";
}
var array4=[];
// ...
// var i = 0;

function myfuction4() {
    var name4 = document.getElementById('Fn3').value;
    var numphone4 = document.getElementById('Pn3').value;
    var mail4 = document.getElementById('Ema3').value;
    var address4 = document.getElementById('Adr3').value;
    var mess4 = document.getElementById('Mess3').value;

    array4.push(name4, numphone4, mail4, address4, mess4);

    document.getElementById('namecs4').innerHTML += array4[0];
    document.getElementById('phonecs4').innerHTML += array4[1];
    document.getElementById('emailcs4').innerHTML += array4[2];
    document.getElementById('addresscs4').innerHTML += array4[3];
    document.getElementById('messsenger4').innerText += array4[4];
    
    document.getElementById('product4').innerHTML= "SubTotal: "+ SubTotal1+"$";
}   
