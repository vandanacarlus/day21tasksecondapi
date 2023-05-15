fetch("https://fakestoreapi.com/products")
.then((data)=>{
    console.log(data)
    return data.json()})
    .then((completedT)=>{
        let data1="";
        completedT.map((values)=>{
            data1+=` <div class = "card">
            <h1 class="title">${values.title}</h1>
           <img src=${values.image}  alt="image" class = "images">
        <p> ${values.description}</p>
    <p class="category">${values.category}</p>
<p class="price">${values.prices}</p>    </div>`
        })

        document.getElementById("cards").innerHTML=data1
    })
    .catch((err)=>{console.log(err)})

