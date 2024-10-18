let number1 = 0; /*Platzhalter für die Zahlen*/
let number2 = 0;

function Geld(){/*so werden die Zahlen geholt*/
    let counter500 = 0;
    let counter200 = 0;
    let counter100 = 0; /*counter für die Geldscheine*/
    let counter50 = 0;
    let counter20 = 0;
    let counter10 = 0;
    let counter5 = 0;
    let counter2 = 0;
    let counter1 = 0;

    number1 = document.getElementById("zbetrag").value;
    number2 = document.getElementById("uebetrag").value;

    let c = Number(number2) - Number(number1); /*Differenz ermitteln*/
    
    /*folgendes soll Scheine (ineffizient) ausgeben*/
    do{
        console.log(c);
        if(c >= 500){
            counter500++;
            c = c - 500;
        }
        else if(c >= 200){
            counter200++;
            c = c - 200;
        }
        else if(c >= 100){
            counter100++;
            c = c - 100;
        }
        else if(c >= 50){
            counter50++;
            c = c - 50;
        }
        else if(c >= 20){
            counter20++;
            c = c - 20;
        }
        else if(c >= 10){
            counter10++;
            c = c - 10;
        }
        else if(c >= 5){
            counter5++;
            c = c - 5;
        }
        else if(c >= 2){
            counter2++;
            c = c - 2;
        }
        else if(c >= 1){
            counter1++;
            c = c - 1;
        }
    } while (c > 0);

    let output = document.getElementById("output");/*Textblock erreichen und umändern um Scheine darzustellen*/
    output.innerHTML = counter500 + "x 500€ Schein\n | "
                    + counter200 + "x 200€ Schein\n | "
                    + counter100 + "x 100€ Schein\n | "
                    + counter50 + "x 50€ Schein\n | " 
                    + counter20 + "x 20€ Schein\n | " 
                    + counter10 + "x 10€ Schein\n | " 
                    + counter5 + "x 5€ Schein\n | " 
                    + counter2 + "x 2€ Münze\n | " 
                    + counter1 + "x 1€ Münze\n | ";
}