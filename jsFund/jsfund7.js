const basketballGame = {
    score: 0,
    foul: 0,

    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    halfTime() {
        console.log('Halftime score is '+ this.score + " and "+ this.foul);
    },
    numFouls() {
        this.foul +=1 ;
        return this;
    },
    fullFinal()  {
        console.log('Fulltime final score is '+this.score + " and "+ this.foul);
    }
}

basketballGame.basket().freeThrow().numFouls().basket().threePointer().numFouls().halfTime();
basketballGame.threePointer().freeThrow().numFouls().basket().threePointer().fullFinal();