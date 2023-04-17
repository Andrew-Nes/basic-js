const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(bool){
    this.direct = bool;
  }
  encrypt(text, key) {
    if(!text || !key) throw new Error('Incorrect arguments!');
    let encrypted = [];
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let message = text.toUpperCase();
    let code = key.toUpperCase();
    let arrFormMessage = message.split('');
    let counter = 0;
    arrFormMessage.forEach(el => { 
      if (counter == code.length) {counter = 0}
      if(letters.indexOf(el) < 0) encrypted.push(el);
      else {let newindex = letters.indexOf(el) + letters.indexOf(code[counter]);
        console.log(counter);
        if(newindex > 25) {newindex -= 26}
        encrypted.push(letters[newindex]);  
        counter++
      } 
      
    });
    if(this.direct !== false){return encrypted.join('')}
    else return encrypted.reverse().join('');
  }
  decrypt(text, key) {
  let encryptedArr;
  if(!text || !key) throw new Error('Incorrect arguments!');
  encryptedArr = text.toUpperCase().split('');
  let decrypted = [];
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let codeword = key.toUpperCase();
  let counter = 0;
  encryptedArr.forEach(element => { 
    if (counter == codeword.length) {counter = 0}
    if(letters.indexOf(element) < 0) decrypted.push(element);
    else {let decnewindex = letters.indexOf(element) - letters.indexOf(codeword[counter]);
      if(decnewindex < 0) {decnewindex += 26}
      decrypted.push(letters[decnewindex]);  
      counter++
    } 
  });
  if(this.direct !== false){return decrypted.join('')}
  else return decrypted.reverse().join('');
}}


module.exports = {
  VigenereCipheringMachine
};
