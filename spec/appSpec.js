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
});
 