const server_conn = require('./server_conn');
const database_connection = require('./Database_Connection');
// const New_Password = require('./New_Password');
const User = require('./User');
const bcrypt = require('bcrypt');

async function changePassword(userID, oldPassword, newPassword) {
  try {
    // Find user in the database
    const user = await User.findById(userID);

    if (!user) {
      console.error(error.userNotFound);
      throw new Error('User not found');
    }

    // Verify old password
    const passwordMatch = await bcrypt.compare(oldPassword, user.password);

    if (!passwordMatch) {
      console.error(error.incorrectPassword);
      throw new Error('Incorrect password');
    }

    // Hash and store new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    return { message: 'Password changed successfully' };
  } catch (error) {
    console.error(error.changingPassword);
    throw new Error(error.message);
  }
}
