// user error

module.exports.signupUtils=(err)=>{
    const errors={ firstName:"",lastName:"",email:""};

    if(err.message.includes("firstName"))
        errors.firstName="firstName already existe!";

    if(err.message.includes("lastName"))
        errors.lastName="lastName already existe!";

    if(err.message.includes("email"))
        errors.email="email already existe!";

    return errors;

}

// login
module.exports.login=(err)=>{
    const errors={email:"",password:""};
}