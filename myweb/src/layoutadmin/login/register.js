import "./main.css";
import "./util.css";
import background from "../../assets/images/bg-login.jpg";

import React, { useState } from 'react';
import { useNavigate  } from "react-router-dom";

import userservices from "../../services/UserServices";

function Register() {

	const navigate = useNavigate(); // chuyen trang

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    async function register(event) {
        event.preventDefault();
        
        var user = new FormData();
        user.append("name",name);
        user.append("email",email);
        user.append("password", password);


        await userservices.register(name,email,password).then(function (res) {
			
            alert(res.data.message);
            navigate('/admin', { replace: true });
        })
    }

	return (
		<>
			<div class="limiter">
				<div class="container-login100" style={{ backgroundImage: `url(${background})` }}>
					<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
						<form class="login100-form validate-form" onSubmit={register}>
							<span class="login100-form-title p-b-49">
								Register
							</span>


							<div class="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
								<span class="label-input100">Username</span>
								<input class="input100" type="text" name="username" placeholder="Type your username" onChange={(e) => setName(e.target.value)} />
								<span class="focus-input100" data-symbol="&#xf206;"></span>
							</div>

							<div class="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
								<span class="label-input100">Email</span>
								<input class="input100" type="text" name="email" placeholder="Type your email" onChange={(e) => setEmail(e.target.value)} />
								<span class="focus-input100" data-symbol="&#x2709;"></span>
							</div>

							<div class="wrap-input100 validate-input" data-validate="Password is required">
								<span class="label-input100">Password</span>
								<input class="input100" type="password" name="pass" placeholder="Type your password" onChange={(e) => setPassword(e.target.value)} />
								<span class="focus-input100" data-symbol="&#xf190;"></span>
							</div>



							<div class="container-login100-form-btn">
								<div class="wrap-login100-form-btn">
									<div class="login100-form-bgbtn"></div>
									<button class="login100-form-btn" type="submit">
										Register
									</button>
								</div>
							</div>



							<div class="flex-c-m">
								<a href="#" class="login100-social-item bg1">
									<i class="fa fa-facebook"></i>
								</a>

								<a href="#" class="login100-social-item bg2">
									<i class="fa fa-twitter"></i>
								</a>

								<a href="#" class="login100-social-item bg3">
									<i class="fa fa-google"></i>
								</a>
							</div>

							<div class="flex-col-c p-t-155">

								<a href="/login" class="txt2">
									Login
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>


			<div id="dropDownSelect1"></div>
		</>
	)
}
export default Register;


