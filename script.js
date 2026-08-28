const bg = new Audio('assets/duvet.m4a')
function music(){
    bg.pause()
    bg.volume = 0.1;
    bg.play();
}
music(); 