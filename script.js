var data = {};

async function obtenerDatos() {
    try {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        const response = await fetch("https://dragonball-api.com/api/characters?limit=100", 
            requestOptions);
        if (!response.ok) {
            throw new Error('Error en la petición');
        }

        data = await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

obtenerDatos();

setTimeout(() => {

    let table_header = `
        <div class="row row-cols-1 row-cols-md-4 g-4">
    `;

    let table_footer = `
        </div>
    `;

    let table_body = '';
    data.items.forEach(element => {

        table_body += `
            <main>
                <div class="col">
                    <div class="card h-100">
                        <div class="card-img">
                            <img src="${element.image}" class="card-img-top">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${element.name}</h5>
                            <p class="card-text">${element.race} - ${element.gender}</p>
                            <h6 class="card-title">Base KI</h6>
                            <p class="card-text">${element.ki}</p>
                            <h6 class="card-title">Total KI</h6>
                            <p class="card-text">${element.maxKi}</p>
                            <h6 class="card-title">Afilliation</h6>
                            <p class="card-text">${element.affiliation}</p>
                        </div>
                    </div>
                </div>
            </main>
        `;
    });

    let resultado = table_header + table_body + table_footer;

    document.getElementById("resultado").innerHTML = resultado;

}, 1000);
