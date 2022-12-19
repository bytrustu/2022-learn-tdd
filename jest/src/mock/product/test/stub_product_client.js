class StubProductClient {
    async fetchItems() {
        return [
            { available: true, item: 'dog' },
            { available: false, item: 'cat' },
        ];
    }
}

module.exports = StubProductClient;

