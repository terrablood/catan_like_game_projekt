

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
        a.push(0);
        // a[i].classList.add('mező');
    }
    for (let i = 0; i < 192; i++) {
        a.push(1);
        // a[i].classList.add('erdő');

    }
    for (let i = 0; i < 128; i++) {
        a.push(2);
        // a[i].classList.add('hegység');

    }
    for (let i = 0; i < 64; i++) {
        a.push(3);
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
            let cell = [];
            console.log(biom);
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
    let biomokk = keveres(biomok());// ez dönti el hogy melyik biomból menyi van és hol
    let lelohelyee = keveres(lelohelyek());// ez mutatja, hogy lelőhely-e
    let kockaszamm = keveres(kockaszam());// ez tárolja,, hogy melyik koordinátának mi a száma
    let claimm = keveres(claim());// megmutatja, hogy claimelve vvan e és ki által
    let foglaltt = keveres(foglalt());// megmutatja hogy foglalt-e a terület
    return matrixhajtogatas(biomokk,lelohelyee,kockaszamm,claimm,foglaltt)
}
function balkatt(){
    alert("balkatt!")
}
function jobbkatt(){
    alert("jobbkatt!")
}

function divek_szinezese(map){
    let container = document.querySelector(".container");

        for (let y = 0; y < 24; y++) {
            for (let x = 0; x < 24; x++) {
                if(map[x][y][0] == 0) // ha azt látod, hogy nulla, akkor legyen "mező a class"
                    container[x,y].classList.add('mező') // a[i].classList.add('mező');
                if(map[x][y][0] == 1)
                    container[x,y].classList.add('erdő')
                if(map[x][y][0] == 2)
                    container[x,y].classList.add('hegység')
                if(map[x][y][0] == 3)
                    container[x,y].classList.add('mocsár')
            }
        }
                // div.id    "14 17"
                 // split?   ["14", "17"]
                 // x = 14
                 // y = 17

                 // ez lesz a biom számkódja.
}

// alert("huhu");
divek_letrehozasa(24,24);
let map = randommapgen();
divek_szinezese(map);
