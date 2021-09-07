// shopping Cart API in JavaScript
const tableEl = document.querySelector('table')
const cardEl = document.getElementsByClassName('buy_now_btn')
// all the terget Elemment after click Add to Cart Button 
const addtoClick = (e)=>{
    let button = e.target
    let shopItem = button.parentElement.parentElement
    let title = shopItem.getElementsByClassName('card-title')[0].innerText
    let price = shopItem.getElementsByClassName('price')[0].innerText
    let imageSrc = shopItem.getElementsByClassName('card-img-top')[0].src
    addtocart(title,price,imageSrc)
}
// add to cart table 
const addtocart = (title,price,imageSrc)=>{
    let trCrRow =  document.createElement('tr')
    let cartItem = document.querySelector('tbody')
    let trContent = `<td>
                        <div class="items-iN d-flex align-self-center">
                        <img src="${imageSrc}">
                        <p class="mt-4">${title}</p>
                        </div>
                    </td>
                    <td>
                        <p class="card-text">${price}</p>
                    </td>
                    <td>
                        <div class="d-flex">
                            <input type="number">
                            <button class="btn btn-danger">Remove</button>
                        </div>
                    </td>`
    
    trCrRow.innerHTML = trContent
    cartItem.append(trCrRow)
    
}
// tergeting all Add to Cart button by for loop
for (let button of cardEl) {
    button.addEventListener('click',addtoClick)
}

// Delete Function
const onDeleteRowItem = (e)=>{
    if(!e.target.classList.contains('btn')){
        return
    }

    const btn = e.target
    btn.closest('tr').remove()
}

tableEl.addEventListener('click', onDeleteRowItem)