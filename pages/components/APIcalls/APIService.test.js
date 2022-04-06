const APIService = require( "./APIService")
const data = require("./cattleInfo")

let newCattleInfo = {}

//create a valid info object for cattle
function getValidteInfo() {
   return newCattleInfo = {
      newCattleID: 100,
      newCattleAntbio: "Bioetest",
      newCattleBreed: "Hereford",
      newCattleGender: "Male",
      newCattleWeight: "800 lbs",
      newCattleDna: "VGL ",
      newCattleTag: "2020-Retro",
      newCattleFarmer: "UB",
      newCattleLocation: "Cayo District",
      newCattleHissue: "none",
      newCattleReartype: "Hereford",
      newCattleReproStat: "none",
   }
}

//create a empty obj for a cattle 
function initialize() {
   newCattleInfo = {
         newCattleID: 0,
         newCattleAntbio: "",
         newCattleBreed: "",
         newCattleGender: "",
         newCattleWeight: "",
         newCattleDna: "",
         newCattleTag: "",
         newCattleFarmer: "",
         newCattleLocation: "",
         newCattleHissue: "",
         newCattleReartype: "",
         newCattleReproStat: "",
      }
}

//Clear cattle obj
function clear() {
   newCattleInfo = {}
}

//Setup function for each test case
beforeEach(() => {
   initialize()   
})


//tear down function after each test case run
afterEach(() => {
     clear()
})


//Test Suites for API Service files 
describe('Test api calls', () => {

   //Test case to check that there is a value for firebase
   test('Test to see if we have a value for the firebase key', () => {
      expect(APIService.getFirebaseKey).toBeTruthy();
   
   });

   //Test case to check cattle info successfully to the database with valid data
   test('Add cattle info successfully to the database with valid data ', async () => { 
   newCattleInfo = getValidteInfo()
   const result = await APIService.addNewCattle(newCattleInfo);
   expect(result).toBe(true);

   });

   //Test case to check cattle info fails to the database with invalid data
   test('Add cattle info to the database fails with invalid data', async () => { 
   const result = await APIService.addNewCattle(newCattleInfo);
   expect(result).toBe(false);
   
  } );

   //Test case to check  product info successfully to the database with valid data
   test('Add product info to the successfully database with valid data', async () => { 
   
      newCattleInfo = {
          newCattleID: 10, 
          newBatchNum: 13,
          newCostPu :  "1023",
          newExpiryDate :  "10/23/4",
          newFactoryDes :  "Cayo District",
          newFactoryName :  "Running W",
          newMeatProdType :  "ribs",
          newPckgDate :  "March 30, 2022",
          newProdDesc :  "Spanish Lookout",
          newProdWeight :  "10 lbs",
          newStoreLoc :  "Lucky's",
          newStoreName :  "Running W",
          newTraceNum :  "10",
          newTradeDets :  "Farmer Meat",
      }
      

   const result = await APIService.addNewProduct(newCattleInfo);
   expect(result).toBe(true);

   });

   //Test case to check  product info successfully to the database with invalid data
   test('Add product info fails to the database with invalid data', async () => { 

   const result = await APIService.addNewProduct(newCattleInfo);
   expect(result).toBe(false);

   });


   //Test case to check Slaughter info successfully to the database with valid data
   test('Add Slaughter info successfully to the database with valid data', async () => { 
      newCattleInfo = {
        newCattleID : 100023 , 
        newFctryDest : "Cayo District" ,
        newFctryName : "Running W" ,
        newSlghtrDate : "Jan 1, 2020" ,
        newSlgthrMtd : "Stunning" ,
        newTraceNum : "100023",
      }
   const result = await APIService.addNewSlaughter(newCattleInfo);
   expect(result).toBe(true);
   });

   //Test case to check Slaughter info successfully to the database with invalid data
   test('Add Slaughter info fails to post to the database with invalid data', async () => { 
      newCattleInfo = {
      newCattleID : 0, 
      newFctryDest : "" ,
      newFctryName : "" ,
      newSlghtrDate : "Jan 1, 2020" ,
      newSlgthrMtd : "Stunning" ,
      newTraceNum : "100023",
   }
   const result = await APIService.addNewSlaughter(newCattleInfo);
   expect(result).toBe(false);
   
   });

   test("Test generate report Filtering works with valid id", () => {
      let result = APIService.filterInfo(data.getData(), 100);
      console.log(result);
       expect(result.length).toBe(2);
   })

   
   test("Test generate report Filtering works with invalid Id", () => {
      let result = APIService.filterInfo(data.getData(), 1234);
      console.log(result);
       expect(result.length).not.toBe(0)
   })

  });
  
