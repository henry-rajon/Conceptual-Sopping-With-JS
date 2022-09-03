
const cartArr = [];

function display(cartProduct) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = "";
    let totalPrice = 0;
    for (let i = 0; i < cartProduct.length; i++){
        // console.log(cartProduct[i].productName, cartProduct[i].productPrice);
        const name = cartProduct[i].productName;
        const price = cartProduct[i].productPrice;

        totalPrice = totalPrice + price;

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i+1}</th>
        <td>${name}</td>
        <td>${price}</td>
    `;
        tableBody.appendChild(tr);
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <th></th>
        <th class="text-base">Total</th>
        <th class="text-base">${totalPrice}</th>
    `;
    tableBody.appendChild(tr);
}

function productsAdd(element) {
    // console.log(element.parentNode.parentNode.children[0].innerText);
    // console.log(element.parentNode.parentNode.children[1].children[0].innerText);

    const productName = element.parentNode.parentNode.children[0].innerText;
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;

    // console.log(productName)
    // console.log(productPrice)

    const productObj = {
        productName: productName,
        productPrice: parseFloat(productPrice)
    }
    cartArr.push(productObj);
    const cartNumber = cartArr.length;
    document.getElementById('product-added-number').innerText = cartNumber;

    display(cartArr);
}