const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let err = new Error('Invalid date!');
  if(!date){
    return 'Unable to determine the time of year!'
  }
  if(date.hasOwnProperty('getMonth') == true) throw err;
  if(date.hasOwnProperty('toString') == true) throw err;
  if (date instanceof Date && isNaN(date) || Object.prototype.toString.call(date) !== "[object Date]") {
    throw err;
  }
  let seasons = ['winter', 'spring', 'summer', 'autumn', 'winter'];
  let month = date.getMonth();
  return seasons[Math.floor((month + 1) / 3)];
}

module.exports = {
  getSeason
};
