const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  let fullList = domains.join(' ');
  let arrOfamtches = [];
  for (i = 0; i < domains.length; i++){
  let domainArr = domains[i].split('.');
  domainArr = domainArr.map((el) => {
      if(domainArr.indexOf(el) == 0)
        return  el;
      else return el = '.'.concat(el); 
      });
  let searcher = '';
     for(j = domainArr.length - 1; j >= 0; j--){
      searcher = domainArr[j] + searcher;
      let regExp = new RegExp(searcher, 'g');
      arrOfamtches.push(searcher + ' ' + fullList.match(regExp).length);
     }
  }
  arrOfamtches = arrOfamtches.map((el) => {
      if(el[0] == '.') return el.slice(1);
      else return el;
  })
  let uniqueMatches = [...new Set(arrOfamtches)];
  uniqueMatches = uniqueMatches.map(el => el.split(' '));
  uniqueMatches.forEach((el) => {
    if (obj[[`${'.' + el[0].split('.').reverse().join('.')}`]] > parseInt(el[1])) return
    else obj[`${'.' + el[0].split('.').reverse().join('.')}`] = parseInt(el[1]);
});
 return obj;
 }

module.exports = {
  getDNSStats
};
