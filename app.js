require('datejs')

var dates = [];
var maxNumberOfMonths = 12;

const printBonusDatesBetween = (fromYear, toYear) => {
  var count = 0;
  for(var z = fromYear; z < toYear; z++)
  {
    for(var i = 0; i <= maxNumberOfMonths; i++)
    {
      var numberOfDaysInMonth = Date.getDaysInMonth(z, i);
      for(var j = 0; j < numberOfDaysInMonth; j++)
      {
        dates[count] = `${z}${(i+1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}${(j+1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`;
        if(dates[count] === dates[count].split("").reverse().join(""))
        {
          console.log(dates[count].substring(0, 4), "-", dates[count].substring(4,6), "-", dates[count].substring(6,8));
        }
        count++;
      }
    }
  }
}
printBonusDatesBetween(2010, 2015);