import { useState } from "react";
import validationbook from "./validationbook";

const initialvalues={
    username:'',
    email:'',
    number:'',
    nopeople: '',
    mop:'',
    gender:'',
    chIn:'',
    chOut:''
}


const useBookingForm=(validationbook)=>{
    const [values,setValuse]=useState(initialvalues)


    const [errors,seterror]=useState({});


    const handleChange =(e)=>{
        setValuse({
            ...values,
           [e.target.name ]:e.target.value
           
        })
    }

    const handleSubmit=(e)=>{

        e.preventDefault()

        seterror(validationbook(values))
    }

    return { handleChange, values,handleSubmit,errors}
}

export default useBookingForm