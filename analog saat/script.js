const hourBar1 = document.querySelector('.hourTr')
const minutesBar1 = document.querySelector('.minutesTr')
const secondsBar1 = document.querySelector('.secondsTr')

function turkiye(){
        let date = new Date()
        let hour = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        secondsBar1.style.transform = `rotate(${180 + (seconds * 6)}deg)`
        minutesBar1.style.transform = `rotate(${180 + (minutes * 6)}deg)`
        hourBar1.style.transform = `rotate(${180 + (hour * 30)}deg)`
}
setInterval(turkiye, 1000)

const hourBar2 = document.querySelector('.hourGb')
const minutesBar2 = document.querySelector('.minutesGb')
const secondsBar2 = document.querySelector('.secondsGb')

function londra(){
        let date = new Date()
        let hour = date.getHours() - 3
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        secondsBar2.style.transform = `rotate(${180 + (seconds * 6)}deg)`
        minutesBar2.style.transform = `rotate(${180 + (minutes * 6)}deg)`
        hourBar2.style.transform = `rotate(${180 + (hour * 30)}deg)`
}
setInterval(londra, 1000)

const hourBar3 = document.querySelector('.hourJp')
const minutesBar3 = document.querySelector('.minutesJp')
const secondsBar3 = document.querySelector('.secondsJp')

function tokyo(){
        let date = new Date()
        let hour = date.getHours() + 6
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        secondsBar3.style.transform = `rotate(${180 + (seconds * 6)}deg)`
        minutesBar3.style.transform = `rotate(${180 + (minutes * 6)}deg)`
        hourBar3.style.transform = `rotate(${180 + (hour * 30)}deg)`
}
setInterval(tokyo, 1000)