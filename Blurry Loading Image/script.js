const background = document.querySelector('.bg')
const loadText = document.querySelector('.loading-text')

let loading = 0;

let int =setInterval(blurring,30)

function blurring(){
    loading++

    if(loading > 99){
        clearInterval(int)
    }
    console.log(loading)

    loadText.innerText =`${loading}%`
    loadText.style.opacity = scale(loading,0,100,1,0)
    background.style.filter =`blur(${scale(loading,0,100,30,0)}px)`
 
}

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}