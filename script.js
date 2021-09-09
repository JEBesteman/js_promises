// opdracht JS: Promises – Maken, gebruiken, begrijpen

// Zie onderstaande voorbeeld om het verschil te zien tussen een Promise die aangemaakt wordt en  en hoe deze Promise aangeroepen en "behandeld" dient te worden
// (een Promise is een "belofte", en hierbij biedt Sinterklaas je dus de belofte voor een nieuwe iPhone 11 - als je braaf bent geweest).

// Kopieer en plak de code in je code editor en bestudeer wat er gebeurd. 


const sinterklaasIsGul = true;

// Promise maken (dit hoeven jullie dus niet te leren, dit is aan de API (back-end) kant)
const krijgIkEenNieuweiPhone = new Promise(
    (resolve, reject) => {
        if (sinterklaasIsGul) {
            const smartphone = {
                merk: 'Apple',
                type: 'iPhone 11'
            };
            resolve(smartphone);
        } else {
            const metWelkeReden = new Error('Je bent stout geweest, geen cadeaus voor jou');
            reject(metWelkeReden);
        }

    }
);

// Promise aanroepen, of "consumeren" (dit zullen je dus wel doen en moeten leren)
const vraagAanSinterklaas = () => {
    krijgIkEenNieuweiPhone
        .then(function (resolved) {
            // yay, je hebt een nieuwe smartphone
            console.log(resolved);
        })
        .catch(function (error) {
            // oeps, geen Sinterklaas cadeau dit jaar
            console.log(error.message);
        });
}

vraagAanSinterklaas();

//sinterklaasIsGul = 
//true { merk: 'Apple', type: 'iPhone 11'}
//false Je bent stout geweest, geen cadeaus voor jou