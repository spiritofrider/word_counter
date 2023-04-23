const prompt = require("prompt-sync")({ sigint: true });
const age = prompt("Enter your statement here: ");
const countSpaces = () => {
    return age.split(" ").length - 1;
};
console.log(`You have entered ${age.length} number of characters with ${countSpaces()} spaces` );
