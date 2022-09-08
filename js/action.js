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
let cansle=document.getElementById("cansle");
let deletData=document.getElementById("deletData");




// get tbody of table to show  a data 
let tbody=document.getElementById("tbody");


// variable used in js to store Data 
let store;
let concat=``;
DateOFDay=new Date();
let numberchangeUpdate;


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
document.getElementById("layer").classList.replace('d-none','d-block');
}

//  diplay diiv to choice for that if is the display block or none 
function showDiv()
{
    document.getElementById("layer").classList.replace('d-block','d-none');
}
// if choice delet all Data 
function remove()
{

    localStorage.removeItem('ProductItem');
    store=[];
    displayData(store);
    showDiv();
}




//  function add product to object

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



// function used to diplay data 

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
         <i class="fa-solid fa-pen-to-square text-primary fs-5" onclick="update(${i})"></i></i>
        </td>
    </tr>`;
    }
    tbody.innerHTML=concat;
    counter.innerHTML=store.length;
}

// function used to remove product item from array and display in real time delete
function removeItem(x)
{
    store.splice(x,1);
    displayData(store);
    localStorage.setItem('ProductItem',JSON.stringify(store));
}
// function used to 

function update(x)
{
    numberchangeUpdate=x;
    // save number of index that have a process of update
    ProductName.value=store[x].Name;
    ProductCatgorey.value=store[x].Catgorey;
    ProductPrice.value=store[x].Price;
    ProductDesc.value=store[x].Desc;
    btnAdd.classList.add('d-none');
    btnUpdate.classList.replace('d-none','d-inline-block')


    inputsStyle(ProductName);
    inputsStyle(ProductDesc);
    inputsStyle(ProductPrice);
    inputsStyle(ProductCatgorey);
}

// function stylest the fileds of inputes to know that is update

function inputsStyle(productInputs)
{
    productInputs.style.backgroundColor="#c0c0c09c";
    productInputs.style.boxShadow="#596c6cb8 1px 0px 10px";
    productInputs.style.fontSize="16px";
}






function changeUpdate()
{
    if(ProductName.value!=store[numberchangeUpdate].Name)
    {
        store[numberchangeUpdate].Name=ProductName.value;
    }

    if(ProductCatgorey.value!=store[numberchangeUpdate].Catgorey)
    {
        store[numberchangeUpdate].Catgorey==ProductCatgorey.value;
    }


    if(ProductPrice.value!=store[numberchangeUpdate].Price)
    {
     store[numberchangeUpdate].price==ProductPrice.value;
    }


    if(ProductDesc.value!=store[numberchangeUpdate].Desc)
    {
        store[numberchangeUpdate].Desc=ProductDesc.value;
    }

    localStorage.setItem('ProductItem',JSON.stringify(store));
    makeInputsEmpty();
    btnAdd.classList.replace('d-none','d-inline-block')
    btnUpdate.classList.replace('d-inline-block','d-none')
    displayData(store);
    // when click update remove all style of inputs when devloper make when click button of icones update
    removeInputsStyle(ProductName);
    removeInputsStyle(ProductDesc);
    removeInputsStyle(ProductPrice);
    removeInputsStyle(ProductCatgorey);

}
function removeInputsStyle(productInputs)
{
    productInputs.style.backgroundColor="#fff";
    productInputs.style.boxShadow="none";
    productInputs.style.fontSize="16px";
} 

// function search of array


function Search(termSearch)
{
    searchStore=[];
    if(searchInputs.value.length>2)
    {

        for (var s=0; s<store.length;s++)
        {
            if(store[s].Name.toLowerCase().includes(termSearch.toLowerCase()) == true)
            {       
                searchStore.push(store[s]);   
                displayData(searchStore);
            }
        }
    }
else
{
    searchStore=[];
    displayData(store)

}
}
