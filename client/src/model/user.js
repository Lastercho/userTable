class User {
    constructor(id, name, email, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
    }

    // Method to get user details
    getUserDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Age: ${this.age}`;
    }

    // Method to update user email
    updateEmail(newEmail) {
        this.email = newEmail;
    }

    // Method to update user age
    updateAge(newAge) {
        this.age = newAge;
    }
}

// Example usage
const user = new User(1, 'John Doe', 'john.doe@example.com', 30);
console.log(user.getUserDetails()); // Output: ID: 1, Name: John Doe, Email: john.doe@example.com, Age: 30

user.updateEmail('john.new@example.com');
console.log(user.getUserDetails()); // Output: ID: 1, Name: John Doe, Email: john.new@example.com, Age: 30

user.updateAge(31);
console.log(user.getUserDetails()); // Output: ID: 1, Name: John Doe, Email: john.new@example.com, Age: 31
