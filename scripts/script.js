const form = document.querySelector('#form')
const price = document.querySelector('#price')
const title = document.querySelector('#title')
var list = document.querySelector('#list')

const add = (event) => {
    event.preventDefault()

    let TitleInput = title.value
    let PriceValue = price.value

    if(TitleInput.trim().length === 0||
    PriceValue.trim().length === 0){
        console.log('Error!')
        return
    }
    console.log({ 
        title : TitleInput,
        price : PriceValue})

    let li = document.createElement('li')
    let text = document.createTextNode(`${TitleInput} - ${PriceValue}`)
    li.appendChild(text)
    list.appendChild(li)

    title.value = ''
    price.value = ''
} 

form.addEventListener('submit', add)