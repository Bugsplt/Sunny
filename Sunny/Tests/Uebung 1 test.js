//Ignore this part  v
const assert = require('assert');
const uebung1 = require("../Uebungen/Uebung 1");
let log = "";
let robotString = "0123456789012345678901\n         __\n _(\\    |@@|\n(__/\\__ \\--/ __\n   \\___|----|  |   __\n       \\ }{ /\\ )_ / _\\\n       /\\__/\\ \\__O (__\n      (--/\\--)    \\__/\n      _)(  )(_\n     `---''---`";
let numberSwapString = ["Before Swap:\nx: 15\ny: 23\nAfter Swap:\nx: 23\ny: 15", "Before Swap:\nx: 28\ny: 567\nAfter Swap:\nx: 567\ny: 28"]
console.log = function (d) {
    if (log === "") {
        log = d;
    } else {
        log += "\n" + d;
    }

    process.stdout.write(d + '\n');
};
//Ignore this part  ^


//Run all tests here 
describe('testUebung1', () => {


    //Tests for sayHelloWorld
    describe('sayHelloWorld', () => {
        it('should write "Hello World" on console', () => {
            console.log("\n\nTest for sayHelloWorld");
            //Arrange
            log = "";
            //Act
            uebung1.sayHelloWorld();
            //Assert
            assert.strictEqual(log, "Hello World");
            console.log("success!");
        });
    })


    //Tests for helloRobot
    describe('helloRobot', () => {
        it('should write robot on console', function () {
            console.log("\n\nTest for helloRobot");
            //Arrange
            log = "";
            //Act
            uebung1.helloRobot();
            //Assert
            assert.strictEqual(log, robotString);
            console.log("success!");
        });
    });


    //Tests for sumOfLiterals
    describe('sumofLiterals', () => {
        it('should write the correctly rounded number on console', function () {
            console.log("\n\nTest for sumOfLiterals");
            //Arrange
            log = "";
            //Act
            uebung1.sumOfLiterals();
            //Assert
            assert.equal(log, 64497);
            console.log("success!");
        });
    });


    //Tests for addTwoNumbers
    describe('addTwoNumbers', () => {
        //Test 1
        it('should write 21 on console (12 + 9)', function () {
            console.log("\n\nTest 1 addTwoNumbers");
            //Arrange
            log = "";
            //Act
            uebung1.addTwoNumbers(12, 9);
            //Assert
            assert.equal(log, 12 + 9);
            console.log("success!");
        });

        //Test2
        it('should write 183019960 on console (182736470 + 283490)', function () {
            console.log("\n\nTest 2 for addTwoNumbers");
            //Arrange
            log = "";
            //Act
            uebung1.addTwoNumbers(182736470, 283490);
            //Assert
            assert.equal(log, 182736470 + 283490);
            console.log("success!");
        });
    });


    //Tests for swapTwoNumbers
    describe('swapTwoNumbers ', function () {
        //Test 1
        it('should write correct text on console', function () {
            console.log("\n\nTest 1 for swapTwoNumbers");
            //Arrange
            log = "";
            //Act
            uebung1.swapTwoNumbers(15, 23);
            //Assert
            assert.equal(log, numberSwapString[0]);
            console.log("success!");
        });
        
        //Test 2
        it('should write correct text on console', function () {
            console.log("\n\nTest 2 for swapTwoNumbers");
            //Arrange
            log = "";
            //Act
            uebung1.swapTwoNumbers(28, 567);
            //Assert
            assert.equal(log, numberSwapString[1]);
            console.log("success!");
        });
    });

    
    //Tests for compareTwoNumbers
    describe('compareTwoNumbers', function () {
        //Test 1
        it('should recognize equal numbers', function () {
            console.log("\n\nTest 1 for compareTwoNumbers");
            //Arrange
            log = "";
            //Act
            uebung1.compareTwoNumbers(28, 28);
            //Assert
            assert.equal(log, "28 = 28");
            console.log("success!");
        });

        //Test 2
        it('should recognize x to be higher', function () {
            console.log("\n\nTest 2 for compareTwoNumbers");
            //Arrange
            log = "";
            //Act
            uebung1.compareTwoNumbers(3678126, 28);
            //Assert
            assert.equal(log, "3678126 > 28");
            console.log("success!");
        });

        //Test 3
        it('should recognize y to be higher', function () {
            console.log("\n\nTest 3 for compareTwoNumbers");
            //Arrange
            log = "";
            //Act
            uebung1.compareTwoNumbers(1, 3);
            //Assert
            assert.equal(log, "1 < 3");
            console.log("success!");
        });
    });

    
    //Tests for ratingSalesPerson
    describe('ratingSalesPerson', function () {
        //Test 1
        it('should rate revenue < 0 as Invalid Revenue', function () {
            console.log("\n\nTest 1 for ratingSalesPerson");
            console.log("success!");
            //Arrange
            log = "";
            //Act
            uebung1.ratingSalesPerson(-900);
            //Assert
            assert.equal(log, "Invalid Revenue");
            console.log("success!");
        });
        
        //Test 2
        it('should rate revenue >= 100000 as invalid', function () {
            console.log("\n\nTest 2 for ratingSalesPerson");
            //Arrange
            log = "";
            //Act
            uebung1.ratingSalesPerson(100000);
            //Assert
            assert.equal(log, "Invalid Revenue");
            console.log("success!");
        });
        
        //Test 3
        it('should rate 0 <= revenue < 20000 as Poor Sales Revenue', function () {
            console.log("\n\nTest 3 for ratingSalesPerson");
            //Arrange
            log = "";
            //Act
            uebung1.ratingSalesPerson(19999);
            //Assert
            assert.equal(log, "Poor Sales Revenue");
            console.log("success!");
        });
        
        //Test 4
        it('should rate 20000 <= revenue < 50000 as Average Sales Revenue', function () {
            console.log("\n\nTest 4 for ratingSalesPerson");
            //Arrange
            log = "";
            //Act
            uebung1.ratingSalesPerson(20000);
            //Assert
            assert.equal(log, "Average Sales Revenue");
            console.log("success!");
        });
        
        //Test 5
        it('should rate 50000 <= revenue < 80000 as Good Sales Revenue', function () {
            console.log("\n\nTest 5 for ratingSalesPerson");
            //Arrange
            log = "";
            //Act
            uebung1.ratingSalesPerson(77809);
            //Assert
            assert.equal(log, "Good Sales Revenue");
            console.log("success!");
        });
        
        //Test 6
        it('should rate 80000 <= revenue < 100000 as Excellent Sales Revenue', function () {
            console.log("\n\nTest 6 for ratingSalesPerson");
            //Arrange
            log = "";
            //Act
            uebung1.ratingSalesPerson(80000);
            //Assert
            assert.equal(log, "Excellent Sales Revenue");
            console.log("success!");
        });
    });
    
    
    //Tests for getCommissionrate
    describe('getCommissionrate', function () {
        //Test 1
        it('should give commissionClass 1 a commissionrate of 0.01', function () {
            console.log("\n\nTest 1 for getCommissionrate");
            //Arrange
            log = "";
            //Act
            uebung1.getCommissionRate(1);
            //Assert
            assert.equal(log, "Your Commission Rate was set to 0.01");
            console.log("success!");
        });

        //Test 2
        it('should give commissionClass 2 a commissionrate of 0.02', function () {
            console.log("\n\nTest 2 for getCommissionrate");
            //Arrange
            log = "";
            //Act
            uebung1.getCommissionRate(2);
            //Assert
            assert.equal(log, "Your Commission Rate was set to 0.02");
            console.log("success!");
        });

        //Test 3
        it('should give commissionClass 3 a commissionrate of 0.03', function () {
            console.log("\n\nTest 3 for getCommissionrate");
            //Arrange
            log = "";
            //Act
            uebung1.getCommissionRate(3);
            //Assert
            assert.equal(log, "Your Commission Rate was set to 0.03");
            console.log("success!");
        });

        //Test 4
        it('should give commissionClass 4 a commissionrate of 0.04', function () {
            console.log("\n\nTest 4 for getCommissionrate");
            //Arrange
            log = "";
            //Act
            uebung1.getCommissionRate(4);
            //Assert
            assert.equal(log, "Your Commission Rate was set to 0.04");
            console.log("success!");
        });

        //Test 4
        it('should give commissionClass 4 a commissionrate of 0.04', function () {
            console.log("\n\nTest 4 for getCommissionrate");
            //Arrange
            log = "";
            //Act
            uebung1.getCommissionRate(4);
            //Assert
            assert.equal(log, "Your Commission Rate was set to 0.04");
            console.log("success!");
        });

        //Test 5
        it('should give other commissionClasses a commissionrate of 0.0', function () {
            console.log("\n\nTest 5 for getCommissionrate");
            //Arrange
            log = "";
            //Act
            uebung1.getCommissionRate(5);
            //Assert
            assert.equal(log, "Your Commission Rate was set to 0.0");
            console.log("success!");
        });

        //Test 5
        it('should give other commissionClasses a commissionrate of 0.0', function () {
            console.log("\n\nTest 5 for getCommissionrate");
            //Arrange
            log = "";
            //Act
            uebung1.getCommissionRate(8723461239);
            //Assert
            assert.equal(log, "Your Commission Rate was set to 0.0");
            console.log("success!");
        });
    });

    
    //Tests for leapyear
    describe('leapyear', function () {
        //Test 1
        it('should count 2000 as a leapyear', function () {
            console.log("\n\nTest 1 for leapyear");
            //Arrange
            log = "";
            //Act
            uebung1.leapyear(2000);
            //Assert
            assert.equal(log, "Leapyear");
            console.log("success!");
        });

        //Test 2
        it('should not count 1900 as a leapyear', function () {
            console.log("\n\nTest 2 for leapyear");
            //Arrange
            log = "";
            //Act
            uebung1.leapyear(1900);
            //Assert
            assert.equal(log, "Not a Leapyear");
            console.log("success!");
        });

        //Test 3
        it('should count 2024 as a leapyear', function () {
            console.log("\n\nTest 3 for leapyear");
            //Arrange
            log = "";
            //Act
            uebung1.leapyear(2024);
            //Assert
            assert.equal(log, "Leapyear");
            console.log("success!");
        });

        //Test 4
        it('should not count 2193 as a leapyear', function () {
            console.log("\n\nTest 4 for leapyear");
            //Arrange
            log = "";
            //Act
            uebung1.leapyear(2193);
            //Assert
            assert.equal(log, "Not a Leapyear");
            console.log("success!");
        });
    });
    
    //Tests for transposedNumbers
    describe('transposedNumbers', function () {
        //Test 1
        it('should change 123 to 321', function () {
            console.log("\n\nTest 1 for transposedNumbers");
            //Arrange
            log = "";
            //Act
            uebung1.transposedNumbers(123);
            //Assert
            assert.equal(log, 321);
            console.log("success!");
        });

        //Test 2
        it('should say 1000 is too large', function () {
            console.log("\n\nTest 2 for transposedNumbers");
            //Arrange
            log = "";
            //Act
            uebung1.transposedNumbers(1000);
            //Assert
            assert.equal(log, "Input too large");
            console.log("success!");
        });

        //Test 3
        it('should change 98 to 890', function () {
            console.log("\n\nTest 3 for transposedNumbers");
            //Arrange
            log = "";
            //Act
            uebung1.transposedNumbers(98);
            //Assert
            assert.equal(log, 890);
            console.log("success!");
        });

        //Test 4
        it('should change 5 to 500', function () {
            console.log("\n\nTest 4 for transposedNumbers");
            //Arrange
            log = "";
            //Act
            uebung1.transposedNumbers(5);
            //Assert
            assert.equal(log, 500);
            console.log("success!");
        });

        //Test 5
        it('should say -1 is too small', function () {
            console.log("\n\nTest 5 for transposedNumbers");
            //Arrange
            log = "";
            //Act
            uebung1.transposedNumbers(-1);
            //Assert
            assert.equal(log, "Input too small");
            console.log("success!");
        });
    });
});