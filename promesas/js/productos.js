const divProductos = document.getElementById("divProductos");
const alertError = document.getElementById("alertError");
const URLMAIN = "https://fakestoreapi.com/products";

function getData() {
    fetch(URLMAIN)
        .then((response) => {
            console.log(response);
            return response.json(); // Devuelve la promesa para trabajar con `res` directamente
        })
        .then((res) => {
            createCards(res);
        })
        .catch((err) => {
            alertError.innerText = `Problema para traer la información: ${err}`;
            alertError.style.display = "block";
        });
}

function createCards(res) {
    console.log(res);

    res.forEach((item) => {
        divProductos.insertAdjacentHTML(
            "beforeend",
            `<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${item.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.description}</p>
        <p class="card-text"><small class="text-muted">${item.price}</small></p>
      </div>
    </div>
  </div>
</div>`
        );
    });
}

// Llamar a la función para cargar los datos
getData();





