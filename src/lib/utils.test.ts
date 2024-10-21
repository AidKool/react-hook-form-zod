import { cn } from './utils';

describe('cn', () => {
	it('should merge classes', () => {
		const result = cn('text-black', 'bg-white');

		expect(result).toBe('text-black bg-white');
	});

	it('should merge classes with strings and objects', () => {
		const result = cn('text-black', { 'bg-white': true });

		expect(result).toBe('text-black bg-white');
	});

	it('should merge classes with strings and objects with falsy values', () => {
		const result = cn('text-black', { 'bg-white': false });

		expect(result).toBe('text-black');
	});

	it('should merge classes with arrays', () => {
		const result = cn(['text-black', 'bg-white']);

		expect(result).toBe('text-black bg-white');
	});

	it('should merge classes with objects', () => {
		const result = cn({ 'text-black': true, 'bg-white': true });

		expect(result).toBe('text-black bg-white');
	});

	it('should merge classes with arrays and objects', () => {
		const result = cn(['text-black', { 'bg-white': true }]);

		expect(result).toBe('text-black bg-white');
	});

	it('should merge classes with arrays and objects with falsy values', () => {
		const result = cn(['text-black', { 'bg-white': false }]);

		expect(result).toBe('text-black');
	});

	it('should merge classes with arrays and objects with empty strings', () => {
		const result = cn(['text-black', { 'bg-white': '' }]);

		expect(result).toBe('text-black');
	});
});
