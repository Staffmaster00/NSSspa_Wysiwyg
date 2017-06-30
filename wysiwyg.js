var outputEl = document.getElementById("outputEl");
let input = document.getElementById("userInput");
let personObjArr = [{
    title: "Warlord",
    name: "Lü Bu",
    bio: "Although Lü Bu is described in historical and fictional sources as an exceptionally mighty warrior, he was also notorious for his temperamental behaviour. He switched allegiances erratically and freely betrayed his allies, and was noted for his poor planning and management skills. He was always suspicious of others and could not control his subordinates. All these factors ultimately led to his downfall. In the 14th-century historical novel Romance of the Three Kingdoms, the details of his life are dramatised and some fictitious elements – including his romance with the fictional maiden Diaochan – are added to portray him as a nearly unchallenged warrior who was also a ruthless and impulsive brute bereft of morals.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/L%C3%BC_Bu_Portrait.jpg",
    lifespan: {
        birth: "Unknown",
        death: "199"
    }
}, {
    title: "Rōnin",
    name: "Miyamoto Musashi",
    bio: "Miyamoto Musashi (宮本 武蔵), also known as Shinmen Takezō, Miyamoto Bennosuke or, by his Buddhist name, Niten Dōraku, was an expert Japanese swordsman and rōnin. Musashi, as he was often simply known, became renowned through stories of his excellent and unique double-bladed swordsmanship and undefeated record in his 60 duels (next is 33 by Itō Ittōsai). He was the founder of the Hyōhō Niten Ichi-ryū or Niten-ryū style of swordsmanship and in his final years authored The Book of Five Rings (五輪の書 Go Rin no Sho), a book on strategy, tactics, and philosophy that is still studied today.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Musashi_ts_pic.jpg",
    lifespan: {
        birth: "1584",
        death: "1645"
    }
}, {
    title: "Daichin",
    name: "Khutulun",
    bio: "Khutulun, also known as Aigiarne, Aiyurug, Khotol Tsagaan or Ay Yaruq (literally Moonlight) was the most famous daughter of Kaidu, a cousin of Kublai Khan. Marco Polo described Khutulun as a superb warrior, one who could ride into enemy ranks and snatch a captive as easily as a hawk snatches a chicken. She assisted her father in many battles, particularly against the Yuan Dynasty of her cousin the Great Khan - Kublai. Khutulun insisted that any man who wished to marry her must defeat her in wrestling. Winning horses from competitions and the wagers of would-be suitors, it is said that she gathered a herd numbering the ten thousand.",
    image: "https://s-media-cache-ak0.pinimg.com/originals/9a/31/88/9a318825d440ec2e5df31482e481b67f.jpg",
    lifespan: {
        birth: "1260",
        death: "1306"
    }
}, {
    title: "King",
    name: "Ram Khamhaeng",
    bio: "Ram Khamhaeng was a son of Prince Bang Klang Hao, who ruled as King Sri Indraditya, and his Queen, Sueang, though folk legend claims his real parents were an ogress named Kangli and a fisherman. At age 19, Prince Ram Khamhaeng participated in his father's successful invasion of the city of Sukhothai, formerly a vassal of the Khmer, establishing the independent Sukhothai Kingdom. Due to his courage in the war, he allegedly was given the title Phra Rama Khamhaeng (Rama the Strong). According to conventional Thai history, Ram Khamhaeng developed the Thai alphabet (Lai Sue Thai) from Sanskrit, Pali, and the Grantha alphabet. His rule is often cited by supporters of the Thai monarchy as evidence of a benevolent monarchy that exists even today.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ramkhamhaeng_the_Great.jpg",
    lifespan: {
        birth: "1237-1247",
        death: "1298-1317"
    }
}, {
    title: "Prime Minister",
    name: "Lee Kuan Yew",
    bio: "Commonly referred to by his initials LKY, was the first Prime Minister of Singapore, governing for three decades. Lee is recognised as the nation's founding father, with the country described as transitioning from the third world to first world in a single generation under his leadership. Lee co-founded the People's Action Party (PAP) in 1954 and was its first secretary-general until 1992, leading the party to eight consecutive victories. Lee eschewed populist policies in favor of pragmatic long-term social and economic measures. With meritocracy and multiracialism as governing principles, Lee made English the common language to integrate its immigrant society and to facilitate trade with the West, whilst mandating bilingualism in schools to preserve students' mother tongue and ethnic identity. Lee's rule was criticised, for curtailing civil liberties (public protests, media control) and bringing libel suits against political opponents. He argued that such disciplinary measures were necessary for political stability, which together with rule of law, were essential for economic progress.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Lee_Kuan_Yew.jpg",
    lifespan: {
        birth: "1923",
        death: "2015"
    }
}];
for (var c = 0; c < 5; c++) {
    // Give each person element a unique identifier
    outputEl.innerHTML +=
        `<article class="person__container" id="person--${c}">
                <div class="personDiv"><br>
                  <header class="cred">${personObjArr[c].title} ${personObjArr[c].name}</header><br>
                  <section class="bio"><img src=${personObjArr[c].image} alt="person" class="pic"><br><p class="words">${personObjArr[c].bio}</p></section><br>
                  <footer class="lifespan">Birth:${personObjArr[c].lifespan.birth}<br>Death:${personObjArr[c].lifespan.death}</footer>
                </div>
            </article>`
};

// Now containerEl will have elements in it
// Event listeners are created
var containerEl = document.getElementsByClassName("person__container");

for (var i = 0; i < containerEl.length; i++) {
    // console.log("containerEl outside EventListen", containerEl[i]);
    containerEl[i].addEventListener("click", function() { //need keyup part for the text changes
        // console.log("eventarget", event.target);
        // console.log("containerEl inside EventListen but out of loop", containerEl[i]);
        for (i = 0; i < containerEl.length; i++){
        containerEl[i].classList.remove("dotted")
        // console.log("containerEl inside Loop", containerEl[i]);
        }
        //have to use a for loop to see i
        //event current target works
        event.currentTarget.classList.toggle("dotted")
        // Logic to execute when the element is clicked
        input.value = "";
        input.focus();
        // console.log("event", event.currentTarget.className);
    })
}
// console.log("dotted");
input.addEventListener("keyup", function() {
    for (i = 0; i < containerEl.length; i++){
        if (containerEl[i].className === "person__container dotted") { //TODO: figure out how to unhighlight html elements
                    let inputLocation = containerEl[i].querySelector(".words");
                    inputLocation.innerText = input.value;
                    console.log("inputlocation", inputLocation);

            }
        }
})

input.addEventListener("keyup", function(event) {
    if (event.keycode === 13) {
            input.value = "";
        }
})
