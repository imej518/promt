// JavaScript Document

function sel_option() { 
  var Ch = document.Ch; 
  var num1 = Ch.num1; 
  var num2 = Ch.num2; 
  var num3 = Ch.num3;  
  var num4 = Ch.num4; 
  var num5 = Ch.num5; 
  var num6 = Ch.num6; 
  
  var num11 = Ch.num11;  
  var num12 = Ch.num12; 
  var num13 = Ch.num13; 
  
  var total = Ch.Total_price 
  var totalPrice = 0;
  
  if(num1.checked == true) totalPrice += parseInt(num1.value); 
  if(num2.checked == true) totalPrice += parseInt(num2.value); 
  if(num3.checked == true) totalPrice += parseInt(num3.value); 
  if(num4.checked == true) totalPrice += parseInt(num4.value); 
  if(num5.checked == true) totalPrice += parseInt(num5.value); 
  if(num6.checked == true) totalPrice += parseInt(num6.value); 
  if(num11.checked == true) totalPrice += parseInt(num11.value); 
  if(num12.checked == true) totalPrice += parseInt(num12.value); 
  if(num13.checked == true) totalPrice += parseInt(num13.value);
  total.value = "총 " + totalPrice + "원 입니다."; 
} 