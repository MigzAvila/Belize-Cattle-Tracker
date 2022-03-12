export class APIService {
  getUsers() {
    return fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  }

 // updating user
  async login(name, auth) {
    let state = false;
    console.log(name, "iddd");

    let user = await fetch(`/api/users/${name}`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
    console.log(user, "currentQues");

    user.isAuth = auth;
    console.log(user, "currentQues");

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
    console.log(state, "is true or false");
    return state;
  }

}
