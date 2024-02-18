import React from 'react';
import simon from './../../../Images/simon.jpg';
import elegant from './../../../Images/elegant.jpg';

const Plp = () => {
	return (
		<section className='py-4'>
			<div className='container'>
				<h4>
					Recommended resources{' '}
					<span className='text-primary'>for you</span>
				</h4>
				<div className='d-flex flex-wrap mt-4 gap-4'>
					<div className='card' style={{ width: '18rem' }}>
						<img
							style={{ width: '100%', height: '330px' }}
							src={elegant}
							className='card-img-top'
							alt='...'
						/>
						<div className='card-body'>
							<p className='card-text'>
								The Elegant Universe by Brian Greene
							</p>
							<a href='#' className='btn btn-primary'>
								complete information
							</a>
						</div>
					</div>
					<div className='card' style={{ width: '18rem' }}>
						<img
							style={{ width: '100%', height: '330px' }}
							src={simon}
							className='card-img-top'
							alt='...'
						/>
						<div className='card-body'>
							<p className='card-text'>
								The Code Book by Simon Singh
							</p>
							<a href='#' className='btn btn-primary'>
								complete information
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Plp;
