class Player{


    constructor(name, order, wallet, bet, rolledHand, heldHand, activeDice, inTheDoor, score){
        this._name = name
        this.order = order
        this.wallet = wallet
        this.bet = bet
        this.rolledHand = rolledHand
        this.heldHand = heldHand
        this.activeDice = activeDice
        this.inTheDoor = inTheDoor
        this.score = score
    }


    roll(){
        let d1 = Math.floor(Math.random() * 6) + 1
        let d2 = Math.floor(Math.random() * 6) + 1
        let d3 = Math.floor(Math.random() * 6) + 1
        let d4 = Math.floor(Math.random() * 6) + 1
        let d5 = Math.floor(Math.random() * 6) + 1
        let d6 = Math.floor(Math.random() * 6) + 1

        let rollArray = [d1, d2, d3, d4, d5, d6]
        
        this.rolledHand = rollArray
        console.log(`${this._name} rolls ${this.rolledHand}.`)

        return this.rolledHand
    }


    hold(holdThisDie){

        let heldDie = this.rolledHand[holdThisDie]
        console.log(heldDie)

        let heldArray = []

        heldArray.push(heldDie)

        this.heldHand = heldArray
        
        //this.heldHand = this.rolledHand.map(element => element.indexOf === holdThisDie)

         console.log(`${this._name} holds ${this.heldHand} this turn.`)
         return this.heldHand
         
    }


    endTurn(){
        console.log(`${this._name} ends their turn.  They are ${this.inTheDoor}, with a score of ${this.score}.`)
    }
}

const garrett = new Player('Garrett', 1, 100, 0, [], [], false, 0)

garrett.roll()