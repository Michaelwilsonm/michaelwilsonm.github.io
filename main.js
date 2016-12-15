window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
})

function introSong(){
  const intro = document.querySelector("audio[data-key=intro]");
  intro.play()
}


const secondsDiv = document.querySelector('.seconds')
const hoursDiv = document.querySelector('.hours')
const minutesDiv = document.querySelector('.minutes')

function getDate(){
  const date = new Date()
  const seconds = date.getSeconds()
  const minutes = date.getMinutes()
  const hours = date.getHours()
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const hoursDegrees = ((hours / 24) * 360) + 90;
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondsDiv.style.transform = "rotate(" + secondsDegrees + "deg)"
  minutesDiv.style.transform = "rotate(" + minutesDegrees + "deg)"
  hoursDiv.style.transform = "rotate(" + hoursDegrees + "deg)"
}
getDate()
setInterval(getDate, 1000);