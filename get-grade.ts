// grade.ts

export const grade = (score:number) => {
    let grade;

    switch (true) {
        case (score >= 90):
            grade = 'A';
            break;
        case (score >= 80):
            grade = 'B';
            break;
        case (score >= 70):
            grade = 'C';
            break;
        case (score >= 60):
            grade = 'D';
            break;
        default:
            grade = 'F';
    }

    return grade;
};

// Example usage
console.log("The student grade is")
console.log(grade(55)); // Output: A