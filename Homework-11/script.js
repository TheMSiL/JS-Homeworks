const products = [
  {
    name: "Iphone 12",
    brand: "Apple",
    price: 3200000,
    properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
  },
  {
    name: "Galaxy S20 Ultra",
    brand: "Samsung",
    price: 2900000,
    properties: ["120 hz screen", "Water resistance"],
  },
  {
    name: "MI 9",
    brand: "Xiaomi",
    price: 1300000,
    properties: ["Best price", "Pay less - get more!"],
  },
];



const renderProductCards = (arr) => {
  
  arr.forEach(item => {
    const phoneName = document.createElement ('h2');
    phoneName.innerText = item.name;
    document.body.append(phoneName);
    
    const phoneBrand = document.createElement('h3');
    phoneBrand.innerText = item.brand;
    document.body.append(phoneBrand);
    
    let propertiesList = document.createElement('ul');
    item.properties.forEach(arg => {
        const phoneArg = document.createElement ('li');
        phoneArg.innerText = arg;
        propertiesList.append(phoneArg);
      })
      document.body.append(propertiesList);
   })
    
    
}

renderProductCards(products); 










// let firstH3 = document.createElement('h3');
//     firstH3.innerText = arr[0].name;
//     document.body.prepend(firstH3);

//     let firsth4 = document.createElement('h4');
//     firsth4.innerText = arr[0].brand;
//     firstH3.insertAdjacentElement('afterend',firsth4);
    
//     let firstUl = document.createElement('ul');
//     firstUl.innerHTML = `<li> ${arr[0].properties[0]} </li> <li> ${arr[0].properties[1]} </li> <li> ${arr[0].properties[2]} </li> `;
//     firsth4.insertAdjacentElement('afterend',firstUl);

//     let secondH3 = document.createElement('h3');
//     secondH3.innerText = arr[1].name;
//     firstUl.insertAdjacentElement('afterend', secondH3);

//     let secondh4 = document.createElement('h4');
//     secondh4.innerText = arr[1].brand;
//     secondH3.insertAdjacentElement('afterend',secondh4);
    
//     let secondUl = document.createElement('ul');
//     secondUl.innerHTML = `<li> ${arr[1].properties[0]} </li> <li> ${arr[1].properties[1]} </li> `;
//     secondh4.insertAdjacentElement('afterend', secondUl);
    
//     let thirdH3 = document.createElement('h3');
//     thirdH3.innerText = arr[2].name;
//     secondUl.insertAdjacentElement('afterend',thirdH3);

//     let thirdh4 = document.createElement('h4');
//     thirdh4.innerText = arr[2].brand;
//     thirdH3.insertAdjacentElement('afterend',thirdh4);
    
//     let thirdUl = document.createElement('ul');
//     thirdUl.innerHTML = `<li> ${arr[2].properties[0]} </li> <li> ${arr[2].properties[1]} </li>`;
//     thirdh4.insertAdjacentElement('afterend',thirdUl);