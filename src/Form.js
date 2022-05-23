import React from "react";
import "./Form.css";
import "./script.js";


function Form() {
  return (

    <body>
 <div class="container">
    <h1>REGISTER</h1>
    <form id="registration_form">
        <div>
            <input type="text" id="form_fname" name="" required=""></input>
            <span class="error_form" id="fname_error_message"></span>
            <label>
					First Name
				</label>
        </div>
        <div>
            <input type="text" id="form_sname" name="" required=""></input>
            <span class="error_form" id="sname_error_message"></span>
            <label>
					Last Name
				</label>
        </div>
        <div>
            <input type="email" id="form_email" name="" required=""></input>
            <span class="error_form" id="email_error_message"></span>
            <label>Email</label>
        </div>
        <div>
            <input type="password" id="form_password" name="" required=""></input>
            <span class="error_form" id="password_error_message"></span>
            <label>Password</label>
        </div>
        <div>
            <input type="password" id="form_retype_password" name="" required=""></input>
            <span class="error_form" id="retype_password_error_message"></span>
            <label>Confirm Password</label>
        </div>
        <input type="submit" value="Register" name=""></input>
    </form>
    </div>
    <script src="script.js"></script>

    </body>
  );
}

export default Form;
