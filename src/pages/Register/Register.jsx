import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterImg from '../../Images/register.jpg';

const Register = () => {
	const navigate = useNavigate();
	let handleRegister = (event) => {
		event.preventDefault();
		localStorage.setItem('token', 'password');
		navigate('/profile');
	};
	return (
		<div className='py-4'>
			<div className='container'>
				<div className='d-flex justify-content-between'>
					<h2>Logo</h2>

					<p>
						Are you have a account ?{' '}
						<Link to='/login'>
							<span className='text-primary'> Sign In</span>
						</Link>
					</p>
				</div>
				<div className='d-flex '>
					<div
						style={{ marginTop: '6.2rem', marginLeft: '4rem' }}
						className='w-100 '>
						<h2>Welcome back !</h2>
						<p className='text-secondary'>Register to continue</p>
						<form
							action=''
							onSubmit={handleRegister}
							style={{ width: '490px' }}
							className='mt-5'>
							<label htmlFor=''>University name</label>
							<input
								style={{ height: '50px' }}
								type='text'
								className='form-control'
							/>
							<label className='mt-3' htmlFor=''>
								Student ID
							</label>
							<input
								style={{ height: '50px' }}
								type='text'
								className='form-control '
							/>
							<label className='mt-3' htmlFor=''>
								Password
							</label>
							<input
								style={{ height: '50px' }}
								type='password'
								className='form-control '
							/>
							<div className='d-flex gap-3 mt-3'>
								<div className='d-flex align-items-center gap-2'>
									<p>Science</p>
									<input
										style={{ marginBottom: '0.9rem' }}
										type='checkbox'
									/>
								</div>
								<div className='d-flex align-items-center gap-2'>
									<p>Math</p>
									<input
										style={{ marginBottom: '0.9rem' }}
										type='checkbox'
									/>
								</div>
								<div className='d-flex align-items-center gap-2'>
									<p>History</p>
									<input
										style={{ marginBottom: '0.9rem' }}
										type='checkbox'
									/>
								</div>
								<div className='d-flex align-items-center gap-2'>
									<p>Literature</p>
									<input
										style={{ marginBottom: '0.9rem' }}
										type='checkbox'
									/>
								</div>
							</div>
							<div className='d-flex align-items-center gap-3 mt-4'>
								<button
									style={{ padding: '0.8rem 3rem' }}
									className='btn btn-primary'>
									Register
								</button>
							</div>
						</form>
					</div>
					<div>
						<img
							style={{ width: '700px', height: '600px' }}
							src={RegisterImg}
							alt='login img'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
