function playSound(note) {
    var audio = document.getElementById("note" + note);
    audio.currentTime = 0;
    audio.play();
}