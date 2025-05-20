function guessTheNumber() {
    let number = Math.floor(Math.random() * (10));
    number++;
    // console.log(number);
    for (let index = 0; index < 3; index++) {
        console.log(index);
        let userPrompt = prompt(`Deviner un nombre entre 1 et 10 | il te reste ${3 - index} essay`);
        if (Number.isInteger(Number(userPrompt))) {
            if (number == userPrompt) {
                console.log("gg");
                document.body.style.background = "rgb(0, 254, 4)";
                return `gg roger! c'etait bien ${number}`;
            }
            else {
                console.log(number);
                document.body.style.background = "rgb(254, 0, 51)";
                // The following if statement was inspierd by Ilyas
                if (index < 2) {
                    if (userPrompt < number) {
                        alert(`c'est +`);
                    } else {
                        alert(`c'est -`);
                    }
                };

            };
        } else {
            window.close();
        }
    };
    return number;
}

document.getElementById("rep").innerHTML = guessTheNumber();

// // correction du boutton

const button = document.getElementById("myBtn")
button.addEventListener("click", () => {
    document.body.style.background = "rgb(255, 255, 255)";
    document.getElementById("rep").innerHTML = "";
    setTimeout(() => {
        document.getElementById("rep").innerHTML = guessTheNumber();
    }, "200");
})