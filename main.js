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