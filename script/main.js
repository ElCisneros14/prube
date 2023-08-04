function generateCards(events) {
    let body ="";
    
    const cardEvents = document.getElementById("cards")

    let cards = events.events.map(eventi => {
        body += `
            <div class="col">
                <div class="card h-100 shadow">
                <p class="card-price position-absolute top-0 start-0 fw-bold card-text m-3 p-2 bg-light rounded-3">$${evento.price}</p>
                    <img src="${eventi.image}" class="card-img p-2" alt="...">
                    <div class="card-body pt-1">
                        <h5 class="card-title text-center pb-2 border-bottom">${eventi.name}</h5>
                        <p class="card-text">${eventi.description}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-end">
                        <a href="./details.html" class="btn card-btn btn-primary">More Details</a>
                    </div>
                </div>
            </div>
        `;
    })
    cardEvents.innerHTML = body;
}