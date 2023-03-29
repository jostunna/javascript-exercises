const findTheOldest = function(people) {
    return people.reduce((prev, current) => {
        return (prev.yearOfDeath - prev.yearOfBirth) > (current.yearOfDeath - current.yearOfBirth) ? prev : current;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
