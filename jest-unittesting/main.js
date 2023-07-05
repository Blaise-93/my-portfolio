/* Unit Testing: Setting Up Data with beforeEach Challenge
*   
* 1. Add a new describe for the fullName
* 2. Fully test the fullName get
* 3. Use a nested beforeEach
*/ 

class User {
    firstName;
    lastName;
    middleName;
    
    constructor(data = {}){
        this.firstName = data.firstName || '';
        this.lastName = data.lastName || '';
        this.middleName = data.middleName || '';
    }
        
    get fullName() {
        if(this.middleName.length > 0) {
            return `${this.firstName} ${this.middleName[0]}. ${this.lastName}`;
        }
        
        return `${this.firstName} ${this.lastName}`;
    }
    sayMyName() {
       window.alert(this.fullName) 
    }
} 
 
// Test Suite 
//empty space assertion
//f attached to it in jest is used to skip what you dont want to test
describe(`${User.name} Class`, () => {
    let model;
    
    beforeEach(() => {
        model = new User();
    });
    
    describe('default values', () => {
        it('first name defaults to empty', () => {
            // assert
            expect(model.firstName).toBe('');
        });
    
        it('last name defaults to empty', () => {
            // assert
            expect(model.lastName).toBe('');
        });
    
        it('middle name defaults to empty', () => {
            // assert
            expect(model.middleName).toBe('');
        }); 
    });
});

//name detail assertion
describe(`${User.name} Class`, () => {
    let model;
    
    beforeEach(() => {
        const name = {
            firstName: "Ejikeme",
            middleName: "Kennedy",
            lastName:"Matt"
        }
        model = new User(name);
    });
    
    fdescribe('user fullname details', () => {
        fit('first name defaults to Ejikeme', () => {
            // assert
            expect(model.firstName).toBe('Ejikeme');
        });
    
        fit('last name defaults to Ejikeme K. Matt', () => {/* you can specify the code exception you want to run with 'f'it */
            // assert
             // assert
             expect(model.fullName).toBe(`${model.firstName} ${model.middleName[0]}. ${model.lastName}`);;
        });
    
        fit('middle name defaults to Kennedy', () => {
            // assert
            expect(model.middleName).toBe('Kennedy');
        }); 
    });
});

//Spies

describe("User", () => {
    let model 
    beforeEach(() => {
        model = new User()
    })

    it(`alert the full name of the user`, ()=> {
        //arr
        model.firstName = 'Blaise'
        model.lastName = 'Matt'
        model.middleName = 'Kennedy'
        spyOn(window, 'alert')
        
        //act
        model.sayMyName()

        //assert
        expect(window.alert).toHaveBeenCalled()
    })
})