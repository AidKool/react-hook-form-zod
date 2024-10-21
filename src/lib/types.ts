import { z } from 'zod';
import { personSchema } from './schemas';

export type Person = z.infer<typeof personSchema>;

export type PersonProps = {
	onSubmit: (person: Person) => void;
} & Person;
