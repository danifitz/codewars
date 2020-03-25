// You live in the city of Cartesia where all roads are laid out in a perfect grid. 
// You arrived ten minutes too early to an appointment, so you decided to take the 
// opportunity to go for a short walk. The city provides its citizens with a Walk 
// Generating App on their phones -- everytime you press the button it sends you 
// an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
// You always walk only a single block in a direction and you know it takes you 
// one minute to traverse one city block, so create a function 
// that will return true if the walk the app gives you will take you 
// exactly ten minutes (you don't want to be early or late!) and will, 
// of course, return you to your starting point. Return false otherwise.

/*
 * SOLUTION
 */

function isValidWalk(walk) {
    // first we need to make sure there are enough directions to satisfy our craving for a ten-minute walk
    if (walk.length != 10) {
        return false;
    } else {
        // we need to count how many instructions we get for each direction.
        // at the end, the following must be true
        // n == s
        // e == w
        // otherwise, we won't get home
        var northCount = 0,
            southCount = 0,
            eastCount = 0,
            westCount = 0;

        for (let i in walk) {
            switch (walk[i]) {
                case 'n':
                    //north
                    northCount++;
                    break;
                case 's':
                    //south
                    southCount++;
                    break;
                case 'e':
                    //east
                    eastCount++;
                    break;
                case 'w':
                    //west
                    westCount++
                    break;
            }
        }
        console.log(northCount, southCount, eastCount, westCount);
        if (northCount == southCount && eastCount + westCount == 0 || eastCount == westCount && northCount + southCount == 0 || northCount == southCount && eastCount == westCount) {
            return true;
        } else {
            return false;
        }
    }
}

//some test cases for you...
// Test.expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
// Test.expect(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
// Test.expect(!isValidWalk(['w']), 'should return false');
// Test.expect(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');