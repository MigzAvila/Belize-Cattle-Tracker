const APIService = require( "./APIService")

let newCattleInfo = {}

function initialize() {
   newCattleInfo = {
         newCattleID: 100,
         newCattleAntbio: "test",
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
   
  } );

  describe('', () => {
     
   test('Add cattle info fails to the database', async () => { 
   console.log(newCattleInfo)
   const result = await APIService.addNewCattle(newCattleInfo);
   expect(result).toBe(false);
   
});
     
  });
  

  describe('', () => {
      test('Add cattle info successfully to the database', async () => { 
     newCattleInfo = {
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
   const result = await APIService.addNewCattle(newCattleInfo);
   expect(result).toBe(true);

   });
     
  });
  

    


