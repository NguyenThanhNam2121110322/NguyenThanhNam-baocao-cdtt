import "./main.css";
import "./util.css";
import background from "../../assets/images/bg-login.jpg";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import userservices from "../../services/UserServices";
import {useAuth} from "../../provider/AuthProvider";

function Login() {


	const { setToken } = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');



	async function login(event) {
		event.preventDefault();

		var user = new FormData();
		user.append("email", email);
		user.append("password", password);

		await userservices.login(email, password).then(function (res) {
			alert(res.data.message)
			if (res.data.success) {
				setToken(res.data.data.id)
			  } else {
				setToken();
			  }
		})

		

	}
	return (
		<>
			<div class="limiter">
				<div class="container-login100" style={{ backgroundImage: `url(${background})` }}>
					<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
						<form class="login100-form validate-form" onSubmit={login}>
							<span class="login100-form-title p-b-49">
								Login
							</span>

							<div class="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
								<span class="label-input100">Email</span>
								<input class="input100" type="email" name="username" placeholder="Type your email" onChange={(e) => setEmail(e.target.value)} />
								<span class="focus-input100" data-symbol="&#xf206;"></span>
							</div>

							<div class="wrap-input100 validate-input" data-validate="Password is required">
								<span class="label-input100">Password</span>
								<input class="input100" type="password" name="pass" placeholder="Type your password" onChange={(e) => setPassword(e.target.value)} />
								<span class="focus-input100" data-symbol="&#xf190;"></span>
							</div>

							<div class="text-right p-t-8 p-b-31">
								<a href="#">
									Forgot password?
								</a>
							</div>

							<div class="container-login100-form-btn">
								<div class="wrap-login100-form-btn">
									<div class="login100-form-bgbtn"></div>
									<button class="login100-form-btn" type="submit">
										Login
									</button>
								</div>
							</div>

							<div class="txt1 text-center p-t-54 p-b-20">
								<span>
									Or Sign Up Using
								</span>
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
								<span class="txt1 p-b-17">
									Or Sign Up Using
								</span>

								<a href="/register" class="txt2">
									Sign Up
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
export default Login;


