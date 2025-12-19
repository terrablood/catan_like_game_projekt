

function keveres(l){ // Fisher-Yates-Knuth shuffle
    let i=l.length;
    while(i!=0){
        let j=Math.floor(Math.random()*i);
        i--;
        [l[i], l[j]] = [l[j], l[i]];
    }
    return l;
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
    for (let i = 1; i < 7; i++) {
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
            div.id = `${i}_${j}`;
            div.onclick = balkatt;
            div.classList.add("mezo")
            container.appendChild(div);
        }
    }
}// id meg kell próbálnom beilleszteni a szinezést a generáláson bélűlre!
function randommapgen(){
    let a = biomok();
    let biomokk = keveres(a);// ez dönti el hogy melyik biomból menyi van és hol
    let b = lelohelyek();
    let lelohelyee = keveres(b);// ez mutatja, hogy lelőhely-e
    let c = kockaszam();
    let kockaszamm = keveres(c);// ez tárolja,, hogy melyik koordinátának mi a száma
    let d = claim();
    let claimm = keveres(d);// megmutatja, hogy claimelve vvan e és ki által
    let e = foglalt();
    let foglaltt = keveres(e);// megmutatja hogy foglalt-e a terület
    let f = matrixhajtogatas(biomokk,lelohelyee,kockaszamm,claimm,foglaltt)
    return f;
}
function balkatt(){
    alert("balkatt!")
}
function jobbkatt(){
    alert("jobbkatt!")
}
/*
function divek_szinezese(map){
    let container = document.querySelector(".container");

        for (let y = 0; y < 24; y++) {
            for (let x = 0; x < 24; x++) {
                if(map[x][y][0] == 0) // ha azt látod, hogy nulla, akkor legyen "mező a class"
                    container[x][y].classList.add('mező') // a[i].classList.add('mező');
                if(map[x][y][0] == 1)
                    container[x][y].classList.add('erdő')
                if(map[x][y][0] == 2)
                    container[x][y].classList.add('hegység')
                if(map[x][y][0] == 3)
                    container[x][y].classList.add('mocsár')
            }
        }
}
function divek_szinezese(map){

    for (let y = 0; y < 24; y++) {
        for (let x = 0; x < 24; x++) {

            let div = document.getElementById(`${x}_${y}`);
            let biom = map[y][x][0];

            if (biom === 0) div.classList.add('mezo');
            if (biom === 1) div.classList.add('erdo');
            if (biom === 2) div.classList.add('hegyseg');
            if (biom === 3) div.classList.add('mocsar');
        }
    }
}
*/
function resources() //kreál egy üres resources listát
{
    let resources = [];
    resources.add(0)// barany
    resources.add(0)// fa
    resources.add(0)// szovet
    resources.add(0)// ko
    resources.add(0)// erc
    return resources;
}
function addon(mit, mennyit, hova) // a resource listát írja át
{
    if(mit == "barany")
    {
        hova[0] += mennyit;
    }
    if(mit == "fa")
    {
        hova[1] += mennyit;
    }
    if(mit == "szovet")
    {
        hova[2] += mennyit;
    }
    if(mit == "ko")
    {
        hova[3] += mennyit;
    }
    if(mit == "erc")
    {
        hova[4] += mennyit;
    }
}
function elvesz(mit, mennyit, hova) // a resource listát írja át
{
    if(mit == "barany")
    {
        hova[0] -= mennyit;
    }
    if(mit == "fa")
    {
        hova[1] -= mennyit;
    }
    if(mit == "szovet")
    {
        hova[2] -= mennyit;
    }
    if(mit == "ko")
    {
        hova[3] -= mennyit;
    }
    if(mit == "erc")
    {
        hova[4] -= mennyit;
    }
}
function claiming(x,y,claimlist)
{
    claimlist.add[x][y];
}
function kockadobas(){
    let a = random(1,6);
    return a;
}
function csekkol(map, szam){
    let l = []
    if(map[x][y][3] == szam)
    {
        l.add(map[x][y][1])
    }
}
document.addEventListener("DOMContentLoaded", () => {
    divek_letrehozasa(24,24);
    let map = randommapgen();
    
});