export class Main {

       berlinClock(time){
        if(time.getMinutes()===3)return("JJJ-");
        if(time.getMinutes()===2)return("JJ--");
        if(time.getMinutes()===1)return("J---");
        return("----");
       }

}