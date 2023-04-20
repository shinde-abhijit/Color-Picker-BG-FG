function myColor() {
  let pickMyColor = document.getElementById("colorPickerFG").value;
//   document.body.style.color = pickMyColor;
  document.body.style.cssText = `font-size: 25px; color: ${pickMyColor}`;
  //below code for to print selected hex value inside the Foreground color input box
  document.getElementById("boxFGColor").value = pickMyColor;
}
document.getElementById("colorPickerFG").addEventListener("input", myColor);

function colorChanger() {
  let pickColor = document.getElementById("colorPicker").value;
  document.body.style.backgroundColor = pickColor;
  //below code for to print selected hex value inside the Background color input box
  document.getElementById("box").value = pickColor;
}
document.getElementById("colorPicker").addEventListener("input", colorChanger);
