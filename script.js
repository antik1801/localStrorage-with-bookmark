const loadProduct = () =>{
    fetch("./product.json")
    .then(res => res.json())
    .then(data => displayProducts(data));
}

const displayProducts = products =>{
    const cards = document.getElementById('cards');
    products.forEach(product => {
        // console.log(product);
        const {id,name,description,image,price,inventory} = product;
        const card = document.createElement('div');
        card.classList.add('card','m-2');
        card.innerHTML = `
        <div class="bookmark-icon">
            <i class="fa-solid fa-bookmark"></i>
            <i class="fa-regular fa-bookmark" onclick="handleBookMark('${name}','${id}','${price}')"></i>
          </div>
          <div class="product-img-container">
            <img
              class="product-img"
              src="${image? image : `./images.png`}"
              alt=""
            />
          </div>
          <h3>${name}</h3>
          <p>The Widget 3000 is the latest and greatest in widget</p>
          <div class="priceAndButtons">
            <h2 class="text-primary">$${price}</h2>
            <button class="btn btn-primary">Buy Now</button>
          </div>
        `
        cards.appendChild(card);
    });
}

// Bookmark handle function
const handleBookMark = (name,id, price) => {
    let bookMark = [];
    const product = {name,id,price,bookMark: true}
    // localStorage.setItem('bookMark', JSON.stringify(product));
    const previousBookMark = JSON.parse(localStorage.getItem('bookMark'));
    if (previousBookMark) {
        console.log('ache ache');
        
    }
    else{
        console.log('nai');
        bookMark.push(product);
        localStorage.setItem("bookMark", JSON.stringify(bookMark));
    }
}



loadProduct();