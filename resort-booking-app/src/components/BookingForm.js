// import React from "react";
// import { Form, Button } from "react-bootstrap";
// import validation from "./validation";
// import {Link} from 'react-router-dom';
// import { withRouter, useHistory } from "react-router";
// import useBookingForm from "./useBookingForm";
// import validationbook from "./validationbook";

// function BookingForm() {
//     const history = useHistory();

//     let { handleChange, values, handleSubmit, errors } = useBookingForm(validationbook);

    
//      handleSubmit= async(e)=>{
//          e.preventDefault();
//          const {username,email,number,nopeople,mop,gender,chIn,chOut}=values;
//          const res = await fetch("/BookingForm", {
//             method: 'POST',
//             headers: {
//                 "content-type": 'application/json',
//             },
//          body: JSON.stringify({username,email, number,nopeople,mop,gender,chIn,chOut}),

//        })
//        history.push({
//         pathname: "/BookingConfirmationPage/",
//         state: {
//             username: username,
//             email: email,
//             number: number,
//             nopeople: nopeople,
//             mop: mop,
//             gender: gender,
//             chIn: chIn,
//             chOut: chOut,
//         },
//     })
//     }

    
    
    
//     return (
//         <>
//             <form onSubmit={handleSubmit} className="container ">
//                 <div className="field">
//                     <label>Name: </label>
//                     <div className="control">
//                         <input
//                             type="text"
//                             name="username"
//                             value={values.username}
//                             onChange={handleChange}
//                             className="form-control"
//                         />
//                     </div>
//                 </div>
//                 <div className="field">
//                     <label>Phone Number: </label>
//                     <div className="control">
//                         <input
//                             type="text"
//                             name="number"
//                             value={values.number}
//                             onChange={handleChange}
//                             className="form-control"
//                         />
//                     </div>
//                 </div>
//                 <div className="field">
//                     <label>Email Id: </label>
//                     <div className="control">
//                         <input
//                             type="email"
//                             name="email"
//                             value={values.email}
//                             onChange={handleChange}
//                             className="form-control"
//                         />
//                     </div>
//                 </div>
//                 {errors.email && <p>{errors.email}</p>}
//                 <div className="field">
//                     <label>Gender: </label>
//                     <div className="control">
//                     <select
//                     name="gender"
//                     value={values.gender}
//                     className="form-control"
//                     onChange={handleChange}
//                     >
//                         <option option="1">Male</option>
//                         <option option="2">Female</option>
//                         <option option="3">Transgender</option>
//                         <option option="4">Others</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className="field">
//                     <label>Number of people:</label>
//                     <div className="control">
//                         <select
//                             name="nopeople"
//                             value={values.nopeople}
//                             className="form-control"
//                             onChange={handleChange}
//                         >
//                             <option option="1">1</option>
//                             <option option="2">2</option>
//                             <option option="3">3</option>
//                             <option option="4">4</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="field col-6">
//                         <label>Check In:</label>
//                         <div className="control">
//                             <input
//                                 type="date"
//                                 name="chIn"
//                                 value={values.chIn}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>
//                     <div className="field col-6">
//                         <label >Check Out:</label>
//                         <div className="control">
//                             <input
//                                 type="date"
//                                 name="chOut"
//                                 value={values.chOut}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="field">
//                     <label >Mode of payment:</label>
//                     <div className="control">
//                         <select
//                             name="mop"
//                             name="mop"
//                             value={values.mop}
//                             onChange={handleChange}
//                             className="form-control"
//                         >
//                             <option option="poh">Pay at checkIn</option>
//                             <option option="card">Card</option>
//                         </select>
//                     </div>
//                 </div>
//                 <button
//                     className="btn btn-warning"
//                     onClick={handleSubmit}
//                 >
//                     Confirm
//                 </button>
//             </form>
//         </>
//     );
// }


// export default BookingForm;



import React from "react";
import { Form, Button } from "react-bootstrap";
import validation from "./validation";
import {Link} from 'react-router-dom';
import { withRouter, useHistory } from "react-router";
import validationbook from "./validationbook";
import useBookingForm from "./useBookingForm"
function BookingForm() {
    const history = useHistory();

    let { handleChange, values, handleSubmit } = useBookingForm(validationbook);
    var isValid=0
    const validateInput = ({ username,email,number,nopeople,mop,gender,chIn,chOut}) => {
        if (!username.trim()) {
            isValid=1;
          alert ("username not present")
        }
        if(!number){
            isValid=1;
            alert( "number not present")
        }
        if(!email){
            isValid=1;
            alert ("email not present")
        }
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        if(!chIn){
            isValid=1;
            alert ("Check In Date not set")
        }
        if(!chOut){
            isValid=1;
            alert ("Check Out Date not set")
        }
        if(chIn >= date){
            isValid=1;
            alert ("Check In Date should be after today")
        }
        if(chIn>chOut){
            isValid=1;
            alert( "Check Out should be greater than Check In")
        }

        return isValid;
      };
    
     handleSubmit= async(e)=>{
         e.preventDefault();
        
         

         const {username,email,number,nopeople,mop,gender,chIn,chOut}=values;
         const validInput = validateInput({ username,email,number,nopeople,mop,gender,chIn,chOut });

         if(!isValid){
         
         const res = await fetch("/BookingForm", {
            method: 'POST',
            headers: {
                "content-type": 'application/json',
            },
         body: JSON.stringify({username,email, number,nopeople,mop,gender,chIn,chOut}),

       })
    
       history.push({
        pathname: "/BookingConfirmationPage/",
        state: {
            username: username,
            email: email,
            number: number,
            nopeople: nopeople,
            mop: mop,
            gender: gender,
            chIn: chIn,
            chOut: chOut,
        },
    })
}
    }


    
    
    return (
        <>
            <form onSubmit={handleSubmit} className="container ">
                <div className="field">
                    <label>Name: </label>
                    <div className="control">
                        <input
                            type="text"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="field">
                    <label>Phone Number: </label>
                    <div className="control">
                        <input
                            type="text"
                            name="number"
                            value={values.number}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="field">
                    <label>Email Id: </label>
                    <div className="control">
                        <input
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="field">
                    <label>Gender: </label>
                    <div className="control">
                    <select
                    name="gender"
                    value={values.gender}
                    className="form-control"
                    onChange={handleChange}
                    >
                        <option option="1">Male</option>
                        <option option="2">Female</option>
                        <option option="3">Transgender</option>
                        <option option="4">Others</option>
                        </select>
                    </div>
                </div>
                <div className="field">
                    <label>Number of people:</label>
                    <div className="control">
                        <select
                            name="nopeople"
                            value={values.nopeople}
                            className="form-control"
                            onChange={handleChange}
                        >
                            <option option="1">1</option>
                            <option option="2">2</option>
                            <option option="3">3</option>
                            <option option="4">4</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="field col-6">
                        <label>Check In:</label>
                        <div className="control">
                            <input
                                type="date"
                                name="chIn"
                                value={values.chIn}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="field col-6">
                        <label >Check Out:</label>
                        <div className="control">
                            <input
                                type="date"
                                name="chOut"
                                value={values.chOut}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label >Mode of payment:</label>
                    <div className="control">
                        <select
                            name="mop"
                            name="mop"
                            value={values.mop}
                            onChange={handleChange}
                            className="form-control"
                        >
                            <option option="poh">Pay at checkIn</option>
                            <option option="card">Card</option>
                        </select>
                    </div>
                </div>
                <button
                    className="btn btn-warning"
                    onClick={handleSubmit}
                >
                    Confirm
                </button>
            </form>
        </>
    );
}


export default BookingForm;