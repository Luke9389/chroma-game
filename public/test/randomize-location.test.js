import randomizeLocation from '../src/components/game/randomize-location.js';

const test = QUnit.test;

test('will get array of numbers equal in length to other array', function(assert) {
    //Arrange
    const arr = [
        { location: 'ser' },
        { location: 'ser' },
        { location: 'ser' },
        { location: 'ser' },
        { location: 'ser' },
        { location: 'ser' }
    ];
    // Set up your parameters and expectations
    const result = randomizeLocation(arr);
    const expected = 6;
    //Act 
    // Call the function you're testing and set the result to a const
    //Assert
    assert.equal(result.length, expected);
});