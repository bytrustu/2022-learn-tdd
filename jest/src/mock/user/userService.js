const { sendEmail, sendSMS } = require('./messageService');

const register = (user) => {
    sendEmail(user?.email, "회원가입을 축하합니다.");
    sendSMS(user?.phone, "회원가입을 축하합니다.");
}

const unregister = (user) => {
    sendEmail(user.email, "회원탈퇴 되었습니다.");
    sendSMS(user.phone, "회원탈퇴 되었습니다.");
}

module.exports = {
    register,
    unregister,
}
