const { register, unregister } = require('../userService');
const { sendEmail, sendSMS } = require('../messageService');
jest.mock('../messageService');

describe('userService를 테스트 합니다.', () => {
    const user = {
        email: 'bytrustu@gmail.com',
        phone: '010-1234-5678',
    };

    test('register를 테스트 합니다.', () => {
        register(user)
        expect(sendEmail).toBeCalledTimes(1);
        expect(sendEmail).toBeCalledWith(user.email, '회원가입을 축하합니다.');
        expect(sendSMS).toBeCalledTimes(1);
        expect(sendSMS).toBeCalledWith(user.phone, '회원가입을 축하합니다.');
    });

    test('unregister를 테스트 합니다.', () => {
        unregister(user);
        expect(sendEmail).toBeCalledTimes(1);
        expect(sendEmail).toBeCalledWith(user.email, '회원탈퇴 되었습니다.');
        expect(sendSMS).toBeCalledTimes(1);
        expect(sendSMS).toBeCalledWith(user.phone, '회원탈퇴 되었습니다.');
    });
});
