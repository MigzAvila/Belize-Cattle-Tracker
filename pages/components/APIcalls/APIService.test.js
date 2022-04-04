const APIService = require( "./APIService")

describe('APIService', () => {
   test('adds two num', () => {
      expect(APIService.add(1,2)).toBe(3);
     
   });

   test('Add cattle info successfully to the database', async () => { 
   const newCattleInfo = {
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

   test('Add cattle info fails to the database', async () => { 
      const newCattleInfo = {
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
   const result = await APIService.addNewCattle(newCattleInfo);
   expect(result).toBe(false);
   
});
   
  } );

    


