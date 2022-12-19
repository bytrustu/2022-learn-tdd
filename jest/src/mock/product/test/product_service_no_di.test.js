const ProductService = require('../product_service_no_di');
const ProductClient = require('../product_client');

jest.mock('../product_client');

describe('ProductService를 테스트 한다.', () => {
    const fetchItems = jest.fn(async () => [
        { available: true, item: 'dog' },
        { available: false, item: 'cat' },
    ]);
    ProductClient.mockImplementation(() => ({
        fetchItems,
    }))

    let productService;
    beforeEach(() => {
        productService = new ProductService();
    });

    it('fetchAvailableItems 함수 호출시 available인 요소를 호출하는지 테스트 한다.', async () => {
        const items = await productService.fetchAvailableItems();
        expect(items).toEqual([{ available: true, item: 'dog' },]);
        expect(items.length).toBe(1);
    });
});
