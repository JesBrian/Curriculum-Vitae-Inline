import UserService from '../service/UserService'

export default class UserController {
	static async controllerFun () {
		UserService.test();
	}
}
