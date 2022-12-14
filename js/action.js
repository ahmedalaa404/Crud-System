// get inputs of html 

"use strict"
const ProductName=document.getElementById("ProductName");
const ProductCatgorey=document.getElementById("ProductCatgorey");
const ProductPrice=document.getElementById("ProductPrice");
const ProductDesc=document.getElementById('ProductDesc');
const SearchProduct=document.getElementById("SearchProduct");
const removeAll=document.getElementById('remove');
const counter = document.getElementById('counter');
const searchInputs=document.getElementById('searchInputs');

// random sentences appearing
let quoteWords=document.getElementById("quoteWords");
let nameSpeaker=document.getElementById("nameSpeaker");

// get button of html 
const btnAdd=document.getElementById("btnAdd");
const btnUpdate=document.getElementById("btnUpdate");
const btnClear=document.getElementById("btnClear");
const cansle=document.getElementById("cansle");
const deletData=document.getElementById("deletData");

//  event static
cansle.addEventListener("click",showDiv);
deletData.addEventListener("click",remove);

// get tbody of table to show  a data 
const tbody=document.getElementById("tbody");


// variable used in js to store Data 
let store;

let concat=``;

 const DateOFDay=new Date();

let numberchangeUpdate;

// random sentences appearing

const quots=["Whatever it is, a person does not lose in any circumstance what God has bestowed upon him of honor.",
"Had it not been for its tides, and if it were not for its magic, the owner of his heart would not wish for Sidon, seek refuge in your heart from the arrows of its sight.. Or die as love willed as a martyr, if you saw beauty and did not matter.. You were a coarse, dull person.",
"Blessed is the love in which there is no owner and the other is owned.. Both are loyal to the other."];
const speakers=["- Malik bin Nabi","- Elia Abu Madi", "- Jorge Luis Borges"];
const rounded=parseInt(Math.random()*3);


//  variable reguxe
const reguxeName=/^[a-zA-Z1-9 ]{3,20}$/;
const reguxNumber=/^[1-9][0-9]{1,12}/;
const reguxCatgorey=/^[a-z]{2,10}$/;
const reguxDes=/^[a-z]{2,40}[a-zA-Z1-9 ,]{2,140}$/;

// Function to retrieve Data of Local storage and make a quote rounded 
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
    quoteWords.innerHTML=quots[rounded];
    nameSpeaker.innerHTML=speakers[rounded];
    displayData(store);
})()

// reguxe Fucntion
function validation(reg,input)
{
    if(reg.test(input.value)==true)
    {
        input.classList.replace("is-invalid","is-valid");
        return true;
    }
    else
    {
        if(input.classList.contains("is-valid"))
        {
            input.classList.replace("is-valid","is-invalid");
        }
        return false;
    }
}
function callreguex()
{
    validation(reguxNumber,ProductPrice);
    validation(reguxeName,ProductName);
    validation(reguxDes,ProductDesc);
    validation(reguxCatgorey,ProductCatgorey);
}
// events of reguex 

ProductName.addEventListener("input",function()
{
    validation(reguxeName,ProductName);
})

ProductPrice.addEventListener("input",function()
{
    validation(reguxNumber,ProductPrice);
})

ProductDesc.addEventListener("input",function()
{
    validation(reguxDes,ProductDesc);
})

ProductCatgorey.addEventListener("input",function()
{
    validation(reguxCatgorey,ProductCatgorey);
})


//  done of regux ;


// function remove all  Data in local storage
function clearData()
{
document.getElementById("layer").classList.replace('d-none','d-block');
}
removeAll.addEventListener("click",clearData);

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
if (validation(reguxNumber,ProductPrice)==true && validation(reguxeName,ProductName)==true && validation(reguxDes,ProductDesc)==true&& validation(reguxCatgorey,ProductCatgorey)==true)
{
let Product=
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
    callreguex()
}
}
btnAdd.addEventListener('click',addProduct)





// function empty filds
function makeInputsEmpty()
{
    ProductName.value="";
    ProductPrice.value="";
    ProductCatgorey.value="";
    ProductDesc.value="";
    callreguex()
}
btnClear.addEventListener("click",makeInputsEmpty)







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
    callreguex();
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

    if(validation(reguxeName,ProductName)==true)
    {
                if(ProductName.value!=store[numberchangeUpdate].Name)
            {
                store[numberchangeUpdate].Name=ProductName.value;
            }
    }
    if(validation(reguxCatgorey,ProductCatgorey)==true)
    {
         if(ProductCatgorey.value!=store[numberchangeUpdate].Catgorey)
            {
                store[numberchangeUpdate].Catgorey==ProductCatgorey.value;
            }
    }
    if(validation(reguxNumber,ProductPrice)==true)
    {
            if(ProductPrice.value!=store[numberchangeUpdate].Price)
                {
                store[numberchangeUpdate].price==ProductPrice.value;
                }
    }
    if(validation(reguxDes,ProductDesc)==true)
    {
        if(ProductDesc.value!=store[numberchangeUpdate].Desc)
        {
            store[numberchangeUpdate].Desc=ProductDesc.value;
        }
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

btnUpdate.addEventListener('click',changeUpdate);
function removeInputsStyle(productInputs)
{
    productInputs.style.backgroundColor="#fff";
    productInputs.style.boxShadow="none";
    productInputs.style.fontSize="16px";
} 

// function search of array


function Search(termSearch)
{
    let searchStore=[];
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
searchInputs.addEventListener("input",function(){
    Search(this.value);
})


