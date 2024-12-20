export class Main {

       fullBerlinClock(time) {
          return this.secondsButton(time)+"\n"+this.berlinClockLine1(time)+"\n"+this.berlinClockLine2(time)+"\n"+this.berlinClockLine3(time)+"\n"+this.berlinClockLine4(time);    
       }

       // line 4
       berlinClockLine4(time){
        if(this.isDividableBy5WithAnOffsetOf4(time))return("JJJJ");
        if(this.isDividableBy5WithAnOffsetOf3(time))return("JJJ-");
        if(this.isDividableBy5WithAnOffsetOf2(time))return("JJ--");
        if(this.isDividableBy5WithAnOffsetOf1(time))return("J---");
        return("----");
       }


       isDividableBy5WithAnOffsetOf4(time) {
              return time.getMinutes() % 5 === 4;
       }

       isDividableBy5WithAnOffsetOf3(time) {
              return time.getMinutes() % 5 === 3;
       }

       isDividableBy5WithAnOffsetOf2(time) {
              return time.getMinutes() % 5 === 2;
       }

       isDividableBy5WithAnOffsetOf1(time) {
              return time.getMinutes() % 5 === 1;
       }

       // line 3

       berlinClockLine3(time){
        if(this.isBetween5And9Minutes(time))return("J----------");
        if(this.isBetween10And14Minutes(time))return("JJ---------");
        if(this.isBetween15And19Minutes(time))return("JJR--------");
        if(this.isBetween20And24Minutes(time))return("JJRJ-------");
        if(this.isBetween25And29Minutes(time))return("JJRJJ------");
        if(this.isBetween30And34Minutes(time))return("JJRJJR-----");
        if(this.isBetween35And39Minutes(time))return("JJRJJRJ----");
        if(this.isBetween40And44Minutes(time))return("JJRJJRJJ---"); 
        if(this.isBetween45And49Minutes(time))return("JJRJJRJJR--");
        if(this.isBetween50And54Minutes(time))return("JJRJJRJJRJ-"); 
        if(this.isBetween55And59Minutes(time))return("JJRJJRJJRJJ");   
              return("-----------");
       }

       isBetween55And59Minutes(time) {
              return time.getMinutes() >= 55 && time.getMinutes() < 60;
       }

       isBetween50And54Minutes(time) {
              return time.getMinutes() >= 50 && time.getMinutes() < 55;
       }

       isBetween45And49Minutes(time) {
              return time.getMinutes() >= 45 && time.getMinutes() < 50;
       }

       isBetween40And44Minutes(time) {
              return time.getMinutes() >= 40 && time.getMinutes() < 45;
       }

       isBetween35And39Minutes(time) {
              return time.getMinutes() >= 35 && time.getMinutes() < 40;
       }

       isBetween30And34Minutes(time) {
              return time.getMinutes() >= 30 && time.getMinutes() < 35;
       }

       isBetween25And29Minutes(time) {
              return time.getMinutes() >= 25 && time.getMinutes() < 30;
       }

       isBetween20And24Minutes(time) {
              return time.getMinutes() >= 20 && time.getMinutes() < 25;
       }

       isBetween15And19Minutes(time) {
              return time.getMinutes() >= 15 && time.getMinutes() < 20;
       }

       isBetween10And14Minutes(time) {
              return time.getMinutes() >= 10 && time.getMinutes() < 15;
       }

       isBetween5And9Minutes(time) {
              return time.getMinutes() >= 5 && time.getMinutes() < 10;
       }

       // line 2
       berlinClockLine2(time){
              if(this.isHourDividableBy5WithAnOffsetOf1(time))return("R---");
              if(this.isHourDividableBy5WithAnOffsetOf2(time))return("RR--");
              if(this.isHourDividableBy5WithAnOffsetOf3(time))return("RRR-"); 
              if(this.isHourDividableBy5WithAnOffsetOf4(time))return("RRRR");    
              return("----");
       }

       isHourDividableBy5WithAnOffsetOf4(time) {
              return time.getHours() % 5 === 4;
       }

       isHourDividableBy5WithAnOffsetOf3(time) {
              return time.getHours() % 5 === 3;
       }

       isHourDividableBy5WithAnOffsetOf2(time) {
              return time.getHours() % 5 === 2;
       }

       isHourDividableBy5WithAnOffsetOf1(time) {
              return time.getHours() % 5 === 1;
       }

   // line 1

   berlinClockLine1(time){
    if(this.isBetween5And9Hours(time))return("R---");
    if(this.isBetween10And14Hours(time))return("RR--");
    if(this.isBetween15And19Hours(time))return("RRR-");
    if(this.isBetween20And23Hours(time))return("RRRR");
    return("----");

   }



    isBetween20And23Hours(time) {
        return time.getHours() >= 20 && time.getHours() < 24;
    }

    isBetween15And19Hours(time) {
        return time.getHours() >= 15 && time.getHours() < 20;
    }

    isBetween10And14Hours(time) {
        return time.getHours() >= 10 && time.getHours() < 15;
    }

    isBetween5And9Hours(time) {
        return time.getHours() >= 5 && time.getHours() < 10;
    }


    // seconds button

    secondsButton(time){
        if(this.isSecondOdd(time))return("-");
        return("R");
    }

    isSecondOdd(time) {
        return time.getSeconds() % 2 === 1;
    }
}