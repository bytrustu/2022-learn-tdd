const fetchProduct = require('../async');

const obj = { id: 1, name: 'bytrustu', price: 1000 };

describe('fetchProduct를 테스트 합니다.', () => {
    test('doneCallback을 이용해서 테스트 합니다.', (done) => {
        fetchProduct().then((item) => {
            expect(item).toEqual(obj);
            done();
        })
    });

    test('비동기 함수의 결과를 return 하여 테스트 합니다.', () => {
        return fetchProduct().then((item) => {
            expect(item).toEqual(obj);
        })
    });

    test('async await으로 테스트 합니다.', async () => {
        const product = await fetchProduct();
        expect(product).toEqual(obj);
    });

    test('resolves 테스트 합니다.', () => {
        expect(fetchProduct()).resolves.toEqual(obj);
    });

    test('resolves 거짓을 테스트 합니다.', () => {
        expect(fetchProduct()).resolves.not.toEqual({ ...obj, price: 2000 });
    });

    test('reject 테스트 합니다.', () => {
        expect(fetchProduct('error')).rejects.toBe('네트워크 오류가 발생했습니다.');
    });
});
