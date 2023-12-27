'use client';
import React, { FC, useState } from 'react';
import Heading from './utils/Heading';
import Header from './components/Header';

interface Props {}
const Page: FC<Props> = props => {
	const [open, setOpen] = useState(false);
	const [activeItem, setActiveItem] = useState(0);
	return (
		<div>
			<Heading
				title="E-learning"
				description="E-learning is a platform for learning"
				keywords="programming, mern, redux, machine learning"
			/>
			<Header activeItem={activeItem} open={open} setOpen={setOpen} />
		</div>
	);
};

export default Page;
