import jwt  from 'jsonwebtoken';

const secret: any = process.env.JWT_KEY;

export const createToken = (userData: any) => {
  const token = jwt.sign(
    {
      userId: userData._id,
      firstName: userData.firstName,
      phoneNumber: userData.phoneNumber,
      email: userData.email, 
    },
    secret,
    {
      expiresIn: "1h",
    }
  );
  return token;
}; 
