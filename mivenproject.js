const block = document.getElementById("video")

function onVideoEnd() {
    console.log("영상 끝남")
  }
  
  video.addEventListener("ended",onVideoEnd)