import { Main } from '../src/app.js';

describe("berlinClock function should return the time in Berlin Clock ", function() {
    const main = new Main();

    it("berlinClock should return ---- when given time with minutes = 0 ", function() {
        const date = new Date();
        date.setMinutes(0);
        const result = main.berlinClock(date);
        expect(result).toBe("----");
    });


    it("berlinClock should return J--- when given time with minutes = 1 ", function() {
        const date = new Date();
        date.setMinutes(1);
        const result = main.berlinClock(date);
        expect(result).toBe("J---");
    });
    
    it("berlinClock should return JJ-- when given time with minutes = 2 ", function() {
        const date = new Date();
        date.setMinutes(2);
        const result = main.berlinClock(date);
        expect(result).toBe("JJ--");
    });

    it("berlinClock should return JJJ- when given time with minutes = 3 ", function() {
        const date = new Date();
        date.setMinutes(3);
        const result = main.berlinClock(date);
        expect(result).toBe("JJJ-");
    });

    
});
 