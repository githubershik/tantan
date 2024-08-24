var btn = document.getElementById("start");
var card = document.getElementById("card");
var nextS = document.getElementById("next");
var prevS = document.getElementById("prev");
var card_txt = document.getElementById("card-text");
var counter = document.getElementById("counter-text");
var cntr = document.getElementById("counter");
var opacity = 100;
var second_opacity = 0;
var used = [];
var prev_counter = 2;
var counter_index = 1;
var v = 0;
var questions = 
["Что из последнего ты делал(-а) в первый раз?",
"В какой книге ты хотел(-а) бы жить?",
"Если бы ты был животным, то кем бы ты был и почему?",
"Что бы ты сделал(-а), если бы выиграл(-а) в лотерею?",
"Ты возвращаешь продуктовую тележку на место после того, как совершил покупки?",
"Ты приходишь домой и видишь в морозилке пингвина, твои действия?",
"Когда и отчего ты в последний раз был(-а) искренне и по-детски счастлив(-а)?",
"Что у тебя сегодня на ужин?",
"Какой, на первый взгляд, простой вопрос можно задать человеку,ответ на который многое расскажет о его личности?",
"Какую бы ты хотел себе суперсилу?",
"Что ты любишь готовить по утрам?",
"Что бы ты купил(-а), если бы у тебя были бесконечные деньги?",
"Почему крышки люков круглые?",
"Любимый цвет?",
"Любимая марка чипсов?",
"Какой 'Золотой информацией' ты обладаешь?",
"Какой твой любимый динозавр?",
"Какая наша фотография является для тебя наиболее значимой",
"Что отличает меня от всех остальных?",
"Моё лучшее качество?",
"Если бы мы завтра перестали общаться, по чему ты бы скучал(-а) больше всего?",
"Какой самый важный урок преподали тебе прошлые отношения?",
"Приходилось ли тебе когда-нибудь заканчивать дружбу? Почему?",
"Какую самую странную вещь мы оба любим?",
"Что для тебя является самой большой загадкой в жизни?",
"Что бы ты сказал себе прошлому?",
"Что бы ты спросил у будущего себя?",
"Что тебя больше всего настораживает в человеке?",
"Потерять память, или быть забытым всеми остальными?",
"Никогда больше не видеть, или никогда больше не говорить?",
"Если бы была возможность поменяться с кем-то телами на один день, то кто бы это был и почему?",
"Если бы ты мог вернуться назад и изменить одно своё решение, то что бы это было и почему?",
"Что тебе больше всего интересно?",
"Когда ты был ребенком, кем ты хотел стать?",
"Вам можно пить только то, что начинается с первой буквы вашего имени, что бы это было?",
"На какой вопрос тебе хотелось бы узнать ответ?"
];

function onInit() {
  let text_num = Math.floor(Math.random() * 35);
  card_txt.innerText = questions[text_num];
  used.push(text_num);
}

async function start(){
  onInit()
  for(let i = 0; i != 20; i++){
      let promise = new Promise((resolve, reject) => {
          setTimeout(() => resolve((opacity-=5).toString()+"%"), 20);
        });
      var res = await promise;
      //console.log(res);
      btn.style.opacity = res.toString();
      }
  if (res == "0%") {
      btn.style.display = "none";
      card.style.display = "block";
      nextS.style.display = "block";
      prevS.style.display = "block";
      card_txt.style.display = "block";
      cntr.style.display = "block";
      for(let i = 0; i != 20; i++){
          let promise = new Promise((resolve, reject) => {
              setTimeout(() => resolve((second_opacity+=5).toString()+"%"), 20);
            });
          let result = await promise;
          //console.log(result);
          card.style.opacity = result.toString();
          nextS.style.opacity = result.toString();
          prevS.style.opacity = result.toString();
          cntr.style.opacity = result.toString();
          }
  }
}
function prev(){
  let last = used[used.length-prev_counter];
  console.log(last);
  if (counter_index == 0 || counter_index == 1) {
    pass;
  }else{
    if (questions[last] == undefined){
      v++;
    }else{
    card_txt.innerText = questions[last];
    prev_counter++;
    counter_index--;
    counter.innerText = (counter_index).toString() + "/36";
    }
  }
}
function next(){
  let text_num = Math.floor(Math.random() * 35);
  if (counter_index == 36) {
    pass;
  }else{
    if (prev_counter>=3) {
      prev_counter--;
      card_txt.innerText = questions[used[used.length-prev_counter]];
      counter_index--;
      counter.innerText = (counter_index).toString() + "/36";
      console.log(prev_counter);
      console.log(counter_index);
    }else{
      if (used.includes(text_num)) {
        text_num = Math.floor(Math.random() * 35);
        console.log("repeated!");
        card_txt.innerText = questions[text_num];
        counter_index++;
        counter.innerText = (counter_index).toString() + "/36";
      }else{
        used.push(text_num);
        console.log(text_num,used);
        card_txt.innerText = questions[text_num];
        counter_index++;
        counter.innerText = (counter_index).toString() + "/36";
      }
    }
  }
}