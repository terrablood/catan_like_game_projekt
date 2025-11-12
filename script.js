// ez dönti el hogy melyik biomból menyi van és hol
let biomok = csupanullalista();
// ez mutatja, hogy lelőhely-e
let lelohelye = csupanullalista();
// ez tárolja,, hogy melyik koordinátának mi a száma
let kockaszam = csupanullalista();
// megmutatja, hogy claimelve vvan e és ki által
let claim = csupanullalista();
// megmutatja hogy foglalt-e a terület
let foglalt = csupanullalista();



function biomok(){
    let a = [];
    for (let i = 0; i < (24*24); i++) {
        a[i] = 0;
    }
    return a;
}
function lelohelyek(){
    let a = [];
    for (let i = 0; i < (24*24); i++) {
        a[i] = 0;
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
