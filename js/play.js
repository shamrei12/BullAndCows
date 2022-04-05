let play_btn = document.querySelector(".btn");
let result = new Set();

function randomizerBot() {
  let rand = [];
  let random = 0;
  while (result.size < 4) {
    random = Math.floor(Math.random() * 9);
    result.add(random);
  }
  for (item of result) {
    rand.push(item);
  }

  return rand;
}

play_btn.onclick = function () {
  let rand = randomizerBot();
  let p = document.createElement("p");
  let result = document.querySelector(".output_step");
  let digital = document.querySelector(".input_value");
  let count_byk = 0;
  let count_cow = 0;
  let mass = digital
    .value.toString()
    .split("")
    .filter((value) => value !== " ")
    .map((value) => +value);
    checkInputcorect(mass)
    //сравнение чисел в массиве
    for (let i = 0; i < rand.length; i++) {
      for (let j = 0; j < mass.length; j++) {
        if (rand[i] == mass[j] && i == j) {
          count_byk++;
        } else if (i !== j && rand[i] == mass[j]) {
          count_cow++;
        }
      }
    }
    //добавление результатов в колнку с результатом
    p.className = "step";
    p.innerHTML = `Ваш ход: ${mass.join(
      ""
    )} - ${count_cow} Коров и ${count_byk} Быков`;
    result.append(p);

  if(count_byk == 4){
      alert('Поздравляю с победой')
      p.innerHTML = ''
      digital.value = ''
      location.reload()

  }
};
function checkInputcorect (mass){
  let repeat = new Set(); //создание set для проверки вводимых данных на уникальность вводимых данных
  for(key of mass){
    repeat.add(key)
  }
  if (mass.length > 4 || mass == NaN || repeat.size < 4) { //проверка условий: размер, является ли числом и проверка повторений
    alert("Введите корректные данные");
    digital.value = ''; 
}
}

