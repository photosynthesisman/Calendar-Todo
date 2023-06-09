let mainTodayDay = document.getElementById('main-day');
let mainTodayDate = document.getElementById('main-date');
let currentTitle = document.getElementById('current-year-month');
let calendarBody = document.getElementById('calendar-body');
let today = new Date();
let first = new Date(today.getFullYear(), today.getMonth(),1);
let dayList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// let monthList = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let monthList = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
let leapYear=[31,29,31,30,31,30,31,31,30,31,30,31];
let notLeapYear=[31,28,31,30,31,30,31,31,30,31,30,31];
let pageFirst = first;
let pageYear;
if(first.getFullYear() % 4 === 0){
    pageYear = leapYear;
}else{
    pageYear = notLeapYear;
}
//input today value entered
window.onload = function() { 
  var mon = (today.getMonth()+1);  
  bir = document.getElementById("selfCalender");
  bir.value = today.getFullYear() + '-' + '0' + mon;
}

function showCalendar(){
    let monthCnt = 100;
    let cnt = 1;
    for(let i = 0; i < 6; i++){
        let $tr = document.createElement('tr');
        $tr.setAttribute('id', monthCnt);   
        for(let j = 0; j < 7; j++){
            if((i === 0 && j < first.getDay()) || cnt > pageYear[first.getMonth()]){
                let $td = document.createElement('td');
                $tr.appendChild($td);     
            }else{
                let $td = document.createElement('td');
                $td.textContent = cnt;
                $td.setAttribute('id', cnt);                
                $tr.appendChild($td);
                cnt++;
            }
        }
        monthCnt++;
        calendarBody.appendChild($tr);
    }
}
showCalendar();

function removeCalendar(){
    let catchTr = 100;
    for(let i = 100; i< 106; i++){
        let $tr = document.getElementById(catchTr);
        $tr.remove();
        catchTr++;
    }
}

// function prev(){
//   inputBox.value = "";
//   const $divs = document.querySelectorAll('#input-list > div');
//   $divs.forEach(function(e){
//     e.remove();
//   });
//   const $btns = document.querySelectorAll('#input-list > button');
//   $btns.forEach(function(e1){
//     e1.remove();
//   });
//   if(pageFirst.getMonth() === 1){
//       pageFirst = new Date(first.getFullYear()-1, 12, 1);
//       first = pageFirst;
//       if(first.getFullYear() % 4 === 0){
//           pageYear = leapYear;getFullYear
//       }else{
//           pageYear = notLeapYear;
//       }
//   }else{
//       pageFirst = new Date(first.getFullYear(), first.getMonth()-1, 1);
//       first = pageFirst;
//   }
//   today = new Date(today.getFullYear(), today.getMonth()-1, today.getDate());
//   // currentTitle.innerHTML = monthList[first.getMonth()] + '&nbsp;&nbsp;&nbsp;&nbsp;'+ first.getFullYear();
//   currentTitle.innerHTML = first.getFullYear() + '년' + '&nbsp;&nbsp;' + monthList[first.getMonth()];
//   removeCalendar();
//   showCalendar();
//   showMain();
//   clickedDate1 = document.getElementById(today.getDate());
//   clickedDate1.classList.add('active');
//   clickStart();
//   reshowingList();
// }

// function next(){
//   inputBox.value = "";
//   const $divs = document.querySelectorAll('#input-list > div');
//   $divs.forEach(function(e){
//     e.remove();
//   });
//   const $btns = document.querySelectorAll('#input-list > button');
//   $btns.forEach(function(e1){
//     e1.remove();
//   });
//   if(pageFirst.getMonth() === 12){
//       pageFirst = new Date(first.getFullYear()+1, 1, 1);
//       first = pageFirst;
//       if(first.getFullYear() % 4 === 0){
//           pageYear = leapYear;
//       }else{
//           pageYear = notLeapYear;
//       }
//   }else{
//       pageFirst = new Date(first.getFullYear(), first.getMonth()+1, 1);
//       first = pageFirst;
//   }
//   today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
//   // currentTitle.innerHTML = monthList[first.getMonth()] + '&nbsp;&nbsp;&nbsp;&nbsp;'+ first.getFullYear();
//   currentTitle.innerHTML = first.getFullYear() + '년' + '&nbsp;&nbsp;' + monthList[first.getMonth()];
//   removeCalendar();
//   showCalendar(); 
//   showMain();
//   clickedDate1 = document.getElementById(today.getDate());
//   clickedDate1.classList.add('active');  
//   clickStart();
//   reshowingList();
// }

function nextSecond(){
 console.log('help')
}
function prevSecond(){
  console.log('me')
 }

function showMain(){
  mainTodayDay.innerHTML = dayList[today.getDay()];
  mainTodayDate.innerHTML = today.getDate();
}
let clickedDate1 = document.getElementById(today.getDate());
clickedDate1.classList.add('active');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');

// -------------------- have to -------------------- //
// let monthInput = document.getElementById("selfCalender");
// nextBtn.addEventListener("click", function() {
  // if (monthInput.value) {
    // nextSecond();
  // }else{
    // next();
  // }
// });
// prevBtn.addEventListener("click", function() {
  // if (monthInput.value) {
    // prevSecond();
  // }else{
    // next();
  // }
// });
// -------------------- have to -------------------- //

prevBtn.addEventListener('click',prev);
nextBtn.addEventListener('click',next);
let tdGroup = [];
function clickStart(){
  for(let i = 1; i <= pageYear[first.getMonth()]; i++){
      tdGroup[i] = document.getElementById(i);
      tdGroup[i].addEventListener('click',changeToday);
  }
}
function changeToday(e){
  for(let i = 1; i <= pageYear[first.getMonth()]; i++){
      if(tdGroup[i].classList.contains('active')){
          tdGroup[i].classList.remove('active');
      }
  }
  clickedDate1 = e.currentTarget;
  clickedDate1.classList.add('active');
  today = new Date(today.getFullYear(), today.getMonth(), clickedDate1.id);
  showMain();
  keyValue = today.getFullYear() + '' + today.getMonth()+ '' + today.getDate();
  reshowingList();
}

function reshowingList(){
  keyValue = today.getFullYear() + '' + today.getMonth()+ '' + today.getDate();
  if(todoList[keyValue] === undefined){
      inputList.textContent = '';
      todoList[keyValue] = [];
      const $divs = document.querySelectorAll('#input-list > div');
      $divs.forEach(function(e){
        e.remove();
      });
      const $btns = document.querySelectorAll('#input-list > button');
      $btns.forEach(function(e1){
        e1.remove();
      });
  }else if(todoList[keyValue].length ===0){
      inputList.textContent = "";
      const $divs = document.querySelectorAll('#input-list > div');
      $divs.forEach(function(e){
        e.remove();
      });
      const $btns = document.querySelectorAll('#input-list > button');
      $btns.forEach(function(e1){
        e1.remove();
      });
  }else{
      const $divs = document.querySelectorAll('#input-list > div');
      $divs.forEach(function(e){
        e.remove();
      });
      const $btns = document.querySelectorAll('#input-list > button');
      $btns.forEach(function(e1){
        e1.remove();
      });
      let $div = document.createElement('div');
      for(let i = 0; i < todoList[keyValue].length; i++){
          let $div = document.createElement('div');
          $div.textContent = '-' + todoList[keyValue][i];
          let $btn = document.createElement('button');
          $btn.setAttribute('type', 'button'); 
          $btn.setAttribute('id', 'del-ata');
          $btn.setAttribute('id', dataCnt+keyValue);
          $btn.setAttribute('class', 'del-data');
          $btn.textContent = delText;
          inputList.appendChild($div);
          inputList.appendChild($btn);
          $div.addEventListener('click',checkList);
          $btn.addEventListener('click',deleteTodo);
          inputBox.value = '';
          function deleteTodo(){
              $div.remove();
              $btn.remove();
          }
      }
  }

}
let inputBox = document.getElementById('input-box');
let inputDate = document.getElementById('input-data');
let inputList = document.getElementById('input-list');
let delText = 'X';
inputDate.addEventListener('click',addTodoList);
let dataCnt = 1;
let keyValue = today.getFullYear() + '' + today.getMonth()+ '' + today.getDate();
let todoList = [];
todoList[keyValue] = [];
function addTodoList(){
  let $div = document.createElement('div');
  $div.textContent = '-' + inputBox.value;
  let $btn = document.createElement('button');
  $btn.setAttribute('type', 'button'); 
  $btn.setAttribute('id', 'del-ata');
  $btn.setAttribute('id', dataCnt+keyValue);
  $btn.setAttribute('class', "del-data");
  $btn.textContent = delText;
  inputList.appendChild($div);
  inputList.appendChild($btn);
  todoList[keyValue].push(inputBox.value);
  dataCnt++;
  inputBox.value = '';
  $div.addEventListener('click',checkList);
  $btn.addEventListener('click',deleteTodo);
  function deleteTodo(){
      $div.remove();
      $btn.remove();
  }
}
console.log(keyValue);
function checkList(e){
  e.currentTarget.classList.add('checked');
}

currentTitle.innerHTML = first.getFullYear() + '년' + '&nbsp;&nbsp;' + monthList[first.getMonth()];
showMain()  
clickStart()

//jSuites 라이브러리 옵션 설정
function calendarPI(){
  jSuites.calendar(document.getElementById('calendarPI'), {
    type: 'year-month-picker',
    format: 'MMM-YYYY',
    resetButton: false,
    textUpdate: '업데이트', 
    today: true,     
    onchange: function(instance, value) {          
      const dateString = value;
      let dateObj = new Date(dateString);      
      let second = new Date(dateObj.getFullYear(), dateObj.getMonth(),1);
      // const year = dateObj.getFullYear();
      // const month = dateObj.getMonth() + 1; 
      // January is represented as 0, so we add 1 to get the actual month      
      currentTitle.innerHTML = monthList[second.getMonth()] + '&nbsp;&nbsp;&nbsp;&nbsp;'+ second.getFullYear();
      // console.log(year,month)            
    }
  });  
  let myCalendar = jSuites.calendar(document.getElementById('calendarPI'), {
    type: 'year-month-picker',
      format: 'MMM-YYYY',
      resetButton: false,
      textUpdate: '업데이트', 
      today: true,     
      onchange: function(instance, value) {          
        const dateString = value;
        let dateObj = new Date(dateString);      
        let second = new Date(dateObj.getFullYear(), dateObj.getMonth(),1);
        // const year = dateObj.getFullYear();
        // const month = dateObj.getMonth() + 1; 
        // January is represented as 0, so we add 1 to get the actual month      
        currentTitle.innerHTML = monthList[second.getMonth()] + '&nbsp;&nbsp;&nbsp;&nbsp;'+ second.getFullYear();
        // console.log(year,month)            
      }
  });
}

function extractDateAndMonth() {
  let dateInput = document.getElementById("selfCalender").value;
  let date = new Date(dateInput);
  let changedDay = date.getDay();
  let changedDate = date.getDate();
  let changedMonth = date.getMonth();
  let changedYear = date.getFullYear();
  let changedTodayDay = document.getElementById('main-day');
  let changedTodayDate = document.getElementById('main-date');   
  let secondly = new Date(changedYear, changedMonth,1);
  let pageYear;
  if(secondly.getFullYear() % 4 === 0){
      pageYear = leapYear;
  }else{
      pageYear = notLeapYear;
  }
  
  currentTitle.innerHTML = changedYear + '년' + '&nbsp;&nbsp;' + monthList[changedMonth];
  changedTodayDay.innerHTML = dayList[changedDay];  
  changedTodayDate.innerHTML = changedDate;

  let monthCnt = 100;
  let cnt = 1;
  for(let i = 0; i < 6; i++){
    let $tr = document.createElement('tr');
    $tr.setAttribute('id', monthCnt);   
    for(let j = 0; j < 7; j++){
      if((i === 0 && j < first.getDay()) || cnt > pageYear[secondly.getMonth()]){
        let $td = document.createElement('td');
        $tr.appendChild($td);     
      }else{
        let $td = document.createElement('td');
        $td.textContent = cnt;
        $td.setAttribute('id', cnt);                
        $tr.appendChild($td);
        cnt++;
      }
    }
    monthCnt++;
    calendarBody.appendChild($tr);
  }

  let catchTr = 100;
  for(let i = 100; i< 106; i++){
    let $tr = document.getElementById(catchTr);
    $tr.remove();
    catchTr++;
  }
  let tdGroup = [];

  for(let i = 1; i <= pageYear[secondly.getMonth()]; i++){
    tdGroup[i] = document.getElementById(i);    
  }

  for(let i = 1; i <= pageYear[secondly.getMonth()]; i++){      
    tdGroup[i] = document.getElementById(i);
    if(tdGroup[i].classList.contains('active')){
      tdGroup[i].classList.remove('active');
    }
  }

  let clickedDate2 = document.getElementById(changedDate);  
  clickedDate2.classList.add('active');

  // ---------- check this ---------- //
  today = new Date(today.getFullYear(), today.getMonth(), clickedDate1.id);
  // showMain();
  keyValue = today.getFullYear() + '' + today.getMonth()+ '' + today.getDate();
  reshowingList();
  // ---------- check this ---------- //

  for(let i = 1; i <= pageYear[secondly.getMonth()]; i++){
    tdGroup[i] = document.getElementById(i);
    tdGroup[i].addEventListener('click',changeToday);
  }
  function changeToday(e){
    for(let i = 1; i <= pageYear[secondly.getMonth()]; i++){
      if(tdGroup[i].classList.contains('active')){
        tdGroup[i].classList.remove('active');
      }
    }
    clickedDate1 = e.currentTarget;
    clickedDate1.classList.add('active');
    today = new Date(today.getFullYear(), today.getMonth(), clickedDate1.id);
    showMain();
    keyValue = today.getFullYear() + '' + today.getMonth()+ '' + today.getDate();
    reshowingList();
  }
}

function next(){
  let dateInput = document.getElementById("selfCalender").value;
  let date = new Date(dateInput);

  inputBox.value = "";
  const $divs = document.querySelectorAll('#input-list > div');
  $divs.forEach(function(e){
    e.remove();
  });
  const $btns = document.querySelectorAll('#input-list > button');
  $btns.forEach(function(e1){
    e1.remove();
  });
  if(pageFirst.getMonth() === 12){
      pageFirst = new Date(date.getFullYear()+1, 1, 1);
      first = pageFirst;
      if(first.getFullYear() % 4 === 0){
          pageYear = leapYear;
      }else{
          pageYear = notLeapYear;
      }
  }else{
      pageFirst = new Date(date.getFullYear(), date.getMonth()+1, 1);
      first = pageFirst;
  }
  today = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
  // currentTitle.innerHTML = monthList[first.getMonth()] + '&nbsp;&nbsp;&nbsp;&nbsp;'+ first.getFullYear();
  currentTitle.innerHTML = first.getFullYear() + '년' + '&nbsp;&nbsp;' + monthList[first.getMonth()];
  removeCalendar();
  showCalendar(); 
  showMain();
  clickedDate1 = document.getElementById(date.getDate());
  clickedDate1.classList.add('active');  
  clickStart();
  reshowingList();

  var mon = (today.getMonth()+1);  
  bir = document.getElementById("selfCalender");  
  if(mon.toString().length > 1){
    bir.value = today.getFullYear() + '-' + mon;
  }else{
    bir.value = today.getFullYear() + '-' + '0' + mon;
  }
}

function prev(){
  let dateInput = document.getElementById("selfCalender").value;
  let date = new Date(dateInput);

  inputBox.value = "";
  const $divs = document.querySelectorAll('#input-list > div');
  $divs.forEach(function(e){
    e.remove();
  });
  const $btns = document.querySelectorAll('#input-list > button');
  $btns.forEach(function(e1){
    e1.remove();
  });
  if(pageFirst.getMonth() === 1){
      pageFirst = new Date(date.getFullYear()-1, 12, 1);
      first = pageFirst;
      if(first.getFullYear() % 4 === 0){
          pageYear = leapYear;getFullYear
      }else{
          pageYear = notLeapYear;
      }
  }else{
      pageFirst = new Date(date.getFullYear(), date.getMonth()-1, 1);
      first = pageFirst;
  }
  today = new Date(date.getFullYear(), date.getMonth()-1, date.getDate());
  // currentTitle.innerHTML = monthList[first.getMonth()] + '&nbsp;&nbsp;&nbsp;&nbsp;'+ first.getFullYear();
  currentTitle.innerHTML = first.getFullYear() + '년' + '&nbsp;&nbsp;' + monthList[first.getMonth()];
  removeCalendar();
  showCalendar();
  showMain();
  clickedDate1 = document.getElementById(date.getDate());
  clickedDate1.classList.add('active');
  clickStart();
  reshowingList();

  var mon = (today.getMonth()+1);  
  bir = document.getElementById("selfCalender");  
  if(mon.toString().length > 1){
    bir.value = today.getFullYear() + '-' + mon;
  }else{
    bir.value = today.getFullYear() + '-' + '0' + mon;
  }
}