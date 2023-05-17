fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => getData(json))

function getData({products}) {
    document.body.insertAdjacentHTML('afterbegin', `
    <div class="wrapper">${getPhones(products)}</div>
    `)
}

function getPhones(products) {

    return products.map(phone => (`
    <div>
    <h3>Title: ${phone.title}</h3>
    <h3>Brand: ${phone.brand}</h3>
    <h3>Category: ${phone.category}</h3>
    <h3>Description: ${phone.description}</h3>
    <h3>Price: ${phone.price}</h3>
    </div>
    `
    ))
}


