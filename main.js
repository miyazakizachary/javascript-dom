//getElementsByClassName will return HTML elements or Node list and not pure array
// https://stackoverflow.com/questions/15763358/difference-between-htmlcollection-nodelists-and-arrays-of-objects  
let items = document.getElementsByClassName('insert-card-list-item')
console.log(items)
items[3].style.backgroundColor = 'black'
items[3].style.color = 'yellow'
/*
let li = document.getElementsByTagName('li')
for (let i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = 'black'
    li[i].style.color = 'yellow'
}
*/

/*
Array.prototype.forEach.call(items, (item, index, array) => {
    array[index].style.backgroundColor = 'black'
    array[index].style.color = 'yellow'
})
*/

Array.from(items).forEach((item) => {
    item.style.backgroundColor = 'black'
    item.style.color = 'white'
})

let s = document.styleSheets[0]
console.log(s)

/* refer to: 
 https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM
 https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM
 https://github.com/mdn/web-components-examples
 https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet 

 https://developer.mozilla.org/en-US/docs/Web/API

*/

// querySelectorAll() will return an array that has method for Array built-in
let odd = document.querySelectorAll('li:nth-child(odd)')
odd.forEach((item, index, array) => {
    item.style.color = 'yellow'
 })
let even = document.querySelectorAll('li:nth-child(even)')
even.forEach((item) => {
    item.style.color = 'black'
    item.style.backgroundColor = '#f5f5f5'
})

 let lastItem = document.querySelector('.insert-card-list-item:last-child')
 lastItem.style.color = 'blue'

 // https://stackoverflow.com/questions/290215/difference-between-input-type-button-and-input-type-submit
 // https://html.com/attributes/button-type/#:~:text=a%20button%20explicitly.-,Difference%20between%20and%20%3C,it%20is%20a%20null%20element).
 // https://davidwalsh.name/html5-buttons 

 let submit = document.querySelector('button[type="button"]')
 submit.innerHTML = 'HOOI'
 submit.style.backgroundColor = 'red'
 submit.style.color = 'yellow'

 // traversing the DOM
let itemList = document.querySelector('#item-list')
itemList.parentNode.parentNode.style.backgroundColor = '#d5d5d5'
itemList.parentNode.parentNode.style.margin = '.62REM'
itemList.style.margin = '0'
itemList.style.padding = '.31REM'
console.log(itemList)
console.log(itemList.parentNode.parentNode)
// childnodes include spacing or line breaks etc
console.log(itemList.childNodes)
// better use children
console.log(itemList.children)
console.log(itemList.children[1].style.backgroundColor = 'green')
console.log(itemList.firstChild) // don't use this - child node
console.log(itemList.firstElementChild) // use this

// siblings
console.log(itemList.nextSibling) // don't use this, it return a node
console.log(itemList.nextElementSibling) // yess use this
console.log(itemList.previousElementSibling) // yess use this

// create elements and insert them

let newDiv = document.createElement('div')
// add css class
newDiv.className = 'hello'

// add id
newDiv.id = 'hello-id'


// add attribute
newDiv.setAttribute('title', 'hello-attr')

let span = document.createElement('span')
let span2 = document.createElement('span')
let spanText = document.createTextNode('this is a new text using insertBefore')
let spanText2 = document.createTextNode('this is a new text using appendChild')
span.appendChild(spanText)
span2.appendChild(spanText2)

newDiv.appendChild(span)

console.log(newDiv)
console.log(span)

let container = document.querySelector('.insert-card-input')

container.insertBefore(newDiv, container.children[0])

container.appendChild(document.createElement('div')).appendChild(span2)

// event 
let btn =  document.querySelector('#btn-id')
console.log(btn)

btn.style.backgroundColor = 'black'
btn.style.color = 'white'
btn.style.fontWeight = '500'
btn.style.padding = '.62REM'
btn.addEventListener('click', buttonClick);

function buttonClick(e) {
    console.log(e)
    console.log(e.type)
    console.log(e.target.id)
    // console.log(e.target.className)
    // console.log(e.target.classList)
    // console.log(e.offsetX)
    // console.log(e.offsetY)
    // console.log(e.clientX)
    // console.log(e.clientY)
    // console.log(e.altKey)
    // console.log(e.ctrlKey)
    // console.log(e.shiftKey)
}

function runEvents(e) {
    console.log('EVENT TYPE: ' + e.type)
    if (e.type == 'click') {
        addItem()
    }
}

function addItem(e) {
    let li = document.createElement('li')
        li.className = 'insert-card-list-item'
        li.style.display = 'flex'
        let btnDelete = document.createElement('button')
        btnDelete.className = 'btn-delete'
        btnDelete.type = 'button'
        btnDelete.style.backgroundColor = '#8b0000'
        btnDelete.style.color = '#fff'
        btnDelete.addEventListener('click', deleteItem)
       // let btnDeleteText = document.createElement('innerHTML')
        btnDelete.innerHTML = 'DELETE'
        btnDelete.style.alignSelf = 'flex-end'
        liSpan = document.createElement('span')
        liSpan.innerHTML = 'Item to be deleted'
        liSpan.style.width = '100%'
        li.appendChild(liSpan)
        li.appendChild(btnDelete)
        itemList.appendChild(li)
}

function deleteItem(e) {
    console.log(e.target)
    if (e.target.classList.contains('btn-delete')) {
        if (confirm('are you sure to delete?')) {
            let liDeletion = e.target.parentElement
            itemList.removeChild(liDeletion)
        }
    }
}

// https://stackoverflow.com/questions/11845678/adding-multiple-event-listeners-to-one-element 

btn.addEventListener('click', runEvents)
btn.addEventListener('doubleclick', runEvents)
btn.addEventListener('mousedown', runEvents)

/*
 other events:
    form input
        - cut paste focus 
        - blur(when get out from the input field)
        - input(when typing)
    form select
        - change(after selection)
        - input(when selecting)
    form
        - submit
        - use e.preventDefault() // this will eliminate default event attached to the form


*/

// add item and delete button

