export class Main {

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
        if(time.getMinutes()===5)return("J----------")
              return("-----------");
       }
}