const timestart = require("./thtime")
const databoss = require("./databoss")

module.exports = function() {

    var day = timestart().day
    var h = timestart().h
    var m = timestart().m
    switch (day) {
   /*week*/   case 0 :
                  if (h == 0 && m < 30){                          //< 00.30 น
                    return{
                             boss : databoss.day0.b00[0],         
                             t : '00:30',
                             imgboss : databoss.day0.b00[1] }
                  }else if ((h == 0 && m >= 30) || (h >= 1 && h < 6)){                   //> 00.30 น - 6.00 น
                    return{
                             boss : databoss.day0.b06[0],         
                             t : '06:00',
                             imgboss : databoss.day0.b06[1] }
                  }else if (h >= 6 && h < 10){
                    return{
                             boss : databoss.day0.b10[0],
                             t : '10:00',
                             imgboss : databoss.day0.b10[1] }
                  }else if (h >= 10 && h < 14){
                    return{
                             boss : databoss.day0.b14[0],
                             t : '14:00',
                             imgboss : databoss.day0.b14[1] }
                  }else if (h >= 14 && h < 19){
                    return{
                             boss : databoss.day0.b19[0],
                             t : '19:00',
                             imgboss : databoss.day0.b19[1] }
                   }else if (h >= 19 && h < 23){
                    return{
                             boss : databoss.day0.b23[0],
                             t : '23:00',
                             imgboss : databoss.day0.b23[1] }    
                  }else if (h == 23) {
                    return{
                             boss : databoss.day1.b00[0],         //ตัวของเช้าวันถัดไป
                             t : '00:30',
                             imgboss : databoss.day1.b00[1] }
                  }
                  break   
    /*Monday*/    case 1:
                  if (h == 0 && m < 30){                          //< 00.30 น
                    return{
                             boss : databoss.day1.b00[0],         
                             t : '00:30',
                             imgboss : databoss.day1.b00[1] }
                  }else if ((h == 0 && m >= 30) || (h >= 1 && h < 6)){                   //> 00.30 น - 6.00 น
                    return{
                             boss : databoss.day1.b06[0],         
                             t : '06:00',
                             imgboss : databoss.day1.b06[1] }
                  }else if (h >= 6 && h < 10){
                    return{
                             boss : databoss.day1.b10[0],
                             t : '10:00',
                             imgboss : databoss.day1.b10[1] }
                  }else if (h >= 10 && h < 14){
                    return{
                             boss : databoss.day1.b14[0],
                             t : '14:00',
                             imgboss : databoss.day1.b14[1] }
                  }else if (h >= 14 && h < 19){
                    return{
                             boss : databoss.day1.b19[0],
                             t : '19:00',
                             imgboss : databoss.day1.b19[1] }
                   }else if (h >= 19 && h < 23){
                    return{
                             boss : databoss.day1.b23[0],
                             t : '23:00',
                             imgboss : databoss.day1.b23[1] }    
                  }else if (h == 23) {
                    return{
                             boss : databoss.day2.b00[0],         //ตัวของเช้าวันถัดไป
                             t : '00:30',
                             imgboss : databoss.day2.b00[1] }
                  }
                  break
    /*Tuesday*/   case 2:
                  if (h == 0 && m < 30){                          //< 00.30 น
                    return{
                             boss : databoss.day2.b00[0],         
                             t : '00:30',
                             imgboss : databoss.day2.b00[1] }
                  }else if ((h == 0 && m >= 30) || (h >= 1 && h < 6)){                   //> 00.30 น - 6.00 น
                    return{
                             boss : databoss.day2.b06[0],         
                             t : '06:00',
                             imgboss : databoss.day2.b06[1] }
                  }else if (h >= 6 && h < 10){
                    return{
                             boss : databoss.day2.b10[0],
                             t : '10:00',
                             imgboss : databoss.day2.b10[1] }
                  }else if (h >= 10 && h < 14){
                    return{
                             boss : databoss.day2.b14[0],
                             t : '14:00',
                             imgboss : databoss.day2.b14[1] }
                  }else if (h >= 14 && h < 19){
                    return{
                             boss : databoss.day2.b19[0],
                             t : '19:00',
                             imgboss : databoss.day2.b19[1] }
                   }else if (h >= 19 && h < 23){
                    return{
                             boss : databoss.day2.b23[0],
                             t : '23:00',
                             imgboss : databoss.day2.b23[1] }    
                  }else if (h == 23) {
                    return{
                             boss : databoss.day3.b00[0],         //The next morning
                             t : '00:30',
                             imgboss : databoss.day3.b00[1] }
                  }
                  break
   /*Wednesday*/      case 3 :
                  if (h == 0 && m < 30){                          //< 00.30 น
                    return{
                             boss : databoss.day3.b00[0],         
                             t : '00:30',
                             imgboss : databoss.day3.b00[1] }
                  }else if ((h == 0 && m >= 30) || (h >= 1 && h < 6)){                   //> 00.30 น - 6.00 น
                    return{
                             boss : databoss.day3.b06[0],         
                             t : '06:00',
                             imgboss : databoss.day3.b06[1] }
                  }else if (h >= 6 && h < 10){
                    return{
                             boss : databoss.day3.b10[0],
                             t : '10:00',
                             imgboss : databoss.day3.b10[1] }
                  }else if (h >= 10 && h < 14){
                    return{
                             boss : databoss.day3.b14[0],
                             t : '14:00',
                             imgboss : databoss.day3.b14[1] }
                  }else if (h >= 14 && h < 19){
                    return{
                             boss : databoss.day3.b19[0],
                             t : '19:00',
                             imgboss : databoss.day3.b19[1] }
                   }else if (h >= 19 && h < 23){
                    return{
                             boss : databoss.day3.b23[0],
                             t : '23:00',
                             imgboss : databoss.day3.b23[1] }    
                  }else if (h == 23) {
                    return{
                             boss : databoss.day4.b00[0],         //The next morning
                             t : '00:30',
                             imgboss : databoss.day4.b00[1] }
                  }
                  break
    /*Thursday*/      case 4 :
                  if (h == 0 && m < 30){                          //< 00.30 น
                    return{
                             boss : databoss.day4.b00[0],         
                             t : '00:30',
                             imgboss : databoss.day4.b00[1] }
                  }else if ((h == 0 && m >= 30) || (h >= 1 && h < 6)){                   //> 00.30 น - 6.00 น
                    return{
                             boss : databoss.day4.b06[0],         
                             t : '06:00',
                             imgboss : databoss.day4.b06[1] }
                  }else if (h >= 6 && h < 10){
                    return{
                             boss : databoss.day4.b10[0],
                             t : '10:00',
                             imgboss : databoss.day4.b10[1] }
                  }else if (h >= 10 && h < 14){
                    return{
                             boss : databoss.day4.b14[0],
                             t : '14:00',
                             imgboss : databoss.day4.b14[1] }
                  }else if (h >= 14 && h < 19){
                    return{
                             boss : databoss.day4.b19[0],
                             t : '19:00',
                             imgboss : databoss.day4.b19[1] }
                   }else if (h >= 19 && h < 23){
                    return{
                             boss : databoss.day4.b23[0],
                             t : '23:00',
                             imgboss : databoss.day4.b23[1] }    
                  }else if (h == 23) {
                    return{
                             boss : databoss.day5.b00[0],         //The next morning
                             t : '00:30',
                             imgboss : databoss.day5.b00[1] }
                  }
                  break
    /*Friday*/     case 5 :
                  if (h == 0 && m < 30){                          //< 00.30 น
                    return{
                             boss : databoss.day5.b00[0],         
                             t : '00:30',
                             imgboss : databoss.day5.b00[1] }
                  }else if ((h == 0 && m >= 30) || (h >= 1 && h < 6)){                   //> 00.30 น - 6.00 น
                    return{
                             boss : databoss.day5.b06[0],         
                             t : '06:00',
                             imgboss : databoss.day5.b06[1] }
                  }else if (h >= 6 && h < 10){
                    return{
                             boss : databoss.day5.b10[0],
                             t : '10:00',
                             imgboss : databoss.day5.b10[1] }
                  }else if (h >= 10 && h < 14){
                    return{
                             boss : databoss.day5.b14[0],
                             t : '14:00',
                             imgboss : databoss.day5.b14[1] }
                  }else if (h >= 14 && h < 19){
                    return{
                             boss : databoss.day5.b19[0],
                             t : '19:00',
                             imgboss : databoss.day5.b19[1] }
                   }else if (h >= 19 && h < 23){
                    return{
                             boss : databoss.day5.b23[0],
                             t : '23:00',
                             imgboss : databoss.day5.b23[1] }    
                  }else if (h == 23) {
                    return{
                             boss : databoss.day6.b00[0],         //The next morning
                             t : '00:30',
                             imgboss : databoss.day6.b00[1] }
                  }
                  break
    /*Saturday*/     case 6 :
                  if (h == 0 && m < 30){                          //< 00.30 น
                    return{
                             boss : databoss.day6.b00[0],         
                             t : '00:30',
                             imgboss : databoss.day6.b00[1] }
                  }else if ((h == 0 && m >= 30) || (h >= 1 && h < 6)){                   //> 00.30 น - 6.00 น
                    return{
                             boss : databoss.day6.b06[0],         
                             t : '06:00',
                             imgboss : databoss.day6.b06[1] }
                  }else if (h >= 6 && h < 10){
                    return{
                             boss : databoss.day6.b10[0],
                             t : '10:00',
                             imgboss : databoss.day6.b10[1] }
                  }else if (h >= 10 && h < 14){
                    return{
                             boss : databoss.day6.b14[0],
                             t : '14:00',
                             imgboss : databoss.day6.b14[1] }
                  }else if (h >= 14 && h < 19){
                    return{
                             boss : databoss.day6.b19[0],
                             t : '19:00',
                             imgboss : databoss.day6.b19[1] }
                   }else if (h >= 19 && h < 23){
                    return{
                             boss : databoss.day6.b23[0],
                             t : '23:00',
                             imgboss : databoss.day6.b23[1] }    
                  }else if (h == 23) {
                    return{
                             boss : databoss.day0.b00[0],         //The next morning
                             t : '00:30',
                             imgboss : databoss.day0.b00[1] }
                  }
                  break
    
              }
    }
