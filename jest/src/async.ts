const fetchProduct = (error) => {
    if (error === 'error') {
        return Promise.reject('네트워크 오류가 발생했습니다.');
    }
    return Promise.resolve({ id: 1, name: 'bytrustu', price: 1000 });
}

module.exports = fetchProduct;
