import { useState } from "react";
import validation from "./validation";
const initialvalues={
    username:'',
    email:'',
    number:'',
    password:'',
    password2:''

}


const useForm=(validation)=>{
    const [values,setValuse]=useState(initialvalues)


    const [errors,seterror]=useState({});


    const handleChange =(e)=>{
        setValuse({
            ...values,
           [e.target.name ]:e.target.value
           
        })
        console.log(e.target.value);
    }

    const handleSubmit=(e)=>{

        e.preventDefault()

        seterror(validation(values))
    }

    return { handleChange, values,handleSubmit,errors}
}

export default useForm