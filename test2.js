function calculateMinibuses(n, familyMembers) {
    const totalMembers = familyMembers.reduce((acc, curr) => acc + curr, 0);
    const minBuses = Math.ceil(totalMembers / 4);
    return minBuses;
}

function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let n;
    let familyMembers;

    rl.question('Enter the number of families: ', (answer) => {
        n = parseInt(answer);
        rl.question('Enter the number of members in each family separated by space: ', (answer) => {
            familyMembers = answer.split(' ').map(Number);

            // Check if input matches the actual number of families
            if (n !== familyMembers.length) {
                console.log("Input must be equal with count of family");
                rl.close();
            } else {
                // Calculate and print the minimum number of minibuses needed
                const minBuses = calculateMinibuses(n, familyMembers);
                console.log(minBuses);
                rl.close();
            }
        });
    });
}

// Call the main function to start the program
main();
