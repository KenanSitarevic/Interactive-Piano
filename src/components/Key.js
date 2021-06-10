//import useSound from 'use-sound';
//import Soundfont from 'soundfont-player'


const Key = ({name, note}) => {
    function sound(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function(){
          this.sound.play();
        }
        this.stop = function(){
          this.sound.pause();
        }
      }
    function playSound(){
        var mySound = new sound(note);
        mySound.play();
      }
    
    return (
        <li className={name}
            onClick={playSound}
            ></li>
            
    )
}

export default Key



/*const [playOff] = useSound(
        '../sounds/c.mp3',
        { volume: 0.25 },
        alert('c')
      );*/