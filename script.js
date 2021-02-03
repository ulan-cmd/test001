let sale = {
	2020:40,
	4545:10,
	1234:50
}
 let btn = document.querySelector('#btn');

 btn.onclick = function(){
 	let code = document.querySelector('#code').value;
    if(sale[code]){
      //код ввденный пользователем имеется
    	alert('урааа я получил скидкууу')
    } else{
      //код ввденный пользователем не имеется
    	alert('я не получил скидку');
    }
 }