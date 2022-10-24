function grocery(event) {
  event.preventDefault();

  let text = document.getElementById('input1').value;
  const myArray = text.split(" "); 

  document.getElementById("input1").innerHTML = myArray;

  console.log(myArray);
}

window.addEventListener("load", function () {
  const form = document.getElementById("food");
  form.addEventListener("submit", grocery);

  
});