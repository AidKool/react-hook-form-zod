'use client';

import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { personSchema, status2 } from '@/lib/schemas';
import { Person, PersonProps } from '@/lib/types';

export function PersonForm({ onSubmit, age, job, name, status, ...rest }: Readonly<PersonProps>) {
	const {
		register,
		formState: { errors },
		handleSubmit,
		watch,
	} = useForm<Person>({
		resolver: zodResolver(personSchema),
		defaultValues: { name, age, job, status, ...rest },
	});

	const statusWatch = watch('status');

	return (
		<form
			onSubmit={(e: FormEvent) => {
				e.preventDefault();

				void handleSubmit(onSubmit)(e);

				console.log({ errors });
			}}
			className="flex flex-col border border-gray-300 max-w-md gap-4"
		>
			<label className="font-bold" htmlFor="name">
				name
			</label>
			<input {...register('name')} id="name" className="border border-gray-300" />
			{errors.name && <p>{errors.name.message}</p>}

			<label className="font-bold" htmlFor="age">
				age
			</label>
			<input {...register('age')} id="age" className="border border-gray-300" />
			{errors.age && <p>{errors.age.message}</p>}

			<label className="font-bold" htmlFor="job">
				job
			</label>
			<input {...register('job')} id="job" className="border border-gray-300" />
			{errors.job && <p>{errors.job.message}</p>}

			<label className="font-bold" htmlFor="status">
				status
			</label>
			<select {...register('status')} id="status" className="border border-gray-300">
				<option value="A">A</option>
				<option value="B">B</option>
				<option value="VIP">vip</option>
			</select>
			{'status' in errors && <p>{errors.status?.message}</p>}

			{(status2.some((item) => item === statusWatch) || statusWatch === 'VIP') && (
				<>
					<label className="font-bold" htmlFor="topic">
						topic
					</label>
					<input {...register('topic')} id="topic" className="border border-gray-300" />
					{'topic' in errors && <p>{errors.topic?.message}</p>}

					{statusWatch === 'VIP' && (
						<>
							<label className="font-bold" htmlFor="reference">
								reference
							</label>
							<input {...register('reference')} id="reference" className="border border-gray-300" />
							{'reference' in errors && <p>{errors.reference?.message}</p>}
						</>
					)}
				</>
			)}

			{statusWatch === 'VIP' && (
				<>
					<label className="font-bold" htmlFor="vip">
						vip
					</label>
					<select {...register('vip')} id="vip" className="border border-gray-300">
						<option value="bronze">bronze</option>
						<option value="silver">silver</option>
						<option value="gold">gold</option>
						<option value="platinum">platinum</option>
					</select>
					{'vip' in errors && <p>{errors.vip?.message}</p>}
				</>
			)}

			<button type="submit">submit</button>
		</form>
	);
}
