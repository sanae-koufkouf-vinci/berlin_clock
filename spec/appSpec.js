import { Main } from '../src/app.js';

describe("berlinClockLine4 function should return the single minutes line of the Berlin Clock ", function() {
    const main = new Main();

    it("berlinClockLine4 should return ---- when given time with minutes = 0 ", function() {
        const date = new Date();
        date.setMinutes(0);

        const result = main.berlinClockLine4(date);

        expect(result).toBe("----");
    });


    it("berlinClockLine4 should return J--- when given time with minutes = 1 ", function() {
        const date = new Date();
        date.setMinutes(1);

        const result = main.berlinClockLine4(date);
        
        expect(result).toBe("J---");
    });
    
    it("berlinClockLine4 should return JJ-- when given time with minutes = 2 ", function() {
        const date = new Date();
        date.setMinutes(2);

        const result = main.berlinClockLine4(date);

        expect(result).toBe("JJ--");
    });

    it("berlinClockLine4 should return JJJ- when given time with minutes = 3 ", function() {
        const date = new Date();
        date.setMinutes(3);

        const result = main.berlinClockLine4(date);

        expect(result).toBe("JJJ-");
    });

    it("berlinClockLine4 should return JJJJ when given time with minutes = 4 ", function() {
        const date = new Date();
        date.setMinutes(4);

        const result = main.berlinClockLine4(date);
        
        expect(result).toBe("JJJJ");
    });

    it("berlinClockLine4 should return ---- when given time with minutes = 5 ", function() {
        const date = new Date();
        date.setMinutes(5);

        const result = main.berlinClockLine4(date);

        expect(result).toBe("----");
    });

    it("berlinClockLine4 should return J--- when given time with minutes = 6 ", function() {
        const date = new Date();
        date.setMinutes(6);

        const result = main.berlinClockLine4(date);

        expect(result).toBe("J---");
    });

    it("berlinClockLine4 should return JJ-- when given time with minutes = 7 ", function() {
        const date = new Date();
        date.setMinutes(7);

        const result = main.berlinClockLine4(date);

        expect(result).toBe("JJ--");
    });

    it("berlinClockLine4 should return JJJ- when given time with minutes = 8 ", function() {
        const date = new Date();
        date.setMinutes(8);

        const result = main.berlinClockLine4(date);

        expect(result).toBe("JJJ-");
    });

    it("berlinClockLine4 should return JJJJ when given time with minutes = 9 ", function() {
        const date = new Date();
        date.setMinutes(9);

        const result = main.berlinClockLine4(date);

        expect(result).toBe("JJJJ");
    });

    it("berlinClockLine4 should return ---- when given time with minutes = 10 ", function() {
        const date = new Date();
        date.setMinutes(10);

        const result = main.berlinClockLine4(date);

        expect(result).toBe("----");
    });

    it("berlinClockLine4 should return J--- when given time with minutes = 11 ", function() {
        const date = new Date();
        date.setMinutes(11);

        const result = main.berlinClockLine4(date);

        expect(result).toBe("J---");
    });

    it("berlinClockLine4 should return JJ-- when given time with minutes = 12 ", function() {
        const date = new Date();
        date.setMinutes(12);

        const result = main.berlinClockLine4(date);

        expect(result).toBe("JJ--");
    });

    it("berlinClockLine4 should return JJJ- when given time with minutes = 13 ", function() {
        const date = new Date();
        date.setMinutes(13);

        const result = main.berlinClockLine4(date);

        expect(result).toBe("JJJ-");
    });

    it("berlinClockLine4 should return JJJJ when given time with minutes = 14 ", function() {
        const date = new Date();
        date.setMinutes(14);

        const result = main.berlinClockLine4(date);
        
        expect(result).toBe("JJJJ");
    });
});

describe("berlinClockLine3 function should return the 5-minutes line of the Berlin Clock", function(){
    const main = new Main();

    it("berlinClockLine3 should return ----------- when given time with minutes = 0", function() {
        const date = new Date();
        date.setMinutes(0);

        const result = main.berlinClockLine3(date);

        expect(result).toBe("-----------");
    });

    it("berlinClockLine3 should return J---------- when given time with minutes = 5", function() {
        const date = new Date();
        date.setMinutes(5);

        const result = main.berlinClockLine3(date);

        expect(result).toBe("J----------");
    });

    it("berlinClockLine3 should return J---------- when given time with minutes = 6", function() {
        const date = new Date();
        date.setMinutes(6);

        const result = main.berlinClockLine3(date);

        expect(result).toBe("J----------");
    });

    it("berlinClockLine3 should return J---------- when given time with minutes = 7", function() {
        const date = new Date();
        date.setMinutes(7);

        const result = main.berlinClockLine3(date);

        expect(result).toBe("J----------");
    });

    it("berlinClockLine3 should return JJ--------- when given time with minutes = 10", function() {
        const date = new Date();
        date.setMinutes(10);

        const result = main.berlinClockLine3(date);

        expect(result).toBe("JJ---------");
    });

    it("berlinClockLine3 should return JJ--------- when given time with minutes = 11", function() {
        const date = new Date();
        date.setMinutes(11);

        const result = main.berlinClockLine3(date);

        expect(result).toBe("JJ---------");
    });

    it("berlinClockLine3 should return JJR-------- when given time with minutes = 15", function() {
        const date = new Date();
        date.setMinutes(15);

        const result = main.berlinClockLine3(date);

        expect(result).toBe("JJR--------");
    });

    it("berlinClockLine3 should return JJR-------- when given time with minutes = 16", function() {
        const date = new Date();
        date.setMinutes(16);

        const result = main.berlinClockLine3(date);

        expect(result).toBe("JJR--------");
    });


    it("berlinClockLine3 should return JJRJ------- when given time with minutes = 20", function() {
        const date = new Date();
        date.setMinutes(20);

        const result = main.berlinClockLine3(date);

        expect(result).toBe("JJRJ-------");
    });

    it("berlinClockLine3 should return JJRJ------- when given time with minutes = 21", function() {
        const date = new Date();
        date.setMinutes(21);

        const result = main.berlinClockLine3(date);

        expect(result).toBe("JJRJ-------");
    });

    it("berlinClockLine3 should return JJRJJ------ when given time with minutes = 25", function() {
        const date = new Date();
        date.setMinutes(25);

        const result = main.berlinClockLine3(date);

        expect(result).toBe("JJRJJ------");
    });

    it("berlinClockLine3 should return JJRJJ------ when given time with minutes = 26", function() {
        const date = new Date();
        date.setMinutes(26);

        const result = main.berlinClockLine3(date);

        expect(result).toBe("JJRJJ------");
    });

    it("berlinClockLine3 should return JJRJJR----- when given time with minutes = 30", function() {
        const date = new Date();
        date.setMinutes(30);

        const result = main.berlinClockLine3(date);

        expect(result).toBe("JJRJJR-----");
    });

    it("berlinClockLine3 should return JJRJJR----- when given time with minutes = 31", function() {
        const date = new Date();
        date.setMinutes(31);

        const result = main.berlinClockLine3(date);

        expect(result).toBe("JJRJJR-----");
    });

    it("berlinClockLine3 should return JJRJJRJ---- when given time with minutes = 35", function() {
        const date = new Date();
        date.setMinutes(35);

        const result = main.berlinClockLine3(date);

        expect(result).toBe("JJRJJRJ----");
    });

    it("berlinClockLine3 should return JJRJJRJ---- when given time with minutes = 36", function() {
        const date = new Date();
        date.setMinutes(36);

        const result = main.berlinClockLine3(date);

        expect(result).toBe("JJRJJRJ----");
    });

    it("berlinClockLine3 should return JJRJJRJJ--- when given time with minutes = 40", function() {
        const date = new Date();
        date.setMinutes(40);

        const result = main.berlinClockLine3(date);

        expect(result).toBe("JJRJJRJJ---");
    });

    it("berlinClockLine3 should return JJRJJRJJ--- when given time with minutes = 41", function() {
        const date = new Date();
        date.setMinutes(41);

        const result = main.berlinClockLine3(date);

        expect(result).toBe("JJRJJRJJ---");
    });

    it("berlinClockLine3 should return JJRJJRJJR-- when given time with minutes = 45", function() {
        const date = new Date();
        date.setMinutes(45);

        const result = main.berlinClockLine3(date);

        expect(result).toBe("JJRJJRJJR--");
    });

    it("berlinClockLine3 should return JJRJJRJJR-- when given time with minutes = 46", function() {
        const date = new Date();
        date.setMinutes(46);

        const result = main.berlinClockLine3(date);

        expect(result).toBe("JJRJJRJJR--");
    });

    it("berlinClockLine3 should return JJRJJRJJRJ- when given time with minutes = 50", function() {
        const date = new Date();
        date.setMinutes(50);

        const result = main.berlinClockLine3(date);

        expect(result).toBe("JJRJJRJJRJ-");
    });

    it("berlinClockLine3 should return JJRJJRJJRJ- when given time with minutes = 51", function() {
        const date = new Date();
        date.setMinutes(51);

        const result = main.berlinClockLine3(date);

        expect(result).toBe("JJRJJRJJRJ-");
    });

    it("berlinClockLine3 should return JJRJJRJJRJJ when given time with minutes = 55", function() {
        const date = new Date();
        date.setMinutes(55);

        const result = main.berlinClockLine3(date);

        expect(result).toBe("JJRJJRJJRJJ");
    });

    it("berlinClockLine3 should return JJRJJRJJRJJ when given time with minutes = 56", function() {
        const date = new Date();
        date.setMinutes(56);

        const result = main.berlinClockLine3(date);

        expect(result).toBe("JJRJJRJJRJJ");
    });

});

describe("berlinClockLine2 function should return the single hours line of the Berlin Clock", function(){ 
    const main = new Main();

    it("berlinClockLine2 should return ---- when given time with hours = 0", function() {
        const date = new Date();
        date.setHours(0);

        const result = main.berlinClockLine2(date);

        expect(result).toBe("----");
    });

    it("berlinClockLine2 should return R--- when given time with hours = 1", function() {
        const date = new Date();
        date.setHours(1);

        const result = main.berlinClockLine2(date);

        expect(result).toBe("R---");
    });

    it("berlinClockLine2 should return RR-- when given time with hours = 2", function() {
        const date = new Date();
        date.setHours(2);

        const result = main.berlinClockLine2(date);

        expect(result).toBe("RR--");
    });

    it("berlinClockLine2 should return RRR- when given time with hours = 3", function() {
        const date = new Date();
        date.setHours(3);

        const result = main.berlinClockLine2(date);

        expect(result).toBe("RRR-");
    });

    it("berlinClockLine2 should return RRRR when given time with hours = 4", function() {
        const date = new Date();
        date.setHours(4);

        const result = main.berlinClockLine2(date);

        expect(result).toBe("RRRR");
    });

    it("berlinClockLine2 should return ---- when given time with hours = 5", function() {
        const date = new Date();
        date.setHours(5);

        const result = main.berlinClockLine2(date);

        expect(result).toBe("----");
    });

    it("berlinClockLine2 should return R--- when given time with hours = 6", function() {
        const date = new Date();
        date.setHours(6);

        const result = main.berlinClockLine2(date);

        expect(result).toBe("R---");
    });

    it("berlinClockLine2 should return RR-- when given time with hours = 7", function() {
        const date = new Date();
        date.setHours(7);

        const result = main.berlinClockLine2(date);

        expect(result).toBe("RR--");
    });

    it("berlinClockLine2 should return RRR- when given time with hours = 8", function() {
        const date = new Date();
        date.setHours(8);

        const result = main.berlinClockLine2(date);

        expect(result).toBe("RRR-");
    });

    it("berlinClockLine2 should return RRRR when given time with hours = 9", function() {
        const date = new Date();
        date.setHours(9);

        const result = main.berlinClockLine2(date);

        expect(result).toBe("RRRR");
    });

    it("berlinClockLine2 should return ---- when given time with hours = 10", function() {
        const date = new Date();
        date.setHours(10);

        const result = main.berlinClockLine2(date);

        expect(result).toBe("----");
    });

    it("berlinClockLine2 should return R--- when given time with hours = 11", function() {
        const date = new Date();
        date.setHours(11);

        const result = main.berlinClockLine2(date);

        expect(result).toBe("R---");
    });

    it("berlinClockLine2 should return RR-- when given time with hours = 12", function() {
        const date = new Date();
        date.setHours(12);

        const result = main.berlinClockLine2(date);

        expect(result).toBe("RR--");
    });

    it("berlinClockLine2 should return RRR- when given time with hours = 13", function() {
        const date = new Date();
        date.setHours(13);

        const result = main.berlinClockLine2(date);

        expect(result).toBe("RRR-");
    });

    it("berlinClockLine2 should return RRRR when given time with hours = 14", function() {
        const date = new Date();
        date.setHours(14);

        const result = main.berlinClockLine2(date);

        expect(result).toBe("RRRR");
    });

});

describe("berlinClockLine1 function should return the 5-hours line of the Berlin Clock", function(){ 
    const main = new Main();

    it("berlinClockLine1 should return ---- when given time with hours = 0", function() {
        const date = new Date();
        date.setHours(0);

        const result = main.berlinClockLine1(date);

        expect(result).toBe("----");
    });

    it("berlinClockLine1 should return R--- when given time with hours = 5", function() {
        const date = new Date();
        date.setHours(5);

        const result = main.berlinClockLine1(date);

        expect(result).toBe("R---");
    });
});
 