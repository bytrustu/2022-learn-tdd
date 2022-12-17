const sum = (a, b) => a + b;

test('1+2의 결과는 3이다.', () => {
    expect(sum(1, 2)).toBe(3);
});
