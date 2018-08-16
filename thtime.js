module.exports = function (){
    currentUtcTime = new Date(); // This is in UTC
    thTimeZone = new Date(currentUtcTime.toLocaleString('en-US', { timeZone: 'Turkey/Gmt+3' }));
    days = new Array('week', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','week')
    day = thTimeZone.getDay()
    return{
        day : thTimeZone.getDay(),
        days : days[day],
        dayz : days[day+1],
        d : thTimeZone.getDate(),
        month : thTimeZone.getMonth(),
        year : thTimeZone.getFullYear(),
        h : thTimeZone.getHours(),
        m : thTimeZone.getMinutes(),  
        s : thTimeZone.getSeconds()

         }
    }
