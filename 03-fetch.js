const resp = fetch('https://reqres.in/api/users?page=1');

resp.then(response => response.json())
.then((json)=>{
    let content = document.getElementById('container');
    let htmlX = '';
    json.data.forEach(element =>{
        console.log(element);

        let htmlCard = `<div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${element.id}</h5>
                                <p>Nombre: ${element.first_name}</p>
                                <p>Apellido: ${element.last_name}</p>
                                <p>E-mail: ${element.email}</p>
                                <a href="#" class="btn btn-primary" onclick="showModal(${element.id})" value="">Detalles</a>
                            </div>
                        </div>`;
    htmlX = htmlX+htmlCard;
    });
    content.innerHTML=htmlX;
})

function showModal(id) {
  const myModal = new bootstrap.Modal("#showUser");
  const resp = fetch(new URL(id, "https://reqres.in/api/users/"));
  let content = document.getElementById("Modalbody");
  let htmlX = ``;
  resp
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json.data);
      let htmlmodal = `
            <div class="modal-body">
                <img  src="${json.data.avatar}">
                <p>${json.data.id}</p>
                <p>Nombre: ${json.data.first_name}</p>
                <p>Apellido: ${json.data.last_name}</p>
                <p>E-mail: ${json.data.email}</p>
            </div> `;
      htmlX = htmlX + htmlmodal;
      myModal.show();
      content.innerHTML = htmlX;
    });
}


