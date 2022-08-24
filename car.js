let audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3'); 
audio.loop=true;
audio.play();


setInterval(() => {
    let hour1=document.querySelector("#hour");
    let minute1=document.querySelector("#minute");
    let second1=document.querySelector("#second");
    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();
    let hrotation = 30*htime + mtime/2 + stime/120;                 // formula derived from logic written in notebook
    let mrotation = 6*mtime + stime/10;
    let srotation = 6*stime;

    hour1.style.transform = `rotate(${hrotation}deg)`;
    minute1.style.transform = `rotate(${mrotation}deg)`;
    second1.style.transform = `rotate(${srotation}deg)`;
}, 1000);
