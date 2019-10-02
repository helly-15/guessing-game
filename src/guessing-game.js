class GuessingGame {
    constructor() {
        this.minRange = 0;
        this.maxRange = 0;
        this.guessTry = 0;
    }

    setRange(min, max) {
        this.minRange=min;
        this.maxRange=max;

    }

    guess() {
        this.guessTry = Math.ceil((this.minRange+this.maxRange)/2);
        return this.guessTry;

    }

    lower() {
        this.maxRange=this.guessTry;

    }

    greater() {
        this.minRange=this.guessTry;

    }
}

module.exports = GuessingGame;
