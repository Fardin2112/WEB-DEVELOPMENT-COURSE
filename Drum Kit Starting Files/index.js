var numberOfDrums = document.querySelectorAll(".drum").length;

// detecting button press by touch
  for(var i = 0 ; i < numberOfDrums; i++){
     document.querySelectorAll(".drum")[i].addEventListener("click",function () {
     
      var innerButton = this.innerHTML  // this is used to know addeventlistener clicked

  })
}
// detecting button press by key
  document.addEventListener("keydown",function(event){

    makeSound(event.key); // by event.key i know which key pressed
  });
  function makeSound(key){
    switch (key) {
      case "w":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play()
        break;
      case "a":
          var audio = new Audio('./sounds/tom-2.mp3');
          audio.play()
        break;  
      case "s":
        var audio = new Audio('./sounds/tom-3.mp3');
        audio.play()
        break; 
      case "d":
          var audio = new Audio('./sounds/tom-4.mp3');
          audio.play()
        break;
      case "j":
          var audio = new Audio('./sounds/crash.mp3');
          audio.play()
        break;   
      case "k":
          var audio = new Audio('./sounds/kick-bass.mp3');
          audio.play()
        break; 
      case "l":
          var audio = new Audio('./sounds/snare.mp3');
          audio.play()
        break;   
     
      default:
        console.log(this.innerHTML);
        break;
     }
  }


