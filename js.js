let weather=[
    {
      date: 1559419200000,
      temperature: {
        night: 2,
        day: 6,
      },
      cloudiness: 'Ясно',
      snow: false,
      rain: false,
    },
    {
      date: 1559505600000,
      temperature: {
        night: 3,
        day: 7,
      },
      cloudiness: 'Облачно',
      snow: false,
      rain: true,
    },
    {
      date: 1559592000000,
      temperature: {
        night: 2,
        day: 8,
      },
      cloudiness: 'Облачно',
      snow: false,
      rain: false,
    },
    {
        date: 1559678400000,
        temperature: {
          night: 3,
          day: 6,
        },
        cloudiness: 'Ясно',
        snow: true,
        rain: false,
      },
      {
        date: 1559764800000,
        temperature: {
          night: 3,
          day: 5,
        },
        cloudiness: 'Облачно',
        snow: false,
        rain: true,
      },
      {
        date: 1559851200000,
        temperature: {
          night: 5,
          day: 10,
        },
        cloudiness: 'Облачно',
        snow: false,
        rain: false,
      },    
  ]

  let days = [
    {
        weekday: `Пятница`
    },
    {
        weekday: 'Суббота'
    },
    {
        weekday: `Воскресенье`
    },
    {
        weekday: 'Понедельник'
    },
    {
        weekday: `Вторник`
    },
    {
        weekday: 'Среда'
    },
      
  ]

let weather_app = document.createElement('div');
weather_app.innerHTML = '<div class="divdiv" style="position: relative; left:100px"></div>';
document.body.append(weather_app);

let but_slid_left = document.createElement('div');
but_slid_left.innerHTML = '<div onclick="but_slider_left()" class="but_left" style="position: relative; bottom:180px; left: 45px; display: inline-block;"><img style="width: 40px; height: 80px;" src="left.png"></div>';
document.body.append(but_slid_left);

let but_slid_right = document.createElement('div');
but_slid_right.innerHTML = '<div onclick="but_slider_right()" class="but_right" style="position: relative; bottom:265px; left:435px; display: inline-block;"><img style="width: 40px; height: 80px;" src="right.png"></div>';
document.body.append(but_slid_right);

let div_div = document.querySelector('.divdiv');
// Создаем сами блоки с информацией о днях
function createDiv(date, rain, dayT, nightT, disp, days, snow){
    let div = document.createElement('div');
    div.style.width  = '110px';
    div.style.height = '200px';
    div.style.backgroundColor = 'white';
    div.style.display = `${disp}`;
    div.style.textAlign = 'center';
    div.style.fontFamily = 'Open Sans, sans-serif';

        let days_div = document.createElement('div');
        days_div.style.fontSize = '10px';
        days_div.style.color = 'gray'
        days_div.innerHTML = `${days}`;
        div.append(days_div); // какой день вторник , среда и т.д

        let date_div = document.createElement('div');
        date_div.style.fontSize = "14px";
        date_div.innerHTML = `${date}`;
        div.append(date_div); // какая дата

        let png_div = document.createElement('div');
        if(rain == false && snow == false){ png_div.innerHTML = '<img src="sun.png">'
        } else if (snow == true){png_div.innerHTML = '<img src="not_sun.png">'}
        else  {png_div.innerHTML = '<img src="rain.png">'}
        div.append(png_div); // картинка с солнышком или облачком или осадком

        let dayT_div = document.createElement('div');
        dayT_div.style.fontWeight = "600";
        dayT_div.innerHTML = `Днем +${dayT}`;
        div.append(dayT_div); //температура днем

        let nightT_div = document.createElement('div');
        nightT_div.style.fontSize="10px";
        nightT_div.innerHTML = `Ночью +${nightT}`;
        div.append(nightT_div); //температура ночью

        let description_div = document.createElement('div');
        description_div.style.color = "gray";
        description_div.style.fontSize="10px";
        if(rain == false && snow == false){ description_div.innerHTML = '<div>Солнечно</div>'
        } else if (snow == true){description_div.innerHTML = '<div>Облачно, без осадков</div>'}
        else  {description_div.innerHTML = '<div>Облачно с осадками</div>'}
        div.append(description_div); //описание погоды

        
    return div;
  }
   
  let epoch = 1559419200000;
  for (let i = 0; i <= 5; i++) {
    let disp;  
    if(i>1 && i<5){
        disp=`inline-block`
    } else (disp=`none`) //показываем только 3 блока

    if(i==2){
        days[i].weekday = "Сегодня"
    }

    if(weather[i].date == epoch){
      weather[i].date = `${i+18} Января`
    }
    epoch +=24*60*60*1000

    console.log(weather[i].date)

    div_div.append(createDiv(weather[i].date, weather[i].rain,
     weather[i].temperature.day , weather[i].temperature.night , disp, days[i].weekday,
     weather[i].snow ));
  }

let but_left = document.querySelector('.but_left');
console.log(but_left);

let but_right = document.querySelector('.but_right');
console.log(but_right);

let app = document.querySelector('.divdiv');
console.log(app);

function but_slider_left(){
    let k;
    for(let i = 0; i<=5; i++){
        if(app.children[i].style.display == 'inline-block'){
            k = i;
            break;
        }
    }
    console.log(k)
    if(k!=0){
    app.children[k-1].style.display = 'inline-block';
    app.children[k+2].style.display = 'none';
    } else {k=0}
}
function but_slider_right(){
    let k;
    for(let i = 5; i>=0; i--){
        if(app.children[i].style.display == 'inline-block'){
            k = i;
            break;
        }
    }
    console.log(k)
    if(k!=5){
    app.children[k+1].style.display = 'inline-block';
    app.children[k-2].style.display = 'none';
    } else (k=5)
}

/*
тут все просто...
Переключение происходит путем перебора display none или inline-block
Возьмем например метод для переключения налево, сначало цикл ищет первую картинку с inline-block
позже сохраняет переменную в которой хранится 1 такая картинка(с inline-block) и дальше просто переменную
-1 (открываем картинку изменяя none , на inline-block  ), а от переменной вправо +2(делаем наоборот)
, ну а если еще раз нажимать, то метод запускается заного , вместе с циклом и т.д, с методом направо аналогично наоборот
*/ 