import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-2_f6dDHkYHa',
  ClientId: '4nrs0op0jtu5a8m2q9d7395rdg'
};

export default new CognitoUserPool(poolData);
