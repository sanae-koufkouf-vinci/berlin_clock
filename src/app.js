export class Main {

       berlinClock(time){
        if(time.getMinutes()===4)return("JJJJ");
        if(time.getMinutes()===3)return("JJJ-");
        if(time.getMinutes()===2 || time.getMinutes()===7)return("JJ--");
        if(time.getMinutes()===1 || time.getMinutes()===6)return("J---");
        return("----");
       }

}