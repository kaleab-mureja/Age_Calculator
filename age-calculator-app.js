// function getAge(dateNum){
//   let date = dateNum;
//   let month = 0;
//   let year = 0;
//   const ageHour = 10;

//   while(date >= 365){
//     date -= 365;
//     year++;
//   }

//   while(date >= 30){
//     date -= 30;
//     month++;
//   }

//   return {year,month,date};
// }

function getAge(dateNum){
  let totalDate = dateNum;

  const yearRemainder = totalDate % 365;
  const year = Math.floor(totalDate/ 365);

  const monthRemainder = yearRemainder % 30;
  const month = Math.floor(yearRemainder/30)

  const date = monthRemainder;
  return {year, month, date}
}

function calculateAge() {

    const currentTime = new Date();

    const inputYear = document.getElementById("yearInput");
    const inputMonth = document.getElementById("monthInput");
    const inputDate = document.getElementById("dateInput");
    // if (inputYear.value < 0 || inputYear.value > currentTime.getFullYear || inputMonth.value < 1 || inputMonth.value > currentTime.getMonth || inputDate.value < 1 || inputDate.value > currentTime.getDate ){
    //   return
    // }
    const yyyy = Number(inputYear.value);
    const mm = Number(inputMonth.value) ;
    const dd = Number(inputDate.value);
    const inputTime = `${yyyy}-${mm}-${dd}`;
    const birthDate = new Date(inputTime);
    const differenceInMilliseconds = currentTime - birthDate;
    const totalHour = differenceInMilliseconds/3600000;
    const dateNum = Math.floor(totalHour/24);

   

    const {year,month,date} = getAge(dateNum);
   
    document.querySelector('.years').innerHTML = `${year}`;
    document.querySelector('.months').innerHTML = `${month}`;
    document.querySelector('.days').innerHTML = `${date}`;
}
