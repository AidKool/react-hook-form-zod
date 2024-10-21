import { z } from 'zod';

export const status1 = ['A'] as const;
export const status2 = ['B'] as const;
const vip = ['bronze', 'silver', 'gold', 'platinum'] as const;

const person1Schema = z.object({
	name: z.string().min(3, { message: 'name is required' }),
	age: z.string().min(1, { message: 'age is required' }),
	job: z.string().min(3, { message: 'job is required, min 3' }),
	status: z.enum(status1),
});

const person2Schema = z.object({
	name: z.string().min(3, { message: 'name is required' }),
	age: z.string().min(1, { message: 'age is required' }),
	job: z.string().min(3, { message: 'job is required, min 3' }),
	status: z.enum(status2),
	topic: z.string().min(3, { message: 'topic is required, min 3' }),
});

const person3Schema = z.object({
	name: z.string().min(3, { message: 'name is required' }),
	age: z.string().min(1, { message: 'age is required, min 1' }),
	job: z.string().min(3, { message: 'job is required, min 3' }),
	status: z.literal('VIP'),
	topic: z.string().min(3, { message: 'topic is required, min 3' }),
	reference: z.string().min(3, { message: 'reference is required, min 3' }),
	vip: z.enum(vip),
});

export const personSchema = z.discriminatedUnion('status', [
	person1Schema,
	person2Schema,
	person3Schema,
]);
