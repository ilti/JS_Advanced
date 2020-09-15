function timeToWalk(steps, length, speed) {
    let distance = steps*length
    let additionaMinutes = Math.floor((distance/500))*60;
    //Every 500 meters the student rests and takes a 1 minute break.
    let time = (distance/speed) *3600/1000 + additionaMinutes;

    let seconds = Math.round(time%60);
    let minutes = Math.floor(time/60);
    let hours = Math.floor(time/3600);
    hours = hours.toString().padStart(2,'0')
    minutes=minutes.toString().padStart(2,'0')
    seconds=seconds.toString().padStart(2,'0')

    console.log(`${hours}:${minutes}:${seconds}`);
    
    
    
}
timeToWalk(4000, 0.60, 5)
