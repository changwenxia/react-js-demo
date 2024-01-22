import Mock from 'mockjs';
const domain = '/api/';

Mock.mock(domain + 'login', function() {
    let result = {
        code: 200,
        message: '',
        data: {
            loginUid: 200,
            nickname: '兔子先生',
            token: '123456'
        }
    }
    return result;
})