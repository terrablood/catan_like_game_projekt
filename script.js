

function keveres(l){ // Fisher-Yates-Knuth shuffle
    let i=l.length;
    while(i!=0){
        let j=Math.floor(Math.random()*i);
        i--;
        [l[i], l[j]] = [l[j], l[i]];
    }
}

// 24*24 = 576
function biomok(){ 
    let a = [];
    // mező 192 -> 1
    // erdő 192 -> 2
    // hegység 128 -> 3
    // mocsár 64 -> 4
    
    for (let i = 0; i < 192; i++) {
        a.push(1);
        // a[i].classList.add('mező');
    }
    for (let i = 0; i < 192; i++) {
        a.push(2);
        // a[i].classList.add('erdő');

    }
    for (let i = 0; i < 128; i++) {
        a.push(3);
        // a[i].classList.add('hegység');

    }
    for (let i = 0; i < 64; i++) {
        a.push(4);
        // a[i].classList.add('mocsár');

    }
    return a;
    
}
function lelohelyek(){
    let a = [];
    for (let i = 0; i < 18; i++) {
        a.push(1);
    }
    for (let i = 0; i < 558; i++) {
        a.push(0);
    }

    return a;
}
function kockaszam(){
    let a = [];
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 96; j++) {
        a.push(i);
        }
    }
    return a;
}
function claim(){
    let a = [];
    for (let i = 0; i < (24*24); i++) {
        a.push(0);
    }
    return a;
}
function foglalt(){
    let a = [];
    for (let i = 0; i < (24*24); i++) {
        a.push(0);
    }
    return a;
}
function matrixhajtogatas(biom, lelohely, kockaszam, claim, foglalt)
{
    let index = 0;
    let map = [];
    for (let i = 0; i < 24; i++) {
        let line = [];
        for (let j = 0; j < 24; j++) {
            let cell = []
            cell.push(biom[index]);
            cell.push(lelohely[index]);
            cell.push(kockaszam[index]);
            cell.push(claim[index]);
            cell.push(foglalt[index]);
            index++;
            line.push(cell);
        }
        map.push(line);
    }
    return map;
}
function divek_letrehozasa(x,y){
    let container = document.querySelector(".container");
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            let div = document.createElement("div");
            div.id = `${i} ${j}`;
            div.onclick = balkatt;
            div.onclick = jobbkatt;
            container.appendChild(div);
        }
    }
}
function randommapgen(){
    let biomok = keveres(biomok());// ez dönti el hogy melyik biomból menyi van és hol
    let lelohelye = keveres(lelohelyek());// ez mutatja, hogy lelőhely-e
    let kockaszam = keveres(kockaszam());// ez tárolja,, hogy melyik koordinátának mi a száma
    let claim = keveres(claim());// megmutatja, hogy claimelve vvan e és ki által
    let foglalt = keveres(foglalt());// megmutatja hogy foglalt-e a terület
    return matrixhajtogatas(biomok,lelohelye,kockaszam,claim,foglalt)
}
function balkatt(){
    alert("balkatt!")
}
function jobbkatt(){
    alert("jobbkatt!")
}

function divek_szinezese(map){
    let container = document.querySelector(".container");
        for (const div of container) {
                // div.id    "14 17"
                 // split?   ["14", "17"]
                 // x = 14
                 // y = 17
                 if(map[x][y][0] == 0)
                    container.classList.add('mező')
                  // ez lesz a biom számkódja.
                 // ha azt látod, hogy nulla, akkor legyen "mező a class"
                 // a[i].classList.add('mező');

        }
}

// alert("huhu");
divek_letrehozasa(24,24);
let map = randommapgen();
divek_szinezese(map);
