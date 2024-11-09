export class Main {

       berlinClock(time){
        if(time.getMinutes()%5 === 4)return("JJJJ");
        if(time.getMinutes()%5 === 3)return("JJJ-");
        if(time.getMinutes()%5 === 2)return("JJ--");
        if(time.getMinutes()%5 === 1)return("J---");
        return("----");
       }

}