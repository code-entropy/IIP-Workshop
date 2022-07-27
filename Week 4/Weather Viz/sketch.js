// Weather p5js code:

// url: http://api.openweathermap.org/data/2.5/air_pollution?lat=28.7&lon=77.1&appid=<API_KEY>

// let data;
// function preload(){
// data=loadJSON("https://api.openweathermap.org/data/2.5/forecast/?lat=23&lon=72.4&appid=ad6e239ec0ac58d0a9836e942aac97eb&units=metric");
// }
// const margin = 50;var
// function setup() {
//   createCanvas(400, 400);
//   background(220);
//   const temp = data.list[0].main.temp;
//   text(temp,100,100)
// //   // console.log(pollution);
// //  
// //   let i=0;
// //   for(let pollutant in pollution){
// //     console.log(pollutant, pollution[pollutant]);
// //     text(pollutant, width/2+margin, margin+3+i*40)
// //     const dia = map(pollution[pollutant],0, 100,0, 40);
// //     const dia_constrained = constrain(dia,0,80);
// //     ellipse(width/2, margin + i*40, dia_constrained, dia_constrained);
// //     i++;
// //   }
//  }
// function draw() {
//   background(220);
//   const temp = data.list[0].main.temp;
//   text(temp,100,100)
// }





let data;
function preload(){
data=loadJSON("https://api.openweathermap.org/data/2.5/forecast/?lat=23&lon=72.4&appid=ad6e239ec0ac58d0a9836e942aac97eb&units=metric");
}

function setup() {
  createCanvas(400, 500);
  background(220);

}

function draw() {
  background(220);
  // rain = (data.list[0]).length
  // console.log(rain)
  // text(rain,200,200)
  for(i=0;i<data.cnt;i++)
  {
    
  const temp = data.list[i].main.temp;
  text(temp,50,20+(i*12))
  
  
  const des = data.list[i].weather[0].description;
  text(des,150,20+(i*12))

    if(undefined!=data.list[i].rain){
      let rain = (data.list[i].rain["3h"]);
      text(rain,250,20+(i*12))
     }
  }
  delayTime(1)
}