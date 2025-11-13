// ez dönti el hogy melyik biomból menyi van és hol
let biomok = biomok();
// ez mutatja, hogy lelőhely-e
let lelohelye = lelohelyek();
// ez tárolja,, hogy melyik koordinátának mi a száma
let kockaszam = kockaszam();
// megmutatja, hogy claimelve vvan e és ki által
let claim = claim();
// megmutatja hogy foglalt-e a terület
let foglalt = foglalt();


// 24*24 = 576
function biomok(){ 
    let a = [];
    // mező 192 -> 1
    // erdő 192 -> 2
    // hegység 128 -> 3
    // mocsár 64 -> 4
    
    for (let i = 0; i < 192; i++) {
        a.push(1);
    }
    for (let i = 0; i < 192; i++) {
        a.push(2);
    }
    for (let i = 0; i < 128; i++) {
        a.push(3);
    }
    for (let i = 0; i < 64; i++) {
        a.push(4);
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
    for (let i = 0; i < (24*24); i++) {
        a[i] = 0;
    }
    return a;
}
function claim(){
    let a = [];
    for (let i = 0; i < (24*24); i++) {
        a[i] = 0;
    }
    return a;
}
function foglalt(){
    let a = [];
    for (let i = 0; i < (24*24); i++) {
        a[i] = 0;
    }
    return a;
}
