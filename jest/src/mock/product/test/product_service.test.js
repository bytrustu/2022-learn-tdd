const ProductService = require('../product_service');
const StubProductClient = require('./stub_product_client');

describe('ProductService를 테스트 한다.', () => {
   let productService;

   beforeEach(() => {
       productService = new ProductService(new StubProductClient());
   });

    it('fetchAvailableItems 함수 호출시 available인 요소를 호출하는지 테스트 한다.', async () => {
        const items = await productService.fetchAvailableItems();
        expect(items).toEqual([{ available: true, item: 'dog' }]);
        expect(items.length).toBe(1);
    });
});
