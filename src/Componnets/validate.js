export const validate = (data , type) => {
  const errors = {};
  
  //email error

  if (!data.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email Address is Invalid";
  } else {
    delete errors.email;
  }

  //password error

  if (!data.password) {
    errors.password = "Email requierd";
  } else if (data.password.length < 6) {
    errors.password = "password is short ";
  } else {
    delete errors.password;
  }


  

if(type === 'signup'){
  //name error
  if (!data.name.trim()) {
    errors.name = "Username required";
  } else {
    delete errors.name;
  }

  //confirmPassword error

  if (!data.confirmPassword) {
    errors.confirmPassword = "confirm password";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = " password is not match";
  } else {
    delete errors.confirmPassword;
  }

  //isAccept error

  if (data.isAccept) {
    delete errors.isAccept;
  } else {
    errors.isAccept = "please Accept ";
  }

}

return errors;
}