function otpGen(limit) {
    // Get the current time in milliseconds
    const now = Date.now();

    // Generate a random number based on the current time
    const rand = Math.random() * now;

    // Multiply the random number by 100000 to get a six-digit integer
    const otp = Math.floor(rand * 100000);

    // Convert the OTP to a string and log it
    // console.log(otp.toString());

    // Define a 12-digit number to convert
    const num = otp.toString();

    // Convert the number to a string and split it into an array of characters
    const digits = num.toString().split('');

    // Take the first six digits and combine them into a new string
    const newNum = digits.slice(0,limit).join('');

    // Convert the new string back to a number and log the result
    const generator = parseInt(newNum, 10);
    return generator;
}

module.exports = otpGen;

// console.log(otpGen(10));