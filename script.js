level1 = new saving(rewardName1, rewardPrice1);

document.getElementById('levelOneGoal').innerHTML = document.getElementById('levelOneGoal').innerHTML + level1.savingGoal;



class saving {
    rewardName;
    rewardPrice;
    savingGoal;
    goalComplete;

    constructor(nameID, priceID){
        this.rewardName = document.getElementById(nameID).innerHTML;
        this.rewardPrice = document.getElementById(priceID).innerHTML;
        this.savingGoal = priceID*11;
        document.getElementById('levelOneGoal').innerHTML = document.getElementById('levelOneGoal').innerHTML + savingGoal;
    }

    moneySaved(amount){
        if ((savingGoal - amount >= 0)){
            this.savingGoal - amount;
        }

        if(this.savingGoal<=0){
            this.goalComplete = true;
        }
    }
}