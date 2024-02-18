import React from 'react';

const GMatching = () => {
	return (
		<section className='py-4'>
			<div className='container'>
				<h4 className='py-3 text-primary'>
					People you can get to know
				</h4>
				<div className='d-flex flex-wrap align-items-center justify-content-between gap-4'>
					<div className='matching-card '>
						<div>
							<div
								style={{
									width: '55px',
									height: '55px',
									backgroundColor: '#fff',
									borderRadius: '50%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}></div>
						</div>
						<div>
							<h6>Oliver Twisty</h6>
							<p style={{ marginTop: '-10px' }}>MIT</p>
							<div className='d-flex gap-2'>
								<button className='btn-job'>Science</button>
								<button className='btn-job'>Math</button>
							</div>
							<div className='d-flex gap-2 mt-2'>
								<button className='btn-job'>History</button>
							</div>
						</div>
					</div>
					<div className='matching-card '>
						<div>
							<div
								style={{
									width: '55px',
									height: '55px',
									backgroundColor: '#fff',
									borderRadius: '50%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}></div>
						</div>
						<div>
							<h6>Emily Bannet</h6>
							<p style={{ marginTop: '-10px' }}>Yale</p>
							<div className='d-flex gap-2'>
								<button className='btn-job'>Science</button>
								<button className='btn-job'>Math</button>
							</div>
						</div>
					</div>
					<div className='matching-card '>
						<div>
							<div
								style={{
									width: '55px',
									height: '55px',
									backgroundColor: '#fff',
									borderRadius: '50%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}></div>
						</div>
						<div>
							<h6>Henry Mitchell</h6>
							<p style={{ marginTop: '-10px' }}>Stanford</p>
							<div className='d-flex gap-2'>
								<button className='btn-job'>History</button>
								<button className='btn-job'>Science</button>
							</div>
						</div>
					</div>
					<div className='matching-card '>
						<div>
							<div
								style={{
									width: '55px',
									height: '55px',
									backgroundColor: '#fff',
									borderRadius: '50%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}></div>
						</div>
						<div>
							<h6>Emily Harrison</h6>
							<p style={{ marginTop: '-10px' }}>
								University of Columbia
							</p>
							<div className='d-flex gap-2'>
								<button className='btn-job'>Science</button>
								<button className='btn-job'>Math</button>
							</div>
							<div className='d-flex gap-2 mt-2'>
								<button className='btn-job'>History</button>
								<button className='btn-job'>Literature</button>
							</div>
						</div>
					</div>
					<div className='matching-card '>
						<div>
							<div
								style={{
									width: '55px',
									height: '55px',
									backgroundColor: '#fff',
									borderRadius: '50%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}></div>
						</div>
						<div>
							<h6>William Thompson</h6>
							<p style={{ marginTop: '-10px' }}>Harvard</p>
							<div className='d-flex gap-2'>
								<button className='btn-job'>Science</button>
								<button className='btn-job'>Math</button>
							</div>
							<div className='d-flex gap-2 mt-2'>
								<button className='btn-job'>History</button>
							</div>
						</div>
					</div>
					<div className='matching-card '>
						<div>
							<div
								style={{
									width: '55px',
									height: '55px',
									backgroundColor: '#fff',
									borderRadius: '50%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}></div>
						</div>
						<div>
							<h6>Charlotte Evans</h6>
							<p style={{ marginTop: '-10px' }}>UWED</p>
							<div className='d-flex gap-2'>
								<button className='btn-job'>Science</button>
								<button className='btn-job'>Math</button>
							</div>
							<div className='d-flex gap-2 mt-2'>
								<button className='btn-job'>History</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GMatching;
