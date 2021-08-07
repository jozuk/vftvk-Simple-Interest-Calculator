function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    years = document.getElementById("years").value;

    var output1 = document.getElementById("results1");
    var output2 = document.getElementById("results2");
    var output3 = document.getElementById("results3");
    var output4 = document.getElementById("results4");

    //ans = Math.round(p * Math.pow(1+(r/100) , years))
    ans = Math.round(p * (r/100)) * parseInt(years)
    year = 2021 + parseInt(years)

    output1.innerHTML = "If you deposit " + p + ",";
    output2.innerHTML = "at an interest rate of " + r + "%.";
    output3.innerHTML = "You will receive an amount of " + ans + ",";
    output4.innerHTML = "in the year of " + year + ".";

    
}
        
function updateTextInput(val) {
    document.getElementById('current_rate').value=val; 
  }


