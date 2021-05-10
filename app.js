const coutDown = () => {
    const countDate = new Date('10 May 2030 00:00:00').getTime();
    const current = new Date().getTime();
    const gap = countDate - current;
    const sec = 1000;
    const min = sec*60
    const hour = min*60
    const day = hour*24
    const countDownday = Math.floor(gap/day)
    const countDownhour = Math.floor((gap%day)/hour)
    const countDownmin = Math.floor((gap%hour)/min)
    const countDownsec = Math.floor((gap%min)/sec)
    document.querySelector('.day').innerHTML = countDownday
    document.querySelector('.hour').innerHTML = countDownhour
    document.querySelector('.min').innerHTML = countDownmin
    document.querySelector('.sec').innerHTML = countDownsec
    console.log(countDownhour);

}
 setInterval(() => {
    coutDown();
 }, 1000)