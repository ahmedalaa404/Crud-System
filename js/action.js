// get inputs of html 
let ProductName=document.getElementById("ProductName");
let ProductCatgorey=document.getElementById("ProductCatgorey");
let ProductPrice=document.getElementById("ProductPrice");
let ProductDesc=document.getElementById('ProductDesc');
let SearchProduct=document.getElementById("SearchProduct");
let removeAll=document.getElementById('remove');
let counter = document.getElementById('counter');
let searchInputs=document.getElementById('searchInputs');
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
        store=JSON.parse(localStorage.getItem("ProductItem"));
    }
    else
    {
        store=[];
    }
    displayData(store);

})()

// function remove Data in local storage
function clearData()
{
    localStorage.removeItem('ProductItem');
    store=[];
    displayData(store);
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
        date:`${DateOFDay.getDate()}-${DateOFDay.getMonth()+1}-${DateOFDay.getFullYear()}`,
    }
    store.push(Product);
    localStorage.setItem('ProductItem',JSON.stringify(store));
    // add data in local storage
    displayData(store);
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


function displayData(list)
{
    concat=``;
    for(let i=0 ; i<list.length;i++)
    {
        concat +=`<tr class="table-light">
        <td>${i}</td>
        <td>${list[i].Name}</td>
        <td>${list[i].Catgorey}</td>
        <td>${list[i].Price}</td>
        <td>${list[i].Desc}</td>
        <td>${DateOFDay.getDate()} - ${DateOFDay.getMonth()+1} -${DateOFDay.getFullYear()} </td>
        <td>
         <i class="fa-solid fa-circle-minus text-danger fs-5" onclick=removeItem(${i})></i>
        </td>
        <td>
         <i class="fa-solid fa-pen-to-square text-primary fs-5"></i></i>
        </td>
    </tr>`;
    }
    tbody.innerHTML=concat;
    counter.innerHTML=store.length;
}

function removeItem(x)
{
    store.splice(x,1);
    displayData(store);
    localStorage.setItem('ProductItem',JSON.stringify(store));
}

// function Search(termSearch)
// {
//     searchStore=[];
//     if(searchInputs.value.length>2)
//     {

//         for (var s=0; s<store.length;s++)
//         {
//             if(store[s].Name.toLowerCase().includes(termSearch.toLowerCase()) == true)
//             {       
//                 searchStore.push(store[s]);   
//                 displayData(searchStore);
//             }
//         }
//     }
// else
// {
//     searchStore=[];
//     displayData(store)

// }
// }
