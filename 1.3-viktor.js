function solve() {
    function fighter(name) {
        let currentObj = {
            name: name,
            health: 100,
            stamina: 100,
            fight: function () {
                this.stamina--
                console.log(`${currentObj.name} slashes at the foe!`);
            }
        }
        return currentObj
    }

    function mage(name) {
        let currentObj = {
            name: name,
            health: 100,
            mana: 100,
            cast: function (spell) {
                currentObj.mana--
                console.log(`${currentObj.name} cast ${spell}`);
            }
        }
        return currentObj
    }

    return {
        fighter,
        mage
    }
}
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
