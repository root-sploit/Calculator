let input = document.querySelector(".num-input");
let result = document.querySelector(".result-input");
var newInp = "";

let allnum = document.querySelectorAll("button");

for (button of allnum) {
				button.addEventListener("click", e => {
								buttonText = e.target.innerText;
								if(buttonText == "=") {
												newInp = input.value;
												newInp = newInp.replace("×", "*");
												newInp = newInp.replace("÷", "/");
												result.value = eval(newInp);
								}							
								else if(buttonText == 'C') {
												input.value = "";
												newInp = "";
												result.value = "";
								}
								else {
												newInp += buttonText;
												input.value = newInp;
								}								
				});
}


/*
calc.forEach(e => {
				e.addEventListener("click", () => {
								try {
												if (e.classList[1] == "clear"){
																input.value = "";
																result.value = "";
												}	
												else if (e.classList[1] == "back"){																
																index = input.value.charAt(input.selectionStart - 1);
																input.value = input.value.replace(index, "");
																input.focus()																
												}																							
												else if (e.classList[1] == "equal"){
																if (input.value.search("÷") != "-1") { 
																				newInp = input.value.replace("÷", "/");
																				result.value = eval(newInp).toFixed(2);
																} 
																else if (input.value.search("×") != "-1") {
																				newInp = input.value.replace("×", "*");
																				result.value = eval(newInp);
																} 
																else if (input.value.search("%") != "-1") {																
																				let percent = input.value.split("%");
																				result.value = percent[0] / 100 * percent[1];
																}															
																else {																			
																				result.value = eval(input.value);
																}												
																result.style.color = "green";
				    				}
				    				else {
																input.value += e.innerHTML;
												}				    			
				    }	catch (e)	{
												if (e.name == "SyntaxError" ) {
															result.value = "expression error";
															result.style.color = "red";
												}
								}													 							 																																								
				});
});

*/