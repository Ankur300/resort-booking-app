export default function validation(values){
    let errors={}
    if(!values.username.trim()){
        errors.username="Username Required"
    }
  

    if(!values.email){
        errors.email="Email required"
    }

    if(!values.number){
        errors.number=" mobile number"
    }

    if(!values.password){
        errors.password='password is required'
    } else if(values.password.lenght<6){
        errors.password="password needs to be  6 characters or more"
    }
  if(!values.password2){
      errors.password2="password2 is required"
  } else if(values.password !== values.password2){
      errors.password2="password do not  match"
  }




    return errors;

}