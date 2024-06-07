class Ksiazka{
    constructor(imieAutora, nazwiskoAutora, tytul, rokWydania, iloscWypozyczen) {
    this.imieAutora = imieAutora;
    this.nazwiskoAutora=nazwiskoAutora;
    this.tytul = tytul;
    this.rokWydania = rokWydania;
    this.iloscWypozyczen=iloscWypozyczen;
    }
    tytulKsiazki = function() {
    return this.tytul + " - " + this.autor+" ("+this.rokWydania+")";
    };
    autor=function(){
        return this.imieAutora+" "+this.nazwiskoAutora;
    };

    ksiazkiZRoku=function(rokWydania){
        console.log("Książki wydane w ${rokWydania}:")
        books.forEach(book => {
            if (book.rokWydania==rokWydania) {
                console.log(`${book.tytul} ${book.autor()}`)
            }
        });
    }
    
    zwiekszIloscWypozyczen=function(a){
        this.iloscWypozyczen+=a
    }
    zmiejszIloscWypozyczen=function(a){
        this.iloscWypozyczen-=a
    }
}

let books=[
    new Ksiazka("Autor1","Nazwisko1", "Tytul1", 1984),
    new Ksiazka("Autor2","Nazwisko2", "Tytul2", 1985),
    new Ksiazka("Autor3","Nazwisko3", "Tytul3", 1986),
    new Ksiazka("Autor4","Nazwisko4", "Tytul4", 1987)
]
    
ksiazkiZRoku(1984);


books.forEach(book=> {
    console.log(autor.book)
});