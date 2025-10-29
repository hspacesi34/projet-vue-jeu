export default class Pokemon {
    constructor(name, img, hp) {
        this.name = name;
        this.img = img;
        this.hp = hp;
        this.degats = [10, 15];
    }
    attack(opponent){
        let damage = this.degats[0] + Math.floor(Math.random()*(this.degats[1]-this.degats[0]));
        opponent.hp -= damage;
        // console.log("Dégâts infligé a l'adversaire : " + damage);
        let message = '';
        if (opponent.name == 'Opponent') {
            message = "Dégâts infligé a l'adversaire : " + damage;
        } else {
            message = "Dégâts infligé au joueur : " + damage;
        }
        return message;
    }
    specialAttack(opponent){
        let damage = this.degats[0] + Math.floor(Math.random()*(this.degats[1]-this.degats[0]));
        opponent.hp -= damage * 2;
        // console.log("Dégâts spéciaux infligé a l'adversaire : " + damage);
        let message = '';
        if (opponent.name == 'Opponent') {
            message = "Dégâts spéciaux infligé a l'adversaire : " + damage * 2;
        } else {
            message = "Dégâts spéciaux infligé a l'adversaire : " + damage * 2;
        }
        return message;
    }
      heal(){
        let healValue = 10;
        let HpAfterHeal =   parseInt(this.hp + healValue);

        if(this.hp >= 100 || HpAfterHeal > 100){
            this.hp = 100;
        } else {
            this.hp += healValue;
        }
        return "Player soigné de " + healValue + " HP";
    } 
}