const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");

const videoEl = el => {
  if (el.classList.contains.active) {
    el.pause();
    el.play()
      .then(res => {
        console.log("playing start", res);
      })
      .catch(err => {
        console.log("error playing", err);
      });
  }
};

videoEl(video1);
videoEl(video2);
videoEl(video3);
