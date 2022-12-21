const Stack = require('./stack.js');

describe('Stack', () => {
    let stack;

    beforeEach(() => {
       stack = new Stack();
    });

    it('스택은 empty 상태로 생성된다.', () => {
        expect(stack.size()).toBe(0);
    });

    it('스택에 데이터를 추가할 수 있다.', () => {
        stack.push('🎉');
        stack.push('🔥');
        expect(stack.size()).toBe(2)
    });

    it('스택이 비어있을 때 pop을 하면 에러가 발생한다.', () => {
        expect(() => {
            stack.pop();
        }).toThrowError('스택이 비어있습니다.');
    });

    it('스택에 데이터를 삭제 할 수 있다.', () => {
        stack.push('🎉');
        stack.push('🔥');
        expect(stack.pop()).toBe('🔥');
        expect(stack.size()).toBe(1);
    });

    it('스택이 비어있을 때 peek을 하면 에러가 발생한다.', () => {
        expect(() => {
            stack.peek();
        }).toThrowError('스택이 비어있습니다.');
    });

    it('스택의 가장 위에 있는 데이터를 조회 할 수 있다.', () => {
        stack.push('🎉');
        stack.push('🔥');
        expect(stack.peek()).toBe('🔥');
        expect(stack.size()).toBe(2);
    });
});

