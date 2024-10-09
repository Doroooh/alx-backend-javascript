// DirectorInterface definingstructure for Director-related methods
interface DirectorInterface {
    workFromHome(): string,       // Method for working from home
    getCoffeeBreak(): string,     // Method to get a coffee break
    workDirectorTasks(): string   // Method to perform director tasks
}

// TeacherInterface defining structure for Teacher-related methods
interface TeacherInterface {
    workFromHome(): string,       // Method for working from home
    getCoffeeBreak(): string,     // Method to get a coffee break
    workTeacherTasks(): string    // Method to perform teacher tasks
}

// Director class to implement the DirectorInterface
class Director implements DirectorInterface {
    // Director can work from home
    workFromHome(): string {
        return "Working from home"
    }
    // Director takes coffee break
    getCoffeeBreak(): string {
        return "Getting a coffee break"
    }
    // Director-specific tasks
    workDirectorTasks(): string {
        return "Getting to director tasks"
    }
}

// Teacher class implements TeacherInterface
class Teacher implements TeacherInterface {
    // Teacher cannot work from home
    workFromHome(): string {
        return "Cannot work from home"
    }
    // Teacher cannot take a coffee break
    getCoffeeBreak(): string {
        return "Cannot have a break"
    }
    // Teacher-specific tasks
    workTeacherTasks(): string {
        return "Getting to work"
    }
}

// Factory function to create either a Director or a Teacher based on salary
function createEmployee(salary: number | string) {
    // If salary is a number and less than 500, return Teacher class
    if (typeof salary === "number" && salary < 500) {
        return Teacher
    }
    // Otherwise, return Director class
    return Director
}
