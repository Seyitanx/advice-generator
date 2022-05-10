function newAdvice(response) {
  let number = document.querySelector("#advice-number");
  let advice = document.querySelector("#advice");
  advice.innerHTML = `"${response.data.slip.advice}"`;
  number.innerHTML = response.data.slip.id;
  console.log(response);
}

function displayAdvice(parameter) {
  let api = `https://api.adviceslip.com/advice`;
  axios.get(api).then(newAdvice);
}
;
let newButton = document.querySelector("#dice");
newButton.addEventListener("click", displayAdvice);
