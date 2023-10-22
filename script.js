'use strict';
const loginInput = document.querySelector('.login__input ');
const loginBtn = document.querySelector('.login__btn ');
const yearLable = document.querySelector('.year');
const monthLable = document.querySelector('.month');
const dayLable = document.querySelector('.day');
const goverLable = document.querySelector('.gover');
const sexLable = document.querySelector('.sex-text');
const textLable = document.querySelector('.text');
const main = document.querySelector('.x');

console.log(main)
const goverMap = new Map([
  ['01','القاهرة'] ,
  ['02','الاسكندريه'] ,
  ['03','بور سعيد'] ,
  ['04','السويس'] ,
  ['11','دمياط'] ,
  ['12','الدقليه'] ,
  ['13','الشرقيه'] ,
  ['14','القليوبيه'] ,
  ['15','كفر الشيخ'] ,
  ['16','الغربيه'] ,
  ['17','المنوفيه'] ,
  ['18','البحيره'] ,
  ['19','الاسماعيليه'] ,
  ['21','الجيزه'] ,
  ['22','بني سويف'] ,
  ['23','الفيوم'] ,
  ['24','المنيا'] ,
  ['25','اسيوط'] ,
  ['26','سوهاج'] ,
  ['27','قنا'] ,
  ['28','أسوان'] ,
  ['29', 'الأقصر'],
  ['31','البحر الأحمر'] ,
  ['32','الوادي الجديد'] ,
  ['33','مطروح'] ,
  ['34','شمال سيناء'] ,
  ['35','جنوب سيناء'] ,
  ['88','خارج الجمهوريه'] ,
])
console.log(goverMap);
console.log(goverMap.get(25));
loginBtn.addEventListener('click', function (e) {
  
  e.preventDefault();
  const id = loginInput.value.split('').map((el) => Number(el));
  console.log(id);
  if (id.length !== 14) {
    textLable.textContent = "please enter true id";
  }
  if (id[0] === 2) {
    yearLable.textContent = `19${id[1]}${id[2]}`;
  } else if (id[0] === 3) {
    yearLable.textContent = `20${id[1]}${id[2]}`;
  } else {
    textLable.textContent = "please enter true id";
  }
  const month = String(id[3]) + String(id[4]);
  console.log(Number(month));
  if (Number(month) <= 12) {
    monthLable.textContent = `${month}`;
  } else {
    textLable.textContent = "please enter true id";
  }
    const day = String(id[5]) + String(id[6]);
  console.log(Number(day));
    if (Number(day) <= 30) {
    dayLable.textContent = `${day}`;
  } else {
      textLable.textContent = "please enter true id";
    }
  const sex = id[12];
  console.log(sex);
  console.log(sex);
  const htmlImgSex = `
    <img class="sex">
    `;
  main.insertAdjacentHTML('beforeend', htmlImgSex);
  const sexImg = document.querySelector('.sex');
  if (sex % 2 === 0 ) {
    sexLable.textContent = 'female';
    sexImg.src = 'woman.jpg';
  } else if(sex!==undefined) {
    sexLable.textContent = 'male';
    sexImg.src = 'man.jpg';
    sexImg.src = 'man.jpg';
  }
  const gover = String(id[7]) + String(id[8]);
  console.log(gover);
  if (goverMap.get(gover) === undefined) {
    textLable.textContent = "please enter true id";
  } else {
    goverLable.textContent = goverMap.get(gover);
  }
})