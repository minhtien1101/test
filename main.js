function myFunction(){
	var num1 = document.getElementById('n1').value;
	var num2 = document.getElementById('n2').value;
	var operator = document.getElementById('operator').value;
	var result = 0;
	if(operator == '+'){
				result = parseInt(num1) + parseInt(num2);
	} else if(operator == '-'){
		result = parseInt(num1) - parseInt(num2);
	} else if(operator == '*'){
		result = parseInt(num1) * parseInt(num2);			
	} else {
		if(num2 == 0){
			result = 'Can\'t divide for 0!';
		} else {
			result = parseInt(num1) / parseInt(num2);
		}
	}
	document.getElementById('result').value = result
}
