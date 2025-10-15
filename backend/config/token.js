import jwt from 'jsonwebtoken';

export const genToken = async (userid)=>{

    try{
        let token = await jwt.sign({userid,},process.env.JWT_SECRET_KEY,{expiresIn:'7d'});
        return token;
    }
    catch(error){
        console.log(error);
    }

}