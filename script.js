function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    if(principal>0){
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);

        var result = `<div>
        <span>If you deposit <mark>${principal}</mark>,</span><br/>
        <span>at an interest rate of <mark>${rate}</mark>.</span><br/>
        <span>You will receive an amount of <mark>${interest}</mark>,</span><br/>
        <span>in the year <mark>${year}</mark></span><br/>
        </div>`;
        document.getElementById("result").innerHTML = result;
    } else {
        window.alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=`${rateval}%`;
}
        