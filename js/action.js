// get inputs of html 
let ProductName=document.getElementById("ProductName");
let ProductCatgorey=document.getElementById("ProductCatgorey");
let ProductPrice=document.getElementById("ProductPrice");
let ProductDesc=document.getElementById('ProductDesc');
let SearchProduct=document.getElementById("SearchProduct");
let removeAll=document.getElementById('remove')
let counter = document.getElementById('counter')

// get button of html 
let btnAdd=document.getElementById("btnAdd");
let btnUpdate=document.getElementById("btnUpdate");
let btnDelete=document.getElementById("btnDelete");



// get tbody of table to show  a data 
let tbody=document.getElementById("tbody");


// variable used in js to store Data 
let store;
let concat=``;
DateOFDay=new Date();


// Function to retrieve Data of Local storage
(function()
{
    if(localStorage.getItem("ProductItem")!=null)
    {
        store=JSON.parse(localStorage.getItem("ProductItem"))
    }
    else
    {
        store=[]
    }
    displayData();

})()

// function remove Data in local storage
function clearData()
{
    localStorage.removeItem('ProductItem');
    store=[];
    displayData();
}



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
    localStorage.setItem('ProductItem',JSON.stringify(store));
    // add data in local storage
    displayData();
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


function displayData()
{
    concat=``;
    for(let i=0 ; i<store.length;i++)
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
    counter.innerHTML=store.length;
}


// save Data in lovcal Storage



