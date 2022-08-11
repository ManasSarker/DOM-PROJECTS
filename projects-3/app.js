/* 

Projects Requirements :

- Change the background color by generating random hex color by clicking a button
- Also display the hex code  to a disabled input field 



*/

// Step 1 -create onload handler

window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");

  const changeBtn = document.getElementById("change-btn");

  const output = document.getElementById("output");

  const copyBtn = document.getElementById("copy");

  changeBtn.addEventListener("click", function () {
    const bgColor = generateHexColor();

    root.style.backgroundColor = bgColor;

    output.value = bgColor;
  });

  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);
  });
}

function generateHexColor() {
  const red = Math.floor(Math.random() * 225);

  const green = Math.floor(Math.random() * 225);

  const blue = Math.floor(Math.random() * 225);

  const hexCode = `#${red.toString(16)}${green.toString(16)}${blue.toString(
    16
  )}`;

  return hexCode;
}

//step-2 random color generator function
