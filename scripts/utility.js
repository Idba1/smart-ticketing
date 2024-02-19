/* function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#0307121A]');
    element.classList.add('bg-[#1DD100]');
} */


function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}


const allSeat = document.getElementsByClassName('seat-btn');
let count = 0;

for (const seat of allSeat){
    seat.addEventListener('click', function(e){
        count = count+1;
        document.getElementById('selected-seat').innerText = count;
    })
}

