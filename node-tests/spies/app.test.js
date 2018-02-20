const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');
// app.__set__

describe('App', () => {

    var db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);
    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        // spy();
        // expect(spy).toHaveBeenCalled();
        spy('Aritra', 28);
        expect(spy).toHaveBeenCalledWith('Aritra', 28);
    });

    it('should call saveUser with user object', () => {
        var email = 'aritra1704@gmail.com';
        var password = '123456';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({
            email, 
            password
        })
    });
});