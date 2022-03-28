
//Selezione il div con classe numbers
let elementNumbers = document.querySelector(".numbers")

//Inizializzo il ciclo FOR per il conteggio numerico
for (let i = 1; i <= 100; i++) {
    let markupLi;
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + "Multiplo di 3 e 5");
        markupLi = `
            <div class="number fizz_buzz d-flex justify-content-center align-items-center">
                 <div>fizzbuzz</div>
            </div>`
        elementNumbers.innerHTML += markupLi;

    } else if (i % 5 == 0) {
        console.log(i + "Multiplo 5");
        markupLi = `
            <div class="number buzz d-flex justify-content-center align-items-center">
                 <div>buzz</div>
            </div>`
        elementNumbers.innerHTML += markupLi;

    } else if (i % 3 == 0) {
        console.log(i + "Multiplo 3");
        markupLi = `
            <div class="number fizz d-flex justify-content-center align-items-center">
                 <div>fizz</div>
            </div>`
        elementNumbers.innerHTML += markupLi;
    } else {
        console.log(i);
        markupLi = `
    <div class="number d-flex justify-content-center align-items-center">
        <div>${i}</div>
    </div>`

        elementNumbers.innerHTML += markupLi;
    }




}

//Calcoliamo il mnultiplo di 3

