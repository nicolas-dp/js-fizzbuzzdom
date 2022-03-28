
//Selezione il div con classe numbers
const elementNumbers = document.querySelector(".numbers")

//Inizializzo il ciclo FOR per il conteggio numerico
for (let i = 1; i <= 100; i++) {
    console.log(i);
    const markupLi = `
    <div class="number d-flex justify-content-center align-items-center">
        <div>${i}</div>
    </div>`

    elementNumbers.innerHTML += markupLi;

    if (i % 3 == 0) {
        console.log(i);
        const markupLi = `
        <div class="number fizz d-flex justify-content-center align-items-center">
            <div>Fizz</div>
        </div>`

        elementNumbers.innerHTML += markupLi;
    }


}

//Calcoliamo il mnultiplo di 3

