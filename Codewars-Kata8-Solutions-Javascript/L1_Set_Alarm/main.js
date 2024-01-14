const Set_Alarm = (employed, vacation) => {
  return employed == vacation ? false : true;
};
console.log(Set_Alarm(true, true)); //false
console.log(Set_Alarm(true, false)); //false
console.log(Set_Alarm(false, true)); //false

// Way2
const Set_Alarm2 = (employed, vacation) => {
  return employed == !vacation;
};
console.log(Set_Alarm2(true, true)); //false
console.log(Set_Alarm2(true, false)); //false
console.log(Set_Alarm2(false, true)); //false
