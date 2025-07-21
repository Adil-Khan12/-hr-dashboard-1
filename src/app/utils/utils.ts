export function capatalizedFirstCharacter(word:string){
    if (word === '') return "-";
    return word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase();
}

export function generateRandomInt() {
    return Math.floor(Math.random() * 100) + 1;
}
export function getFirstNmae(name:string) {
    let firstName = name.split(" ")
    let fullName = '';
    if (firstName.length > 2) {
        fullName = capatalizedFirstCharacter(firstName[0]) + " " + capatalizedFirstCharacter(firstName[1]);
    }else {
        fullName = capatalizedFirstCharacter(firstName[0])  ;
    }
    return fullName;
}
