
const APIService = {

   getFirebaseKey() {
    const response = process.env.NEXT_PUBLIC_APP_KEY;
    return response;
  },
  
  getUsers() {
    return fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  },

  async addNewCattle (newCattleInfo){
            try {
               if (newCattleInfo.newCattleID !== 0 && 
                   newCattleInfo.newCattleAntbio !== "" &&
                   newCattleInfo.newCattleBreed !== "" && 
                   newCattleInfo.newCattleGender !== "" && 
                   newCattleInfo.newCattleWeight !== "" && 
                   newCattleInfo.newCattleDna !== "" && 
                   newCattleInfo.newCattleTag !== "" && 
                   newCattleInfo.newCattleFarmer !== "" && 
                   newCattleInfo.newCattleLocation !== "" &&
                   newCattleInfo.newCattleHissue !== "" &&
                   newCattleInfo.newCattleReartype !== "" && 
                   newCattleInfo.newCattleReproStat !== "" &&
                   newCattleInfo.newFctryDest !== "" &&
                   newCattleInfo.newFctryName !== "" &&
                   newCattleInfo.newSlgthrDate !== "" &&
                   newCattleInfo.newSlgthrMtd !== "" &&
                   newCattleInfo.newTraceNum !== "") {
               }
               else {
                   throw new Error("Please fill in all the fields");
               }
            }
            catch (err) {
                console.log(err);
                return false; 
            }
        return true;
  },

 // updating user
  async login(name, auth) {
    let state = false;
    let user = await fetch(`/api/users/${name}`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
    user.isAuth = auth;
    try {
      await fetch(`/api/users/${name}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          password: user.password,
          isAuth: auth,
        }),
      })
        .then((response) => response.json())
        .then(async (json) => {
          state = true;
          json = state;
          return json;
        });
    } catch (err) {
      console.log(err);
      state = false;
    }
    return state;
  },
  add(a,b) {
    return a+b;
  }

}

// Exporting the component
module.exports = APIService;