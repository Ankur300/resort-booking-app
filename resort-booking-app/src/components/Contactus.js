import React from "react";
import { withRouter } from 'react-router';

class Contactus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            fname: "",
            lname: "",
          
            contactemail: "",
            contactphone: "",
            comment:"",
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
        handleChangeFirstName=(event)=>{
            this.setState({fname:event.target.value});
        };
        handleChangelastName=(event)=>{
            this.setState({lname:event.target.value});
        };
        handleChangeEmail=(event)=>{
            this.setState({contactemail:event.target.value});
        };
        handleChangenumber=(event)=>{
            this.setState({contactphone:event.target.value});
        };
        handleChangeComment=(event)=>{
            this.setState({comment:event.target.value});
        };
        handleSubmit= async(e)=>{
            e.preventDefault();
        
          const res=await fetch("/feedback",{
              method:'POST',
            headers:{
                "content-type":'application/json'
            },
            body:JSON.stringify({fname:this.state.fname,lname:this.state.lname,contactphone:this.state.contactphone,contactemail:this.state.contactemail,comment:this.state.comment
   
            })
   
          })
          const res1=await res.json();
          console.log("hello" + res1)
          if(res1.status===422 || !res1){
              alert('invali registration');
          }else{
              alert("Feedback sent successfully ")
              this.props.history.push("/Booking");
   
          }
   
       }


    
    render() {
        return (
            <div >
                <div className="container pt-3 mt-3">
                    <div className="contact-section" >
                        <h2 className="ct-section-head">Contact Us to Share Your's FeedBack</h2>
                        <div className="row contact-fields">
                            <div className="col-md-8 left-form">
                                <form>
                                    <div className="form-group">
                                        <label className="sr-only" for="fname">
                                            First Name *
                                        </label>
                                        <input
                                            className="required form-control"
                                            id="fname"
                                            name="fname"
                                            onChange={this.handleChangeFirstName}
                                            placeholder="First Name&nbsp;*"
                                            type="text" required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only" for="lname">
                                            Last Name *
                                        </label>
                                        <input
                                            className="required form-control"
                                            id="lname"
                                            name="lname"
                                            onChange={this.handleChangelastName}
                                            placeholder="Last Name&nbsp;*"
                                            type="text" 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label
                                            className="sr-only"
                                            for="contactEmail"
                                        >
                                            Email *
                                        </label>
                                        <input
                                            className="required form-control h5-email"
                                            id="contactEmail"
                                            name="contactEmail"
                                            onChange={this.handleChangeEmail}
                                            placeholder="Email&nbsp;*"
                                            type="text" required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label
                                            className="sr-only"
                                            for="contactPhone"
                                        >
                                            Phone *
                                        </label>
                                        <input
                                            className="required form-control h5-phone"
                                            id="contactPhone"
                                            name="contactPhone"
                                            onChange={this.handleChangenumber}
                                            placeholder="Phone&nbsp;*"
                                            type="text" required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label
                                            className="sr-only"
                                            for="comment"
                                        >
                                            Type your message here
                                        </label>
                                        <textarea
                                            className="required form-control"
                                            id="comment"
                                            name="comment"
                                            onChange={this.handleChangeComment}
                                            placeholder="Type your message here&nbsp;*"
                                            rows="6" required
                                        ></textarea>
                                    </div>
                                    <button
                                        className="btn btn-success"
                                        type="submit"
                                        onClick={this.handleSubmit}
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                            <div className="col-md-4 contact-info">
                                <div className="phone">
                                    <h2>Call</h2>
                                    <a href="tel:+4046872730">7687678745</a>
                                </div>
                                <div className="email">
                                    <h2>Email</h2>
                                    <a href="mailto:info@resort.com">
                                        info@resort.com
                                    </a>
                                </div>
                                <div className="location">
                                    <h2>Visit</h2>
                                    <p>
                                        One Town Center 123 Easy Street
                                        Delhi,110001
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Contactus);
