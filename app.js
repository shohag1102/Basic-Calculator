const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      display.value = "";
    } else if (value === "=") {
      try {
        console.log("display.value = ", display.value);
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      console.log("res", display.value, value);
      display.value += value;
    }
  });
});
