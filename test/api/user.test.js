const app = require("../../app");
const supertest = require("supertest");

describe('User API', () => {
    // Test for GET /user
    test('should get list of users', async () => {
        const response = await supertest(app).get('/user');
        const result = response.body || {};
        expect(result.code).toBe(1000);
    });

    // Test for GET /user/:userId
    test('should get a specific user', async () => {
        const userId = 1;
        const response = await supertest(app).get(`/user/${userId}`);
        const result = response.body || {};
        expect(result.code).toBe(1000);
    });

    // Test for POST /user
    test('should create a new user', async () => {
        const newUser = { id: 1, name: 'same' };
        const response = await supertest(app).post('/user').send(newUser).set('token', 'dfjhhfr8ery398roiwr');
        const result = response.body || {};
        expect(result.code).toBe(1003);
    });

    // Test for PUT /user/:userId
    test('should update a user', async () => {
        const userId = 1;
        const updatedUser = { id: 1, name: 'same1' };
        const response = await supertest(app).put(`/user/${userId}`).send(updatedUser).set('token', 'dfjhhfr8ery398roiwr');;
        const result = response.body || {};
        expect(result.code).toBe(1004);
    });

    // Test for DELETE /user/:userId
    test('should delete a user', async () => {
        const userId = 1;
        const response = await supertest(app).delete(`/user/${userId}`).set('token', 'dfjhhfr8ery398roiwr');;
        const result = response.body || {};
        expect(result.code).toBe(1005);
    });
});