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
    id;
    userService;
    
    constructor(data = {}){
        this.firstName = data.firstName || '';
        this.lastName = data.lastName || '';
        this.middleName = data.middleName || '';
        this.id = data.id;
        this.userService = userService;
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

    getCodeName() {
        const isATestingGod = confirm('Are you a testing god?');
        
        if(isATestingGod) {
            return 'TESTING GOD!'
        } else {
            return `Scrub skipping tests in his best friend's ride!`;
        }
    } 

    async getMyFullUserData() {
        return this.userService.getUserById(this.id)
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

//API calls are one of the most probably things to mock to 
// ascertain them in your program.

    describe('getMyFullUserData', () => {
        it('get user data by id', async () => {
            //arr
            mockUserService
        })
    })
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
    
    describe('user fullname details', () => {
        it('first name defaults to Ejikeme', () => {
            // assert
            expect(model.firstName).toBe('Ejikeme');
        });
    
        it('last name defaults to Ejikeme K. Matt', () => {/* you can specify the code exception you want to run with 'f'it */
            // assert
             // assert
             expect(model.fullName).toBe(`${model.firstName} ${model.middleName[0]}. ${model.lastName}`);;
        });
    
        it('middle name defaults to Kennedy', () => {
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
        //model.middleName = 'Kennedy'
        spyOn(window, 'alert')
        
        //act
        model.sayMyName()

        //assert => expectation from the api when called
        expect(window.alert).toHaveBeenCalled()
        expect(window.alert).toHaveBeenCalledWith("Blaise Matt")
    })
})


//eg 4:
/*  Unit Testing: Spies Challenge
*
*   1. Use a spy and test the method getCodeName() fully
*   2. You will need to use spyOn and toHaveBeenCalledWith()
*   3. HINT: you will need to chain the spy 
*    example: spyOn(object, 'key').and.returnValue(value)
*/

// Test Suite 
describe(`${User.name} Class`, () => {
    let model;
    
    beforeEach(() => {
        model = new User();
    });

    describe('get code name', () => {
        it('is a testing god when confirmed', () => {/* always double check your testcode */
            // arrange
            spyOn(window, 'confirm').and.returnValue(true); //spy are extremely powerful
            
            // act
            const result = model.getCodeName();
            
            // assert
            expect(result).toBe('TESTING GOD!');
        });
        
        it('is a scrub when not doing testing', () => {
            // arrange
            spyOn(window, 'confirm').and.returnValue(false);
            
            // act
            const result = model.getCodeName();
            
            // assert
            expect(result).toBe(`Scrub skipping tests in his best friend's ride!`);
        });
        
        it('asks a user if they are a testing god', () => {
            // arrange
            spyOn(window, 'confirm').and.returnValue(true);
            
            // act
            const result = model.getCodeName();
            
            // assert
            expect(window.confirm).toHaveBeenCalledWith(`Are you a testing god?`);
        });
    });
});



