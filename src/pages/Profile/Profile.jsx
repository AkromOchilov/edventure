import React from 'react';

const Profile = () => {
	return (
		<div>
			<section className='py-4'>
				<div className='container d-flex gap-5'>
					<div className='w-100 d-flex flex-column gap-3'>
						<div
							style={{
								width: '100%',
								height: '220px',
								borderRadius: '14px',
								backgroundColor: '#0d6dfd88',
								padding: '2rem 3rem',
							}}>
							<img
								style={{
									borderRadius: '50%',
									width: '70px',
									height: '70px',
								}}
								src='https://lh3.googleusercontent.com/a/ACg8ocIB9Misrx53Ppsqb-y4fTwqtu5D7kVJDUq31U7wd9Gg=s64-c-mo'
								alt=''
							/>

							<h5 className='text-white mt-2'>Timur Raxmatov</h5>
							<button className='btn btn-primary mt-1'>
								View the information
							</button>
						</div>
						<div
							style={{
								width: '100%',
								height: '130px',
								borderRadius: '14px',
								backgroundColor: '#0d6dfd88',
								padding: '2rem 3rem',
								display: 'flex',
								justifyContent: 'space-between',
							}}>
							<div className='text-white'>
								<p className='fs-5'>Phone number</p>
								<p style={{ marginTop: '-10px' }}>
									+998 33 351 19 77
								</p>
							</div>
							<div className='text-white'>
								<p className='fs-5'>Student Id</p>
								<p style={{ marginTop: '-10px' }}>61157</p>
							</div>
							<div className='text-white'>
								<p className='fs-5'>University</p>
								<p style={{ marginTop: '-10px' }}>UWED</p>
							</div>
						</div>

						<div
							style={{
								width: '100%',
								height: '130px',
								borderRadius: '14px',
								backgroundColor: '#0d6dfd88',
								padding: '2rem 3rem',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}>
							<div>
								<p className='fs-5 text-white'>
									Your interests
								</p>
								<div className='d-flex gap-3 align-items-center'>
									<button className='btn-job'>Science</button>
									<button className='btn-job'>Math</button>
								</div>
							</div>
							<button
								style={{
									height: '40px',
									width: '200px',
									border: '1px solid #0d6efd',
									backgroundColor: '#fff',
									color: '#0d6efd',
									borderRadius: '10px',
								}}>
								Change your interests
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Profile;
