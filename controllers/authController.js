import userModel from "../models/userModel";
export const registerController = async (req,res) => {
    try {
        const {name, email, password, phone, address} = req.body
        //validations
        if(!name){
            return resizeTo.send({error:'Name is Required'})
        }
        if(!email){
            return resizeTo.send({error:'email is Required'})
        }
        if(!password){
            return resizeTo.send({error:'password is Required'})
        }
        if(!phone){
            return resizeTo.send({error:'phone is Required'})
        }
        if(!address){
            return resizeTo.send({error:'address is Required'})
        }

        //exisiting user
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Errro in Registeration',
            error
        })
    }
};


