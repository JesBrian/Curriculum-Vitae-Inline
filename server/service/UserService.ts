import UserModel from '../model/UserModel'

exports.userLoginSer = () => {
  UserModel.find((err, res) => {
    console.log(res[0]);
  });
};
