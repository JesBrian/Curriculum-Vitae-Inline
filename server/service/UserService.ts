import UserModel from '../model/UserModel'

export default class UserService {
	static async test () {
    UserModel.find((err, res) => {
      console.log(res[0]);
    });
	}
}
