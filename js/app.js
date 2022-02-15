// calling function
getEvent('eightGB','memory-cost', 0);
getEvent('sixteenGB','memory-cost', 200);
getEvent('ssd1','storage-cost',0);
getEvent('ssd2','storage-cost',100);
getEvent('ssd3','storage-cost',200);
getEvent('paid-delivery','delivery-cost',20);
getEvent('free-delivery','delivery-cost',0);
// click event handler

function getEvent(eventId, costId, price){
    document.getElementById(eventId).addEventListener('click',function(){
        const cost = document.getElementById(costId);
        cost.innerText = price;
        getTotal()
    });
}

// total function 
function getTotal(){
    const mainPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const total = parseFloat(mainPrice) +parseFloat(memoryCost)+
    parseFloat(storageCost)+parseFloat(deliveryCost);
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = total;
}
// style function
// =========style==================================
// defaultStyle function calling
getDefaultStyle('eightGB');
getDefaultStyle('free-delivery')
getDefaultStyle('ssd1')

// default style function 
function getDefaultStyle(event){
    const defaultStyle = document.getElementById(event);
    defaultStyle.style.backgroundColor = '#6495ED';
    defaultStyle.style.color = '#fff';

}
//  set style function calling 
getStyle('sixteenGB','eightGB');
getStyle('eightGB','sixteenGB');
getStyle('paid-delivery','free-delivery');
getStyle('free-delivery','paid-delivery');
//  set style function
function getStyle(styleId1 , styleId2){
    const firstStyle = document.getElementById(styleId1);
    const secondStyle = document.getElementById(styleId2);
    firstStyle.addEventListener('click',function(){
        // set style memorySpace2 
        firstStyle.style.backgroundColor = '#6495ED';
        firstStyle.style.color = '#FFF';
        // reset style memorySpace1
        secondStyle.style.backgroundColor = '#fff';
        secondStyle.style.color = '#000';
    });
    
}
//storage calling function 

getStorageStyle('ssd1', 'ssd2','ssd3');
getStorageStyle('ssd2', 'ssd1','ssd3');
getStorageStyle('ssd2', 'ssd3','ssd1');
// storage style
function getStorageStyle(storage1, storage2,storage3){
    const ssd1 = document.getElementById(storage1);
    const ssd2 = document.getElementById(storage2);
    const ssd3 = document.getElementById(storage3);
    ssd2.addEventListener('click',function(){
        // set color 
        ssd2.style.backgroundColor = '#6495ED';
        ssd2.style.color = '#fff';
        // reset color 
        ssd1.style.backgroundColor = '#fff';
        ssd1.style.color = '#000';
        // reset color 
        ssd3.style.backgroundColor = '#fff';
        ssd3.style.color = '#000';
    });
}
// discount tags 
const promoCode = 'SHANTO'
document.getElementById('apply-btn').addEventListener('click',function(){
    const input = document.getElementById('promo-input');
    const success = document.getElementById('applied-text');
    const error = document.getElementById('error');
    const codeValue =input.value;
    if(codeValue == 'SHANTO'){
        const total = document.getElementById('total-price');
        const totalAmount = parseFloat(total.innerText);
        const tax = (totalAmount *20)/100;
        const totalCost = totalAmount - tax;
        total.innerText =totalCost.toFixed(2);
        success.style.display = 'block'
        error.style.display = 'none'
        input.style.border = '2px solid green';
        input.value = '';
        document.getElementById('apply-btn').setAttribute('disabled', true);
    }else{
        input.style.border = '2px solid red';
        error.style.display = 'block';
        success.style.display = 'none';
    }
});