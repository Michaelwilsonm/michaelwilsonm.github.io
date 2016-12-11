window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
})





function introSong(){
  const intro = document.querySelector("audio[data-key=intro]")
  intro.play()
}