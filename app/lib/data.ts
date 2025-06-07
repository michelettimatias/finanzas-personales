import postgres from 'postgres';
import { Bills } from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const ITEMS_PER_PAGE = 5;

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


export async function fetchInvoicesPages(query: string) {
  try {
    const data = await sql`SELECT *
    FROM bills
    WHERE
      bills.description ILIKE ${`%${query}%`} OR
      bills.category ILIKE ${`%${query}%`} OR
      bills.store::text ILIKE ${`%${query}%`} OR
      bills.amount::text ILIKE ${`%${query}%`} OR
      bills.method ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(data[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchFilteredBills(
  query: string
) {

  try {
    const bills = await sql<Bills[]>`
      SELECT *
      FROM bills
      WHERE
		bills.description ILIKE ${`%${query}%`} OR
		bills.category ILIKE ${`%${query}%`} OR
		bills.store::text ILIKE ${`%${query}%`} OR
		bills.amount::text ILIKE ${`%${query}%`} OR
		bills.method ILIKE ${`%${query}%`}
		ORDER BY bills.date DESC
    `;

    return bills;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}