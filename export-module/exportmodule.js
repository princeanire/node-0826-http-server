module.exports = function(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.info = () => {
        return this.firstName + " " + this.lastName + " " + this.age;
    }
}