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


describe('testing purpose', () => {
   test('adds two num', () => {
      expect(APIService.add(1,2)).toBe(3);
     
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

  });
  

