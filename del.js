

/*
let vegadultspay = 0;
let vegkidspay = 0;
let nonvegadultspay = 0;
let nonvegkidspay = 0;
let totalpay = 0;
let familycount = 0;
let discount = 0;
paywithoutGST = 0;
gst = 0;
paywithGST = 0;
function final(){
    event.preventDefault();
    // console.log(`veg kids ${vegadults}`);
    // console.log(`veg kids ${vegkids}`);
    // console.log(`veg kids ${nonvegadults}`);
    // console.log(`veg kids ${nonvegkids}`);

    console.log(`veg kids ${vegadults.value}`);
    console.log(`veg kids ${vegkids.value}`);
    console.log(`veg kids ${nonvegadults.value}`);
    console.log(`veg kids ${nonvegkids.value}`);
    console.log(parking.value);
// console.log(parseInt(veg.value) * 599);
vegadultspay = (parseInt(vegadults.value)*599)
console.log(vegadultspay);

vegkidspay = (parseInt(vegkids.value)*249)
console.log(vegkidspay);

nonvegadultspay = (parseInt(nonvegadults.value)*699)
console.log(nonvegadultspay);

nonvegkidspay = (parseInt(nonvegkids.value)*349)
console.log(nonvegkidspay);

totalpay = vegadultspay + vegkidspay  +  nonvegadultspay  + nonvegkidspay
console.log(totalpay);

// familycount =  vegadults.value+  vegkids.value + nonvegadults.value +  nonvegkids.value
// console.log(familycount)

familycount = (parseInt (vegadults.value) + parseInt ( vegkids.value) + parseInt (nonvegadults.value) + parseInt ( nonvegkids.value) )
console.log(familycount);
 if(familycount>10){
    discount = (totalpay*10)/100
    console.log(discount);
 } 

paywithoutGST = totalpay - discount;
console.log(paywithoutGST);

gst = (paywithoutGST*12)/100;
console.log(gst);

paywithGST = paywithoutGST - gst;
// toFixed(2) is used to get decimal values up to 2
console.log(paywithGST.toFixed(2));
} */


// final output

const vegadults = document.querySelector('#va')
const vegkids = document.querySelector('#vk')
const nonvegadults = document.querySelector('#nva')
const nonvegkids = document.getElementById('nvk')
const parking = document.getElementById('park')
const name1 = document.getElementById('name')
const ans = document.getElementById('answer')


function totalamountpay()
{
    vegadultspay = (parseInt(vegadults.value)*599)
console.log(vegadultspay);

vegkidspay = (parseInt(vegkids.value)*249)
console.log(vegkidspay);

nonvegadultspay = (parseInt(nonvegadults.value)*699)
console.log(nonvegadultspay);

nonvegkidspay = (parseInt(nonvegkids.value)*349)
console.log(nonvegkidspay);

totalpay = vegadultspay + vegkidspay  +  nonvegadultspay  + nonvegkidspay
console.log(totalpay);

return totalpay;

}

function discountgiven(totalpay) {

    familycount = (parseInt (vegadults.value) + parseInt ( vegkids.value) + parseInt (nonvegadults.value) + parseInt ( nonvegkids.value) )
console.log(familycount);
 if(familycount>10){
    discount = (totalpay*10)/100
    console.log(discount);
    return discount;
 } 
 else {
    return 0;
 }

}

function gstaddad(paywithoutGST){
    gst = (paywithoutGST*12)/100;
console.log(gst);
return gst;
}

function final(){
       event.preventDefault();

    a = totalamountpay();
    b = discountgiven(a);

    paywithoutGST = a-b
    c = gstaddad(paywithoutGST);

    pay = (paywithoutGST + c).toFixed(2)

    if(parking.checked==true){
        parking.value = 10;
    }


ans.innerHTML = `Hi ${name1.value} <br/>
                Total payable amount is ₹ ${a}  <br/>
                 You are getting discount because total members are more than 10 of ₹ ${b} <br/>
                 Payable amount without GST ₹ ${paywithoutGST}  <br/>
                 GST added in your bill is ₹ ${c}  <br/>
                 Now, you have to pay with GST ₹ ${pay}  <br/>
                 And if you have your vehicle than pay pakring charges seperately of ₹ ${parking.value} `
}