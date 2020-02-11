var antwoorden = ["parijs", 8, "ijsselmeer"];



function check() {
    if ( document.getElementById("antwoord1").value== antwoorden[0] && 
        document.getElementById("antwoord2").value== antwoorden[1] && 
        document.getElementById("antwoord3").value== antwoorden[2])  {
            document.getElementById("correct").innerHTML="correct";
    }
    else {
        document.getElementById("correct").innerHTML="fout";
    }
}