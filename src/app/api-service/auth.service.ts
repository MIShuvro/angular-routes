export class AuthService {
  login() {
    return true;
  }

  logout() {
    return false;
  }

  authGuard() {
    const promise = new Promise((resolve, reject) => {
      if (this.login()) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
    return promise;
  }
}
