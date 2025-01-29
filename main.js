/*
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
*/

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cat for website.png") {
    myImage.setAttribute("src", "images/cat for website2.png");
  } else {
    myImage.setAttribute("src", "images/cat for website.png");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Cats are the best, ${myName}`;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Cats are the best, ${storedName}`;
  }
  myButton.addEventListener("click", () => {
    setUserName();
  });
  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Cats are the best, ${myName}`;
    }
  }
  