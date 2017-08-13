//Print Keywords for user
console.log("Keywords");
console.log("To convert Farenheit to Celsius Type F");
console.log("To convert Celsius to Farenheit Type C");
//Creat vars
var Farenheit = "F";
var Celsius = "C";
//Ask user for input        
console.WriteLine(Environment.NewLine);
var Input = prompt("Please type in one of the Keywords", "Type here");
//Inform the user of what they chose

if (Input == Farenheit)
    {
    var con;
    if (confirm(" You wish to convert Farenheit to Celsius")==true); {
    
            con = "Starting conversion";
   
//Convert Input
F = parseFloat(Input)
console.WriteLine(Input + "Farenheit = "+ F + "Celcius")
//Print Result
    }
    {
    con = "Canceling conversion";
    
}

}
if (input == Celsius)
   {
       
       var con;
    if (confirm("You wish to convert Celsius to Farenheit")==true);
//Convert Input

//Print Result
   }
//End
console.WriteLine("Program Ending, Thank you");