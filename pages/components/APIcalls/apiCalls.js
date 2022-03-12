export class APIService {
  getUsers() {
    return fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  }

}
