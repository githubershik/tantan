var btn = document.getElementById("start");
var card = document.getElementById("card");
var nextS = document.getElementById("next");
var prevS = document.getElementById("prev");
var card_txt = document.getElementById("card-text");
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
"На какой вопрос тебе хотелось бы узнать ответ?",
"На какой вопрос тебе хотелось бы узнать ответ?",
"Назови одну вещь, которая заставляет тебя улыбаться?",
"Чем ты гордишься больше всего?",
"Что заставляет тебя улыбаться?",
"В какой момент жизни тебе было хуже всего?",
"Какой момент из детства тебе запомнился больше всего?",
"Что доставляет тебе наибольшее удовольствие в жизни на сегодняшний день?",
"Какой твой любимый фильм?",
"Что бы ты хотел(-а) получить в подарок на свой день рождения?",
"Какой момент в твоей жизни лучший?",
"Твое любимое мороженое?",
"С кем ты наиболее близок(-а) в своей семье?",
"Расскажи свой любимый анекдот?",
"Самый глупый поступок, который ты когда-либо совершал(-а)?",
"Если бы ты мог изменить свое прошлое, какой момент ты бы выбрал(-а)?",
"Твоя наиболее положительная черта?",
"Когда плохое настроение, каким образом пытаешься из него выйти?",
"Как ты ко мне относишься?",
"Что больше всего нравится во мне?",
"Какая черта тебя характеризует больше всего?",
"Опиши себя в трех словах?",
"Какое твоё любимое блюдо?",
"Как бы тебя описал лучший друг?",
"Какой твой любимый алкогольный напиток?",
"Какой ты представляешь свою будущую девушку/парня?",
"Если бы у тебя была возможность исполнить три желания, какими бы они были ?",
"Лучший комплимент, который тебе когда-либо делали?",
"Какие у тебя таланты?",
"Опиши своего лучшего друга/подругу?", 
"Главная вещь, которую ты должен сделать перед тем, как ты умрешь?",
"Тебе нравится проводить со мной время?",
"Как ты обычно проводишь выходные?",
"Ты подходишь под общую характеристику своего знака зодиака?",
"О чем сожалеешь больше всего?",
"Что может сразу повысить тебе настроение настроение?",
"Что бы ты в себе изменил(-а)?",
"Если бы у тебя была возможность начать жизнь заново, ты бы воспользовался(-ась) возможностью?",
"Когда последний раз ты плакал(-а)? по какому поводу? ",
"Я дорогой для тебя человек?",
"Что больше всего тебя пугает в будущем?",
"Каким ты представляешь себя в будущем?",
"Любимое высказывание или пословица?",
"Когда-нибудь влюблялся(-ась) по-настоящему?",
"Тебе разбивали сердце?",
"Как ты понимаешь слово «любовь»?",
"Какой урок извлек(-ла) из своих прошлых отношений?",
"Самый сумасшедший поступок,который ты совершил(-а)?",
"Каким ты видишь себя через пять лет?",
"Работа твоей мечты?",
"Твое любимое слово?",
"Любимая книга?",
"Какая главная цель в твоей жизни?",
"Назови 3 своих недостатка?",
"Какие вопросы ты хотел(-а) бы мне задать?",
"Кто твой кумир?",
"Какие у тебя плохие/хорошие привычки?",
"Расскажи про свой первый поцелуй?",
"С кем из известных людей ты хотел(-а) бы пообщаться?",
"Ты веришь в любовь с первого взгляда?",
"Что нравится больше: читать книги или смотреть фильмы?",
"Какая твоя любимая песня?",
"Если бы тебе оставалось жить день, чтобы ты сделал(-а)?",
"Стакан наполовину пустой или полный?", 
"Если бы ты захотел(-а) написать книгу, о чем она бы была?",
"О чем обычно думаешь по утрам после пробуждения?", 
"Хочешь себе тату?", 
"Хочешь со мной парные браслетики?", 
"Какой твой любимый цвет?",
"Любимое время года?",
"Тебе комфортно со мной?",
"Если у тебя будет дополнительный час в сутках, на что бы ты его потратил(-а)?",
"Как тебе нравится, чтобы тебя называли?",
"Как тебя называют в школе?",
"Какой твой любимый спорт?",
"Если бы мы встречались, как бы ты отметил нашу первую годовщину?",
"Ты когда-нибудь плакал во время просмотра фильма?",
"Какой момент со мной тебе запомнился больше всего?",
"Любимое занятие?",
"На что ты обращаешь внимание при знакомстве с парнем/девушкой?",
"Твой любимый ресторан/кафе?",
"Что ты будешь делать в дождливый день?",
"Твоя любимая компьютерная игра?", 
"Умеешь танцевать?",
"Ты интроверт или экстраверт?",
"Какие качества тебя привлекают в девушке/парне?",
"Предпочитаешь активный отдых или пассивный?",
"Что тебя вдохновляет?",
"Боишься старости?",
"Каким ты представляешь себя в 60 лет?",
"В каком возрасте впервые влюбился(-ась)?",
"В каком возрасте признался(-ась) в любви?",
"Что ты думаешь о свободных отношениях?",
"Что бы выбрал(-а): богатство или известность?",
"Тебе нравится убираться в своей комнате?",
"Веришь в любовь с первого взгляда?",
"Любимый месяц года?",
"Ты поёшь в душе?"
];

function onInit() {
  let text_num = Math.floor(Math.random() * (questions.length-1));
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
      for(let i = 0; i != 20; i++){
          let promise = new Promise((resolve, reject) => {
              setTimeout(() => resolve((second_opacity+=5).toString()+"%"), 20);
            });
          let result = await promise;
          //console.log(result);
          card.style.opacity = result.toString();
          nextS.style.opacity = result.toString();
          prevS.style.opacity = result.toString();
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
    }
  }
}
function next(){
  let text_num = Math.floor(Math.random() * (questions.length-1));
  if (counter_index == questions.length) {
    pass;
  }else{
    if (prev_counter>=3) {
      prev_counter--;
      card_txt.innerText = questions[used[used.length-prev_counter]];
      counter_index++;
      console.log(prev_counter);
      console.log(counter_index);
    }else{
      if (used.includes(text_num)) {
        text_num = Math.floor(Math.random() * (questions.length-1));
        console.log("repeated!");
        card_txt.innerText = questions[text_num];
        used.push(text_num);
        counter_index++;
        console.log(used);
      }else{
        used.push(text_num);
        console.log(text_num,used);
        card_txt.innerText = questions[text_num];
        counter_index++;
      }
    }
  }
}