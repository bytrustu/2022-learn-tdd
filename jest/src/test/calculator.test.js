const Calculator = require('../calculator');

describe('calculator를 테스트 합니다.', () => {
    let cal;
    beforeEach(() => {
        cal = new Calculator();
    });

    test('1+2의 결과는 3이다.', () => {
        cal.set(1);
        cal.add(2);
        expect(cal.value).toBe(3);
    });

    test('더하기의 결과가 100이 넘을 경우 오류를 발생한다.', () => {
       cal.set(99);
        expect(() => cal.add(2)).toThrow();
        expect(() => cal.add(2)).toThrowError('값은 100을 넘을수 없습니다.')
    });

    test('1-1의 결과는 0이다.', () => {
        cal.set(1);
        cal.subtract(1);
        expect(cal.value).toBe(0);
    });

    test('1*10의 결과는 10이다.', () => {
        cal.set(1);
        cal.multiply(10);
        expect(cal.value).toBe(10);
    });

    test('10/2의 결과는 5이다.', () => {
        cal.set(10);
        cal.divide(2);
        expect(cal.value).toBe(5);
    });

    test('0/0의 결과는 NaN이다.', () => {
        cal.set(0);
        cal.divide(0);
        expect(cal.value).toBeNaN();
    });

    test('1/0의 결과는 Infinity이다.', () => {
       cal.set(1);
       cal.divide(0);
       expect(cal.value).toBe(Infinity);
    });
});
