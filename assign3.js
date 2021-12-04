


//Create a currency converter function from taka to USD, CAD, POUND, EURO etc

let currency = prompt(`Currency Name`);
let amount   = parseInt(prompt(`Currency Amount`)); 

let currAmt = (currency, amount) =>{

    if( currency == 'USD'){
        return `${currency} ${amount} = ${ amount * 86} taka`;
    }else if(currency == 'CAD'){
        return `${currency} ${amount} = ${amount * 95} taka`
    }else if(currency == 'POUND'){
        return `${currency} ${amount} = ${amount * 105} taka`
    }else if(currency == 'EURO'){
        return `${currency} ${amount} = ${amount * 88} taka`
    }
}
console.log(currAmt(currency, amount));