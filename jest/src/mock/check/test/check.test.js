const check = require('../check');

describe('check 함수를 테스트 합니다.', () => {
    let onSucess;
    let onFailure;

    beforeEach(() => {
        onSucess = jest.fn();
        onFailure = jest.fn();
    });

    it('predicate의 값이 true이면 onSuccess를 호출합니다.', () => {
        check(() => true, onSucess, onFailure);
        expect(onSucess).toBeCalled();
        // expect(onSucess.mock.calls.length).toBe(1);
        expect(onSucess).toHaveBeenCalledTimes(1);
        // expect(onSucess.mock.calls[0][0]).toBe('yes');
        expect(onSucess).toHaveBeenCalledWith('yes');
        expect(onFailure).toHaveBeenCalledTimes(0);
    });

    it('predicate의 값이 false이면 onFailure를 호출합니다.', () => {
        check(() => false, onSucess, onFailure);
        expect(onSucess).toHaveBeenCalledTimes(0);
        expect(onFailure).toHaveBeenCalledTimes(1);
        expect(onFailure).toHaveBeenCalledWith('no');
    });
});
