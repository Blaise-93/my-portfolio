class Admin {
    firstName;
    lastName;
    middleName;

    constructor(data = {}) {
    
        this.firstName = data.firstName || "" ;
        this.lastName = data.lastName   || ""; 
        this.middleName = data.middleName || "";
    }
}

//write some test by:
//group it with "describe"
//test 'it'

// Test Suite 
describe(`${Admin.name} Class`, () => {
    describe('default values', () => {
        it('first name defaults to empty', () => {
        // arrange
        const data = { firstName: null };
        
        // act
        const model = new Admin(data);
        
        // assert
        expect(model.firstName).toBe('');
        });
    
        it('last name defaults to empty', () => {
            // arrange
            const data = { lastName: null };
            
            // act
            const model = new Admin(data);
            
            // assert
            expect(model.lastName).toBe('');
        });
    
        it('middle name defaults to empty', () => {
            // arrange
            const data = { middleName: null };
            
            // act
            const model = new Admin(data);
            
            // assert
            expect(model.middleName).toBe('');
        }); 
    });
});