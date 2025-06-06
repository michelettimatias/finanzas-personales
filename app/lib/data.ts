import postgres from 'postgres';
import { Bills } from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchBills() {
	try {
		const data = await sql<Bills[]>
			`SELECT * FROM bills
			ORDER BY date DESC`;
		return data;
	} catch (error) {
		console.error('Database Error:', error);
		throw new Error('Failed to fetch the bills.');
	}
}