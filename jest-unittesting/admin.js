class User {
    firstName;
    lastName;
    middleName;
    id;
    userService;
    
    constructor(data, userService){
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
    
    async getMyFullUserData() {
        return this.userService.getUserById(this.id);
    }
    
    sayMyName() {
        alert(this.fullName);
    }
    
    getCodeName() {
        const isATestingGod = confirm('Are you a testing god?');
        
        if(isATestingGod) {
            return 'TESTING GOD!'
        } else {
            return `Scrub skipping tests in his best friend's ride!`;
        }
    }
} 