import { z } from 'zod';

export const status1 = ['A'] as const;
export const status2 = ['B'] as const;
const vip = ['bronze', 'silver', 'gold', 'platinum'] as const;

const adressNoCountrySchema = z.object({
	street: z.string().min(3, { message: 'street is required, min 3' }),
	city: z.string().min(3, { message: 'city is required, min 3' }),
	zip: z.string().min(3, { message: 'zip is required, min 3' }),
	fullAddress: z.literal(false),
});

const adressSchemaWithCountry = adressNoCountrySchema.extend({
	country: z.string().min(3, { message: 'country is required, min 3' }),
	fullAddress: z.literal(true),
});

export const adressSchema = z.discriminatedUnion('fullAddress', [
	adressNoCountrySchema,
	adressSchemaWithCountry,
]);

const basePersonSchema = z.object({
	name: z.string().min(3, { message: 'name is required' }),
	age: z.string().min(1, { message: 'age is required' }),
	job: z.string().min(3, { message: 'job is required, min 3' }),
	address: adressSchema,
});

const person1Schema = basePersonSchema.extend({
	status: z.enum(status1),
});

const person2Schema = basePersonSchema.extend({
	status: z.enum(status2),
	topic: z.string().min(3, { message: 'topic is required, min 3' }),
});

const person3Schema = basePersonSchema.extend({
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
