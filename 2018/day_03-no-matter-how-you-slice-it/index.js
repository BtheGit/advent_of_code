const fs = require('fs');

const inputLines = fs.readFileSync('./input.txt', 'utf8').split('\n');
const input = inputLines.map(line => {
    const test = /#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/;
    const matches = line.trim().match(test);
    return {
        id: parseInt(matches[1]),
        width: parseInt(matches[4]),
        height: parseInt(matches[5]),
        x_start: parseInt(matches[2]),
        y_start: parseInt(matches[3]),
        x_end: parseInt(matches[2]) + parseInt(matches[4]),
        y_end: parseInt(matches[3]) + parseInt(matches[5]),
    }
})

// // APPROACH ONE (FAILED)
// const testIntersections = (rect1, rect2) => {
//     const x_intersection = Math.max(0, Math.min(rect1.x_end, rect2.x_end) - Math.max(rect1.x_start, rect2.x_start));
//     const y_intersection = Math.max(0, Math.min(rect1.y_end, rect2.y_end) - Math.max(rect1.y_start, rect2.y_start));
//     if(x_intersection > 0 && y_intersection > 0){
//         return true;
//     }
//     return false;
// }

// const getIntersectingPoints = (claim1, claim2, intersections) => {
//     for(let i = claim1.x_start; i < claim1.x_end; i++){
//         for(let j = claim1.y_start; j < claim1.y_end; j++){
//             const isXIntersecting = i >= claim2.x_start && i <= claim2.x_end;
//             const isYIntersecting = j >= claim2.x_start && j <= claim2.y_end;
//             if(isXIntersecting && isYIntersecting){
//                 const point = `${ i },${ j }`
//                 intersections.add(point)
//             }
//         }
//     }
// }

// const compareClaims = (claim1, claim2, intersections) => {
//     const isIntersecting = testIntersections(claim1, claim2);
//     if(!isIntersecting){
//         return;
//     }

//     // Calculate all intersecting points and add them progressively to the set
//     getIntersectingPoints(claim1, claim2, intersections);
// }

// // Store a set of strings representing grid points where a claim is shared. We can use a set because we don't care about
// // how many times a point is claimed, as long as it's at least twice.

// // We need to compare each claim against all the others

// // Create a cheap test of whether two claims have any intersection before calculating the intersecting points
// // using rectangle collision detection

// // If there is a collision, add all the intersecting points to the set of intersections.
// const getSharedClaims = claims => {
//     const intersections = new Set();
//     while(claims.length > 1){
//         const testClaim = claims.pop();
//         for(claim of claims){
//             compareClaims(testClaim, claim, intersections);
//         }
//     }
//     return intersections.size;
// }

// const pointsWithAtLeast2Claims = getSharedClaims(input)
// console.log({ pointsWithAtLeast2Claims })

// APPROACH 2 (SUCCESS)

// Generate a grid 1000 x 1000 (hardcoded) of the number 0
// Iterate over each claim and add to the point counter for all claimed area
// Iterate over original grid and count each point that is more than 1

const generateArray = (size, el = '') => {
    let array = [];
    for(let i = 0; i < size; i++){
        array.push(el)
    }
    return array;
}

const generateGrid = size => {
    let grid = generateArray(size);
    grid = grid.map(_ => generateArray(size, 0));
    return grid;
}


const markClaimedPoints = (claim, grid) => {
    for(let i = claim.x_start; i < claim.x_end; i++){
        for(let j = claim.y_start; j < claim.y_end; j++){
            grid[i][j]++
        }
    }
    return grid;
}

let grid = generateGrid(1000);

for(let i = 0 ; i < input.length; i++){
    const claim = input[i];
    grid = markClaimedPoints(claim, grid);
}

const intersectionCount = grid.reduce((acc, curr) => {
    const rowCount = curr.filter(col => col > 1).length;
    acc += rowCount;
    return acc;
}, 0)
console.log({ intersectionCount })

// Part 2

const isClaimUnique = (claim, grid) => {
    let intersectionCount = 0;
    for(let i = claim.x_start; i < claim.x_end; i++){
        for(let j = claim.y_start; j < claim.y_end; j++){
            if(grid[i][j] > 1){
                intersectionCount++
            }
        }
    }
    return !intersectionCount;
}

const getUniqueClaim = (claims, grid) => {
    for(let i = 0; i < claims.length; i++){
        const isUnique = isClaimUnique(claims[i], grid);
        if(isUnique){
            return claims[i].id;
        }
    }
}

const uniqueClaim = getUniqueClaim(input, grid);
console.log({ uniqueClaim })