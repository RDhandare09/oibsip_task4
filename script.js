function convert()

{
	var tempInput = document.getElementById("temp");
	var temp = tempInput.value;
  
	
	if (!isValidNumber(temp)) 
	{
	  alert("enter valid temperature ");
	  tempInput.value = "";
	  return;
	}
  
	if (document.getElementById("unit").value === "fahrenheit") 
	{
	  document.getElementById("result").innerHTML = `${(temp - 32) / 1.8}°C<br>${(temp - 32) / 1.8 + 273.15}°K`;
	} 
	
	else if (document.getElementById("unit").value === "celsius")
	 {
	  document.getElementById("result").innerHTML = `${temp * 1.8 + 32}°F<br>${parseFloat(temp) + 273.15}°K`;
	} 
	
	else if (document.getElementById("unit").value === "kelvin") 
	{
	  document.getElementById("result").innerHTML = `${(temp - 273.15) * 1.8 + 32}°F<br>${parseFloat(temp) - 273.15}°C`;
	}

}
  
  function isValidNumber(value)
   {
	return !isNaN(parseFloat(value)) && isFinite(value);

   }
  
