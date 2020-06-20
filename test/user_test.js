const request = require('supertest');
const {expect} = require('chai');
const app = require('../app').listen(3001);

describe('测试用户相关接口', function() {
    it('创建用户', async () => {
        const data = {
            name: "张三",
            account: "zhang san" + Date.now(),
            password: "123456"
        };
        const res =  await request(app).post('/users/signUp').send(data).expect(200)
        console.log("body:", res.body)
        expect(res.body).to.have.property('code').and.equal(0);
    });
});
