const bg = new Audio('assets/duvet.m4a')
bg.volume = 0.1;
bg.play();
function music(){
    bg.pause();
    bg.volume = 0.1;
    bg.play();
    const element = document.querySelector('.music');
    element.remove();
}


const hoverSound = new Audio('/assets/tik.wav');
hoverSound.volume = 1;

function hover(){
  hoverSound.pause()
  hoverSound.currentTime = 0;
  hoverSound.play()
}

document.querySelectorAll('.hey').forEach(element => {
  element.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play().catch(() => {});
  });
});


const birthDate = '2009-10-24';
const diffMs = Date.now() - new Date(birthDate).getTime();
const ageDate = new Date(diffMs);
const age = Math.abs(ageDate.getUTCFullYear() - 1970);

document.getElementById('year').textContent = age;




