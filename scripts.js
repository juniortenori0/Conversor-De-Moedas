const convertButton = document.querySelector("#convert-button")
const currencySelect = document.querySelector(".currency-select")



function convertValue() {

    const inputCurrencyvalue = document.querySelector(".input-currency").value;

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

    const currencyValueConverted = document.querySelector(".currency-value")


    const dollarValue = 5.35
    const euroValue = 6.03
    const libraValue = 7.21
    const bitcoinValue = 422.674
 

    if(currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyvalue / dollarValue)

    }

    if(currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyvalue / euroValue)
}

    if(currencySelect.value === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyvalue / libraValue)
}

    if(currencySelect.value === "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC"
    }).format(inputCurrencyvalue / bitcoinValue)
}

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyvalue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if(currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/eua.png"
    }

    if(currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if(currencySelect.value === "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImg.src = "./assets/libra.png"
    }

    if(currencySelect.value === "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    convertValue()


}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValue) 