const request = require('supertest');
const app = require('./index'); // Replace with the correct path to your Express app
let server ;



describe('GET /', () => {


    it('responds with "Fix test branch"', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect('Fix test2 branch')
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});
