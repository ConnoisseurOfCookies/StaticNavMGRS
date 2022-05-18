


function getStaticNavGrid(gridOrigin, distance, bearing){
    
    let gridVector = gridToVector(gridOrigin);

    let radian = milToRadian(bearing);

    let unitVector = getUnitVector(radian);

    let mainVector = [unitVector[0]*distance, unitVector[1]*distance];

    let resultGridVector = [mainVector[0]+gridVector[0], mainVector[1] + gridVector[1]];

    return vectorToGrid(resultGridVector);
}

function gridIsValid(grid){
    return true;
}

function gridToVector(grid){
  
}

function milToRadian(bearing){
 let shiftedBearing = Math.abs(4800-bearing);
 return (shiftedBearing*Math.PI)/6400;
}

function getUnitVector(angle){

}

function vectorToGrid(){
    
}



const unitTests = {
    Tests: {
        testGridToVector: () => {
            if(typeof gridToVector === 'undefined'){
                console.log("gridToVector is not defined");
                return;
            }

            let grid1 = "332666";
            console.assert(gridToVector(grid1) === [33200, 66600], `gridToVector does not convert ${grid1} to vector`);
        },
        testVectorToGrid: () => {
            if(typeof vectorToGrid === 'undefined'){
                console.log('vectorToGrid has not been defined');
                return;
            }
        },
        testMilToRadian: () => {
            if(typeof milToRadian === 'undefined'){
                console.log('milToRadian has not been defined');
                return;
            }
            
            console.assert(milToRadian(0 == Math.PI/2), "milToRadian does not convert")
        },
        testGetUnitVector: () => {
            if(typeof getUnitVector === "undefined"){
                console.log('getUnitVector has not been defined');
                return;
            }
        },
        testGridIsValid: () => {
            if(typeof gridIsValid === 'undefined'){
                console.log('gridIsValid has not been defined');
                return;
            }
        }
    },
    Run: () => {
        unitTests.Tests.testGridToVector();
        unitTests.Tests.testVectorToGrid();
        unitTests.Tests.testMilToRadian();
        unitTests.Tests.testGetUnitVector();
        unitTests.Tests.testGridIsValid();
    }
}

unitTests.Run();
