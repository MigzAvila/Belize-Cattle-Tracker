const APIService = require( "./APIService")

let newCattleInfo = {}

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
      newCattleHissue: "asd",
      newCattleReartype: "asdasd",
      newCattleReproStat: "asdsa",
   }
}

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

function clear() {
   newCattleInfo = {}
}

beforeEach(() => {
   initialize()   
})


afterEach(() => {
     clear()
})


describe('Test api calls', () => {
   test('Test to see if we have a value for the firebase key', () => {
      expect(APIService.getFirebaseKey).toBeTruthy();
   
   });

      
   test('Add cattle info fails to the database with invalid data', async () => { 
   const result = await APIService.addNewCattle(newCattleInfo);
   expect(result).toBe(false);
   
  } );

   test('Add cattle info successfully to the database', async () => { 
   newCattleInfo = getValidteInfo()
   const result = await APIService.addNewCattle(newCattleInfo);
   expect(result).toBe(true);

   });

   test('Add product info successfully to the database', async () => { 
   
      newCattleInfo = {
          newCattleID: 10, 
          newBatchNum: 13,
          newCostPu :  "1023",
          newExpiryDate :  "10/23/4",
          newFactoryDes :  "tests",
          newFactoryName :  "Testfactory",
          newMeatProdType :  "Testfactory",
          newPckgDate :  "Testfactory",
          newProdDesc :  "Testfactory",
          newProdWeight :  "Testfactory",
          newStoreLoc :  "Testfactory",
          newStoreName :  "Testfactory",
          newTraceNum :  "Testfactory",
          newTradeDets :  "Testfactory",
      }
      

   const result = await APIService.addNewProduct(newCattleInfo);
   expect(result).toBe(true);

   });

   test('Add product info fails to the database with invalid data', async () => { 

   const result = await APIService.addNewProduct(newCattleInfo);
   expect(result).toBe(false);

   });



   test('Add Slaughter info successfully to the database', async () => { 
      newCattleInfo = {
        newCattleID : 100023 , 
        newFctryDest : "RTer" ,
        newFctryName : "RESs dfs" ,
        newSlghtrDate : "tTDff " ,
        newSlgthrMtd : "sdf sd" ,
        newTraceNum : "sfdf",
      }
   const result = await APIService.addNewSlaughter(newCattleInfo);
   expect(result).toBe(true);
   });


   test('Add Slaughter info fails to post to the database with invalid data', async () => { 
      newCattleInfo = {
      newCattleID : 0 , 
      newFctryDest : "" ,
      newFctryName : "" ,
      newSlghtrDate : "tTDff " ,
      newSlgthrMtd : "sdf sd" ,
      newTraceNum : "sfdf",
   }
   const result = await APIService.addNewSlaughter(newCattleInfo);
   expect(result).toBe(false);
   
   });

  });
  
