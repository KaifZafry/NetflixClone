export const checkValidData= (email,password,name)=>{
    const isEmailValid= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid= /^[a-zA-Z ]{2,30}$/.test(name);
    if(!isEmailValid) return "Your email is invalid";
    if(!isPasswordValid) return "Your Password is invalid";
    if(!isNameValid) return "Your Name is invalid";

    return null
}

