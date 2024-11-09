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
        if(time.getMinutes()>=5 && time.getMinutes()<10)return("J----------");
        if(time.getMinutes()>=10 && time.getMinutes()<15 )return("JJ---------");
        if(time.getMinutes()>=15 && time.getMinutes()<20)return("JJR--------");
        if(time.getMinutes()>=20 && time.getMinutes()<25)return("JJRJ-------");
        if(time.getMinutes()>=25 && time.getMinutes()<30)return("JJRJJ------");
        if(time.getMinutes()>=30 && time.getMinutes()<35)return("JJRJJR-----");
        if(time.getMinutes()>=35 && time.getMinutes()<40)return("JJRJJRJ----");
        if(time.getMinutes()>=40 && time.getMinutes()<45)return("JJRJJRJJ---"); 
        if(time.getMinutes()>=45 && time.getMinutes()<50)return("JJRJJRJJR--");
        if(time.getMinutes()>=50 && time.getMinutes()<55)return("JJRJJRJJRJ-"); 
        if(time.getMinutes()===55)return("JJRJJRJJRJJ");   
              return("-----------");
       }
}