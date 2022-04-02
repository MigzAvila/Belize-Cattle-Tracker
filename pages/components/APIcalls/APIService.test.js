const APIService = require( "./APIService")
//create a test case with jest
describe('APIService', () => {
   test('adds two num', () => {
      expect(APIService.add(1,2)).toBe(3);
     
   });
   
  } );

    


