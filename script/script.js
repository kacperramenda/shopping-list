let addButton = document.querySelector('.addItem')

let itemList = document.querySelector('.item-list')

const items = document.querySelectorAll('.fa-x').forEach((x) => x.addEventListener('click',deleteItem))

addButton.addEventListener('click',addItem)

function addItem(){
    let itemName = document.getElementById("enter-item").value
    let item = document.createElement('li')
    let span = document.createElement('span')
    let i = document.createElement('i')
    item.classList.add('item')
    i.classList.add('fa-solid', 'fa-x')
    span.textContent = itemName
    item.appendChild(span)
    item.appendChild(i)
    console.log(itemName);
    if(itemName.length>0){
        itemList.appendChild(item)
        addItemsToLocalStorage(itemName)
    }else{
        alert("Give product name")
    }
    document.querySelectorAll('.fa-x').forEach((x) => x.addEventListener('click',deleteItem))
}

function deleteItem(e){
    e.target.parentElement.remove()
}

let clearAllbutton = document.querySelector('.clearAll')

clearAllbutton.addEventListener('click',clearAll)

function clearAll(e){
    let items = document.querySelectorAll('.item')
    for(let i=0; i<items.length; i++){
        items[i].remove()
    }
}

const DomStorage = []

function addItemsToLocalStorage(item){
    DomStorage.push(item)
    // console.log(localStorage);
    localStorage.setItem('item',JSON.stringify(DomStorage))
}