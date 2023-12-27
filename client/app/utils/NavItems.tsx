import Link from 'next/link';
import React from 'react';

type Props = {
	activeItem: number;
	isMobile: boolean;
};

export const navItemsData = [
	{
		name: 'Home',
		url: '/',
	},
	{
		name: 'Courses',
		url: '/courses',
	},
	{
		name: 'About',
		url: '/about',
	},
	{
		name: 'Policy',
		url: '/policy',
	},
	{
		name: 'FAQ',
		url: '/faq',
	},
];

export default function NavItems({ activeItem, isMobile }: Props) {
	return (
		<>
			<div className="hidden 800px:flex">
				{navItemsData &&
					navItemsData.map((item, index) => {
						return (
							<Link key={index} href={item.url} passHref>
								<span
									className={`mx-4 font-medium text-lg ${
										activeItem === index
											? 'dark:text-blue-400 text-[crimson]'
											: 'dark:text-white text-black'
									} text-[18px] px-6 font-Poppins font-normal`}
								>
									{item.name}
								</span>
							</Link>
						);
					})}
			</div>
			{isMobile && (
				<div className="800px:hidden mt-5 flex flex-col">
					{navItemsData &&
						navItemsData.map((item, index) => (
							<Link href={'/'} passHref key={index}>
								<span
									className={`mx-4 font-medium text-lg ${
										activeItem === index
											? 'dark:text-blue-400 text-[crimson]'
											: 'dark:text-white text-black'
									} text-[18px] px-6 font-Poppins font-normal`}
								>
									{item.name}
								</span>
							</Link>
						))}
				</div>
			)}
		</>
	);
}
