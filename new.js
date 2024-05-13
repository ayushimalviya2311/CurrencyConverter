const base_URL = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_rtLhdAjRmmKaHWDBlz9rx0H1WAoHiHmvfnn2d8Bx&currencies=INR&base_currency=USD`
const dropdown =   document.querySelectorAll(".dropdown select");

for (code in countrylist1) {
    // console.log(code, countrylist1[code]);
};

for(let select of dropdown){
    for(currcode in countrylist1){
       let newoption = document.createElement("option");
       newoption.innerText =  currcode;
       newoption.value = currcode;
       select.append(newoption);
    }

    select.addEventListener("change",(ele) => {
        updateFlag(ele.target);
    });
}

const fromcurr = document.querySelector(".from select");
const tocurr   = document.querySelector(".to select")   

const updateFlag = (ele) => {
    console.log(ele.value);
    // Define the fromFlagSrc variable
    const fromFlagSrc = `https://flagsapi.com/${countrylist1[ele.value]}/flat/64.png`

    // Set the src attribute of the img tag
    let img = ele.parentElement.querySelector("img").src = fromFlagSrc;
    
};
const msg = document.querySelector(".msg");
const btn = document.querySelector("form button");
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector("form input");
    let amtval = amount.value;
    // console.log(amtval);

 console.log(fromcurr.value, tocurr.value);
 let URL1 =`https://v6.exchangerate-api.com/v6/a0acb753b525b8819ce45e0e/latest/${fromcurr.value}`

let response = await fetch(URL1);
let data = await response.json();
console.log(data['conversion_rates'][tocurr.value]);
// console.log(data['conversion_rates']);

let rate = data['conversion_rates'][tocurr.value];
console.log(rate);
let finalamt = parseInt(amtval) * rate;
console.log(amtval);
console.log(finalamt);
msg.innerText = `${amtval} ${fromcurr.value} = ${finalamt} ${tocurr.value};
`

});
