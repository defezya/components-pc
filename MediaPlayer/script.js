const player = document.getElementById('videoPlayer');
const playPauseButton = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');
const volumeControl = document.getElementById('volumeControl');

playPauseButton.addEventListener('click', () => {
    if(player.paused || player.ended){
        player.play();
        playPauseButton.firstChild.src = 'img/pause.png';
    } else{
        player.pause();
        playPauseButton.firstChild.src = 'img/play.png';
    }
});

player.addEventListener('timeupdate', () => {
    const percentage = Math.floor((player.currentTime / player.duration) * 100);
    progressBar.value = percentage;
    let minutes = Math.floor(player.currentTime / 60);
    let seconds = Math.floor(player.currentTime % 60);
    currentTimeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2,'0')}`;
    if (!isNaN(player.duration)) {
        let totalMinutes = Math.floor(player.duration / 60);
        let totalSeconds = Math.floor(player.duration % 60);
        durationDisplay.textContent = `${totalMinutes}:${totalSeconds.toString().padStart(2,'0')}`;
    }
});
progressBar.addEventListener('change', () => {
    const seekTo = player.duration * (progressBar.value / 100);
    player.currentTime = seekTo;
});
volumeControl.addEventListener('change', () => {
    player.volume = volumeControl.value;
});