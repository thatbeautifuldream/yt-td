// https://www.youtube.com/watch?v=BfsI6F9_izY
// https://i.ytimg.com/vi/BfsI6F9_izY/maxresdefault.jpg

let download = () => {
  // Get the data from element on the form.
  const videoLink = document.getElementById("video-link").value;
  const videoId = videoLink.split("=")[1];
  console.log(`Video id : ${videoId}`);
  window.open(`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`, "_blank");
};

let reset = () => {
  // Reset the form.
  document.getElementById("video-link").value = "";
};

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    const videoLink = document.getElementById("video-link").value;
    const videoId = videoLink.split("=")[1];
    console.log(`Video id : ${videoId}`);
    window.open(
      `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
      "_blank"
    );
  }
});
