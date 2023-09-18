//I'm not going to admit to how long I have sat and played with this....

function pickMe() {
  const getDemo = document.getElementById("demo");
  const getDoc = document.getElementById("doc");
  const getPick = document.getElementById("pick");

  let colorPicker = prompt(
    "Enter a color you'd like the background of this webpage to be (don't forget to hash a HEX color code):",
    "#FF9494"
  );
  if (colorPicker != null) {
    getDemo.innerHTML = "You picked " + colorPicker;
    getDoc.style.background = colorPicker;
    getDemo.style.color = colorPicker;
    getPick.style.background = colorPicker;
  }

  //Unsure why I couldn't get this to work as one continuous logic statement. I tried it as an empty string instead of null but that also wouldn't work. Ultimately I just seperated the peices and that solved the problem. Must investigate further.

  if (colorPicker === "Golden") {
    getDoc.style.backgroundImage =
      "url('https://i.pinimg.com/originals/67/bc/69/67bc6936eb1a43147dc86611c3e1b973.jpg')";
    getPick.style.backgroundImage =
      "url('https://i.pinimg.com/originals/67/bc/69/67bc6936eb1a43147dc86611c3e1b973.jpg')";
    getPick.style.backgroundSize = "cover";
    getDemo.style.color = "gold";
  } else if (colorPicker === "Naruto") {
    document.getElementById("inspo").style.color = "white";
    getDemo.innerHTML =
      "You found " + colorPicker + " Uzumaki! What's your ninja way? 🍜 🍡 🧡";
    getDemo.style.fontSize = "20px";
    getDoc.style.backgroundImage =
      "url('https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg')";
    getDoc.style.backgroundSize = "cover";
    getDemo.style.color = "orange";
    getPick.style.background = "orange";
  } else if (colorPicker === "Halo") {
    getDemo.innerHTML = "You picked " + colorPicker + ". Join the UNSC! 👮‍♀️";
    getDemo.style.fontSize = "22px";
    getDoc.style.backgroundImage =
      "url('https://media.comicbook.com/2018/05/halo-1--1111212.jpeg')";
    getDoc.style.backgroundSize = "cover";
    getDemo.style.color = "darkgreen";
    getPick.style.background = "darkgreen";
  } else if (colorPicker === "Rainbow") {
    getDemo.innerHTML = "You picked " + colorPicker + "!";
    getDemo.style.fontSize = "24px";
    getDoc.style.backgroundImage =
      "url('https://usagif.com/wp-content/uploads/gifs/rainbow-17.gif')";
    getDoc.style.backgroundSize = "cover";
    getDemo.style.color = "lightblue";
    getPick.style.background = "lightblue";
  } else if (colorPicker === "Hello Kitty") {
    getDemo.innerHTML = "You picked " + colorPicker + ". Lets play! 💅🏼";
    getDemo.style.fontSize = "24px";
    getDoc.style.backgroundImage =
      "url('https://pbs.twimg.com/ext_tw_video_thumb/1616843126018129923/pu/img/_ZTd_rF2dkjkSf-8.jpg')";
    getDoc.style.backgroundSize = "cover";
    getDemo.style.color = "pink";
    getPick.style.background = "pink";
  } else if (colorPicker === "Nuggets") {
    getDemo.innerHTML = "You found " + colorPicker + ". You clever one, you";
    getDemo.style.fontSize = "24px";
    getDoc.style.backgroundImage =
      "url('https://media.npr.org/assets/img/2013/09/26/ap110725132481-64efa1b0559d2ba8f38c7f6aaa9b96221806903b-s1100-c50.jpg')";
    getDoc.style.backgroundSize = "cover";
    getDemo.style.color = "red";
    getPick.style.background = "red";
  }

  // else {
  //   getDemo.innerHTML = "You didn't choose. Now isn't the time to be indecisive. Try Green. It's my favorite.";
  // }
}
