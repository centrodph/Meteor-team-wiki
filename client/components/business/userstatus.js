class UserStatus {
  constructor(props) {}
  /**
   * Navigate to profile Page
   */
  goToMyProfile() {
    this.props.history.push('/dashboard/myprofile');
  }
  /**
   * Custom interface to check user
   * @return {[type]} [description]
   */
  checkUser() {
    return Meteor.userId() ? true : false;
  }

  /**
   * [getUserName description]
   * @return {[type]} [description]
   */
  getUserName() {
    if (!Meteor.user()) return;
    const { username } = Meteor.user();
    return username;
  }
}

export default UserStatus;
