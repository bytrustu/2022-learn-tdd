test('2+2 의 결과는 4이다.', () => {
    expect(2 + 2).toBe(4);
});

test('Array loop 중 값을 체크한다', () => {
    const data = [1, 1, 1];
    data.forEach((item) => {
        expect(item).toBe(1);
    });
})

test('Object 값을 체크한다', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

test('Array 값을 체크한다', () => {
    const data = [1, 2, 3];
    expect(data).toEqual([1, 2, 3]);
});

test('Array loop 중 Object 값을 체크한다', () => {
    const data = [{ a: 1 }, { a: 1 }, { a: 1 }];
    data.forEach((item) => {
        expect(item).toEqual({ a: 1 });
    });
});

test('2+2 의 결과는 5가 아니다.', () => {
    expect(2 + 2).not.toBe(5);
});

test('null 의 Truthiness를 체크한다.', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero의 Truthiness를 체크한다.', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

test('Numbers를 체크한다.', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4);

    expect(value).toBe(4);
    expect(value).toEqual(4);
    expect(0.1 + 0.2).toBeCloseTo(0.3);
});

test('Strings를 체크한다.', () => {
    expect('team').not.toMatch(/I/);
    expect('ssteamss').toMatch(/team/);
});

const animalList = [
    'dog',
    'cat',
    'birt',
    'tiger',
    'lion',
];

test('Arrays and iterables를 체크한다.', () => {
    expect(animalList).toContain('dog');
    expect(new Set(animalList)).toContain('cat');
});

function throwErrorCode() {
    throw new Error('오류가 발생 했습니다!');
}

test('Exceptions를 체크한다.', () => {
    expect(() => { throwErrorCode(); }).toThrow();
    expect(() => throwErrorCode()).toThrow(Error);
    expect(() => throwErrorCode()).toThrow('오류가 발생 했습니다!');
    expect(() => throwErrorCode()).toThrow(/오류가/);
    expect(() => throwErrorCode()).toThrow(/^오류가 발생 했습니다!$/);
});
