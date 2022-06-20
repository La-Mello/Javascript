/**
 * @switch
 * Simplified verion of if..else if... or nested if statements
 * switches a single value to different cases
 * if a case matches the value.. the cases' block is executed
 * if no case is matched the default block is executed
 * a break MUST be added after each case block
 */

const x=30;

switch (x) {
    case 10:
        console.log("x=10");
        break;

    case 20:
        console.log("x=20");
        break;

    case 30:
        console.log("x=30");
        break;

    default:
        console.log("no match");
        break;
}