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




function resetSeatText(id, value){
    document.getElementById(id).innerText = value;
}

const resetSeat = document.getElementsByClassName('seat-btn');
let available = 8;

for (const seat of resetSeat){
    seat.addEventListener('click', function(e){
        available = available-1;
        document.getElementById('available').innerText = available;
    })
}
