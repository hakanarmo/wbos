module.exports = function (){
    currentUtcTime = new Date(); // This is in UTC
    trTimeZone = new Date(currentUtcTime.toLocaleString('en-US', { timeZone: 'Turkey/Gmt+3' }));
    days = new Array('week', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','week')
    day = trTimeZone.getDay()
    return{
        day : trTimeZone.getDay(),
        days : days[day],
        dayz : days[day+1],
        d : trTimeZone.getDate(),
        month : trTimeZone.getMonth(),
        year : trTimeZone.getFullYear(),
        h : trTimeZone.getHours(),
        m : trTimeZone.getMinutes(),  
        s : trTimeZone.getSeconds()

         }
    }
