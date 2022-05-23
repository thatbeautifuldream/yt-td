// https://www.youtube.com/watch?v=BfsI6F9_izY
// https://i.ytimg.com/vi/BfsI6F9_izY/maxresdefault.jpg

// Get the input field
var input = document.getElementById("video-link");

const url = input.window.location.href;
console.log(url);
// getting video id from url : https://milind.live/yth?https://www.youtube.com/watch?v=BfsI6F9_izY
const videoId = videoLink.slice(videoLink.length - 11);
window.open(`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`, "_blank");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("download-btn").click();
  }
});

let download = () => {
  // Get the data from element on the form.
  const videoLink = document.getElementById("video-link").value;
  const videoId = videoLink.slice(videoLink.length - 11);
  console.log(`Video id : ${videoId}`);
  window.open(`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`, "_blank");
};

let reset = () => {
  // Reset the form.
  document.getElementById("video-link").value = "";
};
