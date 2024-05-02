// Arrow functions
function regularFunction() {
    console.log(this);
}

const arrowFunction = () => {
    console.log(this);
};

const obj = {
    hello: regularFunction,
    greeting: arrowFunction
};

obj.hello();

obj.greeting();


// Promises
let lottery = new Promise ((resolve, reject) => {
    console.log("Lottery is happening!");

    setTimeout(() => {
        if(Math.random() >= 0.95) {
            resolve("You've Won!");
        } else {
            reject(new Error("Better luck next time."));
        }
    }, 5000);
});

lottery.then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err);
});

async function wpm(speed) {
    return new Promise ((resolve, reject) => {
        console.log("Calculating wpm...");

        setTimeout(() => {
            if(speed >= 80) {
                resolve("I practiced every day.");
            } else {
                reject(new Error("I slept."));
            }
        }, 2000);
    });
}

wpmList = [70, 100, 110]
for (wordsPerMin of wpmList) {
    console.log(wordsPerMin)
    wpm(wordsPerMin)
        .then(() => {
            console.log("I reached my goal");
        }).catch((err) => {
            console.log("Error:", err);
        });
}