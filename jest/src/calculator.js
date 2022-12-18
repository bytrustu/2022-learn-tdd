class Calculator {
    constructor() {
        this.value = 0;
    }

    set(num) {
        this.value = num;
    }

    clear() {
        this.value = 0;
    }

    add(num) {
        const sum = this.value + num;
        if (sum > 100) {
            throw new Error('값은 100을 넘을수 없습니다.');
        }
        this.value = sum;
    }

    subtract(num) {
        this.value = this.value - num;
    }

    multiply(num) {
        this.value = this.value * num;
    }

    divide(num) {
        this.value = this.value / num;
    }
}

module.exports = Calculator;
