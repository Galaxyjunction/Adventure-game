import inquirer from "inquirer";
//Games Variables-----
let enemies = ["Zombie", "Skeleton", "Warrior", "Sniper"];
let maxEnemyHealth = 75;
let attackDamageToHero = 25;
//Player Variable------
let heroHealth = 100;
let attackDamageToEnemy = 50;
let numHealthPotion = 3;
let healthPOtionHealFill = 30;
let healthPotionDropChance = 50;
//While Loop------
let gameRunning = true;
console.log("\n\n-----Welcome to Adventure's Time-----\n");
Game: while (gameRunning) {
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1);
    let enemyIndex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyIndex];
    console.log(`# ${enemy} has apeared #\n`);
    while (enemyHealth > 0) {
        console.log(`#Your health: ${heroHealth}`);
        console.log(`#${enemy} Health: ${enemyHealth} `);
        let options = await inquirer.prompt({
            name: "answer",
            type: "list",
            message: "What would you like to do?",
            choices: ["1. Attack", "2. Take Health Potion", "3. Run"]
        });
        if (options.answer === "1. Attack") {
            let attackDamageToEnemy = 50;
            let damageToEnemy = Math.floor(Math.random() * attackDamageToEnemy + 1);
            let damageToHero = Math.floor(Math.random() * attackDamageToHero + 1);
            enemyHealth -= damageToEnemy;
            heroHealth -= damageToHero;
            console.log(`You strike the ${enemy} for ${damageToEnemy}.`);
            console.log(`${enemy} strike you ${damageToHero} damage.`);
            if (heroHealth < 1) {
                console.log("You are too weak to continue.");
                break;
            }
        }
        else if (options.answer === "2. Take Health Potion.") {
            if (numHealthPotion > 0) {
                heroHealth += healthPOtionHealFill;
                numHealthPotion--;
                console.log(`You used health Potion for ${healthPOtionHealFill}`);
                console.log(`You have ${heroHealth} health now.`);
                console.log(`You have ${numHealthPotion} health potion left.`);
            }
            else {
                console.log("You have no health potion left. You have to defeat enemy to get a health potion.");
            }
        }
        else if (options.answer === "3. Run") {
            console.log(`You have ran from ${enemy}.`);
            continue Game;
        }
    }
    if (heroHealth < 1) {
        console.log("You are out of game. You were too weak.");
        break;
    }
    console.log(`${enemy} was deafeated.`);
    console.log(`You have ${heroHealth} health now.`);
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    if (randomNumber < healthPotionDropChance) {
        numHealthPotion++;
        console.log("You have gotten a health potion.");
        console.log(`Your health is ${heroHealth}`);
        console.log(`You have ${numHealthPotion} health potion.`);
    }
    let userOption = await inquirer.prompt({
        name: "answer",
        type: "list",
        message: "What would you like to do now?",
        choices: ["1. Continue", "2.Exit"]
    });
    if (userOption.answer === "1. Continue") {
        console.log("You are continue on Adventure's Time.");
    }
    else {
        console.log("you took Exit from Adeventure's Time.");
        break;
    }
    console.log("Thnks for Playing Adventure's Time.\n");
}
