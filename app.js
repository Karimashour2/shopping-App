

// getting all products
let getAll= async (url)=>{
  let res = await fetch(url);
  let data = await res.json();
  console.log(data.products)
let productsEl= document.querySelector('.products-list');
productsEl.innerHTML = '';
  for(let i=0; i<data.limit; i++){
    // create parent div for one product
    let product= document.createElement('div');
    product.className= `product-card product${data.products[i].id}`;

    // inserting it to the parent of all products
    productsEl.appendChild(product);
    // create the title of the product
    let titleEl= document.createElement('p');
    titleEl.innerHTML= data.products[i].title;
    titleEl.className= 'title'
    product.appendChild(titleEl);
    // create the picture 
    let picEl= document.createElement('img');
    picEl.src= data.products[i].thumbnail
    product.appendChild(picEl);
    // create the description 
    let descEl= document.createElement('p');
    descEl.innerHTML= data.products[i].description;
    descEl.className= 'desc'
    product.appendChild(descEl);
    // create the price 
    let priceEl= document.createElement('p');
    priceEl.innerHTML= `${data.products[i].price} $`;
    priceEl.className= 'price'
    product.appendChild(priceEl);
  }
  let product= document.createElement('div');
  product.className= `empty-card`;
  // inserting it to the parent of all products
  productsEl.appendChild(product);
  product= document.createElement('div');
  product.className= `empty-card`;

  productsEl.appendChild(product);
  product= document.createElement('div');
  product.className= `empty-card`;
  productsEl.appendChild(product);
  product= document.createElement('div');
  product.className= `empty-card`;
  productsEl.appendChild(product);
}

getAll('https://dummyjson.com/products')
let searchEl= document.querySelector('input')

searchEl.addEventListener('input', (e)=> {
  if(e.target.value===''){
    getAll('https://dummyjson.com/products')
  }else{
    getAll(`https://dummyjson.com/products/search?q=${e.target.value}`);
  
  }
  
}
)

