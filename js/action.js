// get inputs of html 
var ProductName=document.getElementById("ProductName");
var ProductCatgorey=document.getElementById("ProductCatgorey");
var ProductPrice=document.getElementById("ProductPrice");
var ProductDesc=document.getElementById('ProductDesc');
var SearchProduct=document.getElementById("SearchProduct");



// get button of html 
var btnAdd=document.getElementById("btnAdd");
var btnUpdate=document.getElementById("btnUpdate");
varbtnDelete=document.getElementById("btnDelete");



// get tbody of table to show  a data 
var tbody=document.getElementById("tbody");


// variable used in js to store Data 
var store=[];
var concat=``;
DateOFDay=new Date();


//  function add to object
function addProduct()
{ 
Product=
    {
        Name:ProductName.value,
        Price:ProductPrice.value,
        Catgorey:ProductCatgorey.value,
        Desc:ProductDesc.value,
    }
    store.push(Product);
    console.log("Aaaaaa")
    showData();
    makeInputsEmpty();
}


// function empty filds
function makeInputsEmpty()
{
    ProductName.value="";
    ProductPrice.value="";
    ProductCatgorey.value="";
    ProductDesc.value="";
}


function showData()
{
    concat=``;
    for(var i=0 ; i<store.length;i++)
    {
        concat +=`<tr class="table-light">
        <td>${i}</td>
        <td>${store[i].Name}</td>
        <td>${store[i].Catgorey}</td>
        <td>${store[i].Price}</td>
        <td>${store[i].Desc}</td>
        <td>${DateOFDay.getDate()} - ${DateOFDay.getMonth()+1} -${DateOFDay.getFullYear()} </td>
        <td>
        <a href=""> <i class="fa-solid fa-circle-minus text-danger fs-5" ></i> </a>
        </td>
        <td>
        <a href=""> <i class="fa-solid fa-pen-to-square text-primary fs-5"></i></i> </a>
        </td>
    </tr>`;
    }
    tbody.innerHTML=concat;
}



