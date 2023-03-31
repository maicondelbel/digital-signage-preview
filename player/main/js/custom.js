var video = document.getElementById("player");
var loading = document.getElementById("loading");

function playVideo() {
  video.play();
  loading.style.display = "none";
}

setTimeout(playVideo, 3000);