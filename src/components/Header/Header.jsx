import React from 'react';
import { Link } from 'react-router-dom';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import logo from './../../Images/logo.jpg';

const items = [
	{
		key: '1',
		label: (
			<Link to='/' className='text-text-decoration-none'>
				Go to website
			</Link>
		),
	},
	{
		key: '2',
		label: (
			<Link to='/profile' className='text-text-decoration-none'>
				Profile details
			</Link>
		),
	},
	{
		key: '3',
		label: (
			<Link to='/login' className='text-text-decoration-none'>
				Log out from dashboard
			</Link>
		),
		danger: true,
	},
];

const Header = () => {
	return (
		<header className='py-3 header'>
			<nav className='container d-flex justify-content-between align-items-center'>
				<div className='logo d-flex'>
					<img
						style={{
							width: '60px',
							heigth: '30px',
							borderRadius: '50%',
						}}
						className='d-flex'
						src={logo}
						alt='Logo'
					/>
				</div>
				<div className='d-flex align-items-center gap-3'>
					<ul className='d-flex gap-4 align-items-center m-auto me-4'>
						<li>
							<Link to='/' className='ul-hover '>
								Home
							</Link>
						</li>
						<li>
							<Link to='/plp' className='ul-hover '>
								Personalized Learning path
							</Link>
						</li>
						<li>
							<Link to='/group_matching' className='ul-hover'>
								Group Matching
							</Link>
						</li>
						<li>
							<Link to='/vacancies' className='ul-hover'>
								JOB/Internships
							</Link>
						</li>
						<li>
							<Link to='/health' className='ul-hover'>
								Health
							</Link>
						</li>
					</ul>
					<Dropdown
						overlayStyle={{ width: '250px' }}
						menu={{
							items,
						}}>
						<a onClick={(e) => e.preventDefault()}>
							<Space>
								<img
									style={{
										borderRadius: '50%',
										width: '40px',
										height: '40px',
									}}
									src='https://lh3.googleusercontent.com/a/ACg8ocIB9Misrx53Ppsqb-y4fTwqtu5D7kVJDUq31U7wd9Gg=s64-c-mo'
									alt=''
								/>
								<DownOutlined style={{ color: 'black' }} />
							</Space>
						</a>
					</Dropdown>
				</div>
			</nav>
		</header>
	);
};

export default Header;
