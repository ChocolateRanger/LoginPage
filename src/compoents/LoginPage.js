
import React from 'react'

function LoginPage() {
    
    function validation() {
        
        var user = document.getElementById('user').value;
        var pass = document.getElementById('pass').value;
        var confirmpass = document.getElementById('conpass').value;
        var mobileNumber = document.getElementById('mobileNumber').value;
        var emails = document.getElementById('emails').value;
        
        if (emails === "") {
            document.getElementById('emailids').innerHTML = " ** Please fill the email id` field";
            return false;
        }
        if (emails.indexOf('@') <= 0) {
            document.getElementById('emailids').innerHTML = " ** @ Invalid Position";
            return false;
        }
        
        if ((emails.charAt(emails.length - 4) !== '.') && (emails.charAt(emails.length - 3) !== '.')) {
            document.getElementById('emailids').innerHTML = " ** . Invalid Position";
            return false;
        }
        
        if (pass === "") {
            document.getElementById('passwords').innerHTML = " ** Please fill the password field";
            return false;
        }
        if ((pass.length <= 5) || (pass.length > 20)) {
            document.getElementById('passwords').innerHTML = " ** Passwords lenght must be between  5 and 20";
            return false;
        }




        if (pass !== confirmpass) {
            document.getElementById('confrmpass').innerHTML = " ** Password does not match the confirm password";
            return false;
        }



        if (confirmpass === "") {
            document.getElementById('confrmpass').innerHTML = " ** Please fill the confirmpassword field";
            return false;
        }
        
        
        
        if (user === "") {
            document.getElementById('username').innerHTML = " ** Please fill the username field";
            return false;
        }
        if ((user.length <= 2) || (user.length > 20)) {
            document.getElementById('username').innerHTML = " ** Username lenght must be between 2 and 20";
            return false;
        }
        if (!isNaN(user)) {
            document.getElementById('username').innerHTML = " ** only characters are allowed";
            return false;
        }









        if (mobileNumber === "") {
            document.getElementById('mobileno').innerHTML = " ** Please fill the mobile NUmber field";
            return false;
        }
        if (isNaN(mobileNumber)) {
            document.getElementById('mobileno').innerHTML = " ** user must write digits only not characters";
            return false;
        }
        if (mobileNumber.length !== 10) {
            document.getElementById('mobileno').innerHTML = " ** Mobile Number must be 10 digits only";
            return false;
        }



    }


    return (
        <>
            <div className='container'>
                <div className='left'>
                </div>
                <div className='right'>
                    <form action="#" onSubmit={validation} className="bg-light">
                        <h4>
                            Create Account
                        </h4>
                        <div className="form-group">
                            <label className="font-weight-bold text-muted my-2" style={{ width: "25vw" }}> Email: </label>
                            <input type="text" name="email" className="form-control" id="emails" autoComplete="off" />
                            <span id="emailids" className="text-danger font-weight-bold"> </span>
                        </div>


                        <div className="form-group">
                            <label className="font-weight-bold text-muted my-2" style={{ width: "25vw" }}> Password: </label>
                            <input type="text" name="pass" className="form-control" id="pass" autoComplete="off" />
                            <span id="passwords" className="text-danger font-weight-bold"> </span>
                        </div>

                        <div className="form-group">
                            <label className="font-weight-bold text-muted my-2" style={{ width: "25vw" }}> Confirm Password: </label>
                            <input type="text" name="conpass" className="form-control" id="conpass" autoComplete="off" />
                            <span id="confrmpass" className="text-danger font-weight-bold"> </span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="user" className="font-weight-bold text-muted my-2" style={{ width: "25vw" }}> Username: </label>
                            <input type="text" name="user" className="form-control" id="user" autoComplete="off" />
                            <span id="username" className="text-danger font-weight-bold"> </span>
                        </div>

                        <div className="form-group">
                            <label className="font-weight-bold text-muted my-2"> Mobile Number: </label>
                            <input type="text" name="mobile" className="form-control" id="mobileNumber" autoComplete="off" style={{ width: "10vw" }} />
                            <span id="mobileno" className="text-danger font-weight-bold"> </span>
                        </div>
                        <div className="form-check my-3">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label font-weight-bold" htmlFor="exampleCheck1">I read and Agree Terms and Conditions</label>
                        </div>
                        <div className='my-2'>
                            <input type="submit" name="Submit" value="Create Account" className="text-light" autoComplete="off" style={{ 'backgroundColor': 'rgb(77, 117, 239)', width: "10vw", padding: "3px 3px 5px 3px", textAlign: "center", borderRadius: "3px" }} />
                        </div>


                    </form>


                </div>
            </div>
        </>
    );
}

export default LoginPage;