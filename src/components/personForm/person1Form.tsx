'use client';

import { Person } from '@/lib/types';
import { PersonForm } from './personForm';

export default function Person1Form() {
	const onSubmit = (person: Person) => {
		console.log('Person1Form onSubmit');
		console.log({ person });
	};

	return (
		<PersonForm
			onSubmit={onSubmit}
			name=""
			age=""
			job=""
			status="A"
			address={{
				street: '',
				city: '',
				zip: '',
				fullAddress: false,
			}}
		/>
	);
}
