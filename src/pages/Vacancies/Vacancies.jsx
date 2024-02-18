import React from 'react';

const Vacancies = () => {
	return (
		<div>
			<section className='py-4'>
				<div className='container'>
					<div className='cards py-3 d-flex flex-wrap gap-3 justify-content-between'>
						<div
							style={{
								width: '300px',
								height: '120px',
								display: 'flex',
								border: '1px solid grey',
								borderRadius: '10px',
							}}>
							<div
								style={{
									width: '10px',
									height: '100%',
									backgroundColor: '#0d6efd',
									borderTopLeftRadius: '10px',
									borderBottomLeftRadius: '10px',
								}}></div>
							<div
								style={{
									marginLeft: '1rem',
									padding: '1rem 0',
								}}>
								<h6>Vacancy of the day</h6>
								<p>4 000 000 – 10 000 000 sums</p>
								<p>14 positions</p>
							</div>
						</div>
					</div>
					<div
						style={{
							width: '100%',
							height: '400px',
							border: '1px solid grey',
							borderRadius: '10px',
							padding: '1.5rem 1.5rem',
							display: 'flex',
							flexWrap: 'wrap',
						}}>
						{[0, 1, 2].map((item) => (
							<div key={item} style={{ width: '33%' }}>
								<h6 className='text-primary'>
									Manager/tour operator (reception) with
									knowledge Spanish and Russian languages
								</h6>
								<p>от 6 000 000 до 10 000 000 sums</p>
								<p style={{ marginTop: '-15px' }}>
									Central Asia Travel, Tashkent
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Vacancies;
