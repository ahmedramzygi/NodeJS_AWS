const AWS = require('aws-sdk');
// Configure AWS credentials
AWS.config.update({
  region: 'eu-central-1'
});




// Initialize CognitoIdentityServiceProvider
const cognito = new AWS.CognitoIdentityServiceProvider({
  apiVersion: '2016-04-18',
});


const clientId = '';

// Register a new user
async function registerUser(email, password) {
  const params = {
    ClientId: clientId,
    Password: password,
    Username: email,
    UserAttributes: [
      {
        Name: 'email',
        Value: email,
      },
    ],
  };

  try {
    const result = await cognito.signUp(params).promise();
    console.log('User registered:', result);
    return result;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
}

// Authenticate a user (login)
async function loginUser(email, password) {
  const params = {
    AuthFlow: 'USER_PASSWORD_AUTH',
    ClientId: clientId,
    AuthParameters: {
      USERNAME: email,
      PASSWORD: password,
    },
  };

  try {
    const result = await cognito.initiateAuth(params).promise();
    console.log('User logged in:', result);
    return result;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
}

// Logout the currently signed-in user
async function logoutUser(accessToken) {
  const params = {
    AccessToken: accessToken
  };

  try {
    const result = await cognito.globalSignOut(params).promise();
    console.log('User logged out:', result);
    return result;
  } catch (error) {
    console.error('Error logging out user:', error);
    throw error;
  }
}

module.exports = { registerUser, loginUser, logoutUser };