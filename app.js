let counter = document.querySelector('.number')
const reduce = document.querySelector('#lowCount')
const increase = document.querySelector('#upCount')
const reset = document.querySelector('#reset')


let count = 0;

const rdcnb = ()=>{
    count--;
    counter.innerHTML= count;
    if (count < 0) {
        counter.style.color= 'red'
    }
        else if (count === 0) {
         counter.style.color= 'white'
    }
    counter.animate([{opacity:'0.3'},{opacity:'2.0'}],{duration:500, fill:'forwards'});
}

reduce.addEventListener('click', rdcnb)



const adcnb = ()=>{
    count++;
    counter.innerHTML= count;
     if (count > 0) {
        counter.style.color= 'green'
    }
    else if (count === 0) {
         counter.style.color= 'white'
    }
}
increase.addEventListener('click', adcnb)

// const resetBtn = ()=>{
    
//     counter.reset()
//         counter.style.color= 'white'
        
    
//     counter.animate([{opacity:'0.3'},{opacity:'2.0'}],{duration:500, fill:'forwards'});
    
// }

// reset.addEventListener('click', resetBtn)