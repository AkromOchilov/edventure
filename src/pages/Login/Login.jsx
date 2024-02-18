import React from 'react';
import LoginImg from '../../Images/login.jpg';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
	const navigate = useNavigate();
	const handleLogin = () => {
		localStorage.setItem('token', 'token');
		navigate('/profile');
	};

	return (
		<div className='py-4'>
			<div className='container'>
				<div className='d-flex justify-content-between'>
					<h2>Logo</h2>

					<p>
						New User ?{' '}
						<Link to='/register'>
							<span className='text-primary'> Sign up</span>
						</Link>
					</p>
				</div>
				<div className='d-flex '>
					<div>
						<img
							style={{ width: '600px', height: '600px' }}
							src={LoginImg}
							alt='login img'
						/>
					</div>
					<div
						style={{ marginTop: '6.9rem', marginLeft: '4rem' }}
						className='w-100 '>
						<h2>Welcome back !</h2>
						<p className='text-secondary'>Login to continue</p>
						<div>
							<label htmlFor=''>Student ID</label>
							<input
								style={{ height: '50px' }}
								type='text'
								className='form-control'
							/>
							<label className='mt-3' htmlFor=''>
								Password
							</label>
							<input
								style={{ height: '50px' }}
								type='password'
								className='form-control '
							/>
							<div className='d-flex align-items-center gap-3 mt-4'>
								<button
									onClick={handleLogin}
									style={{ padding: '0.8rem 3rem' }}
									className='btn btn-primary'>
									LOGIN
								</button>
								<p className='m-auto'>FORGOT PASSWORD ?</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
