import { Main } from '../src/app.js';

describe("berlinClock function should return the time in Berlin Clock ", function() {
    const main = new Main();

    it("berlinClock should return ---- when given time with minutes = 0 ", function() {
        const date = new Date();
        date.setMinutes(0);
        const result = main.berlinClock(date.getTime());
        expect(result).toBe("----");
    });
});
 