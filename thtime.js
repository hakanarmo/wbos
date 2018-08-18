module.exports = function (){
    currentUtcTime = new Date(); // This is in UTC
    thTimeZone = new Date(currentUtcTime.toLocaleString('UTC'));
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
