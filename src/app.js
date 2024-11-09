export class Main {

       berlinClock(time){
        if(time.getMinutes()===4 || time.getMinutes()===9 )return("JJJJ");
        if(time.getMinutes()===3 || time.getMinutes()===8)return("JJJ-");
        if(time.getMinutes()===2 || time.getMinutes()===7)return("JJ--");
        if(time.getMinutes()%5 === 1)return("J---");
        return("----");
       }

}