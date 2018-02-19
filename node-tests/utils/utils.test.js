const utils = require('./utils');

const expect = require('expect');

it('should add two numbers', () => {
    var res = utils.add(33, 11);

    expect(res).toBe(44);
    expect(res).toBeA('number');
    // if(res !== 44)
    //     throw new Error(`Expected 44, but got ${res}`);
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should square a number', () => {
    var res = utils.square(15);
    expect(res).toBe(225);
    expect(res).toBeA('number');
    // if(res !== 225)
    //     throw new Error(`Expected 225, but got ${res}`);
});

it('should async square a number', (done) => {
    utils.asyncSquare(3, (res) => {
        expect(res).toBe(9).toBeA('number');
        done();
    })

    
    // if(res !== 225)
    //     throw new Error(`Expected 225, but got ${res}`);
});

it('should expect some values', () => {
    // expect(12).toNotBe(12);
    // expect({name: 'Aritra'}).toBe({name: 'Aritra'});
    // expect({name: 'Aritra'}).toEqual({name: 'Aritra'});
    // expect({name: 'Aritra'}).toNotEqual({name: 'Aritra'});
    // expect([2,3,4]).toInclude([2]);
    // expect([2,3,4]).toExclude([5]);
    expect({
        name: 'Aritra',
        age: '28',
        locaton: 'Hyderabad'
    }).toInclude({age: '28'});
});

it('should verify first and last name', () => {
    var user = {
        age: 28,
        location: 'Hyderabad'
    }

    var res = utils.setName(user, 'Aritra Pal');
    expect(res).toInclude({
        firstName: 'Aritra',
        lastName: 'Pal'
    });
});