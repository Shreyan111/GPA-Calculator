function publishResult(){
    flag=-1;
    document.getElementById("error").innerHTML="";
    const English=document.getElementById("English").value ;
    if (English>100 || English<0){
        document.getElementById("error").innerHTML="ERROR!!";
        flag=0;
    }
    const Physics=document.getElementById("Physics").value;
    if (Physics>100 || Physics<0){
        document.getElementById("error").innerHTML="ERROR!!";
        flag=0;
    }
    const Maths=document.getElementById("Maths").value;
    if (Maths>100 || Maths<0){
        document.getElementById("error").innerHTML="ERROR!!";
        flag=0;
    }
    const Programming=document.getElementById("Programming").value;
    if (Programming>100 || Programming<0){
        document.getElementById("error").innerHTML="ERROR!!";
        flag=0;
    }
    const Chemistry=document.getElementById("Chemistry").value;
    if (Chemistry>100 || Chemistry<0){
        document.getElementById("error").innerHTML="ERROR!!";
        flag=0;
    }

    let total= parseFloat(Maths) + parseFloat(Physics) + parseFloat(English) + parseFloat(Programming) + parseFloat(Chemistry);
    let percentage=(total*100)/500;
    if (flag != 0){
        if (percentage>=90) {
            document.getElementById("grade").innerHTML="You are Passed with A Grade";
        }
        else if (percentage>=80) {
            document.getElementById("grade").innerHTML="You are Passed with B Grade";
        }
        else if (percentage>=70) {
            document.getElementById("grade").innerHTML="You are Passed with C Grade";
        }
        else if (percentage>=60) {
            document.getElementById("grade").innerHTML="You are Passed with D Grade";
        }
        else if (percentage>=50) {
            document.getElementById("grade").innerHTML="You are Passed with E Grade";
        }
        else{
            document.getElementById("grade").innerHTML="You are Failed";

        }
    }
    else{
       document.getElementById("grade").innerHTML=""; 
    }
}