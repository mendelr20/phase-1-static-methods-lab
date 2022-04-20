class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]+/g, "");
  }

  static titleize(string){
    const splitString = string.split(' ')
    const wordList = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let capitalArray = []
    for (let i = 1; i < splitString.length; i++){
      if((wordList.find(element => element === splitString[i])) !== splitString[i]){
        capitalArray.push(this.capitalize(splitString[i]));
      } else {
        capitalArray.push(splitString[i])
      }
    }
    capitalArray.unshift(this.capitalize(splitString[0]))
    return capitalArray.join(' ')
  }
}