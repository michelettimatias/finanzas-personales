import { fetchBills } from "../lib/data";
import BillsTable from "../ui/bills-table";

export default async function Bills() {

	const bills = await fetchBills();

	return (
			<div 
				className="
				px-6
				md:p-12
				py-8
				min-w-128
				flex
				flex-col
				gap-16
				h-screen
			">
				<div
					className="
					flex
					flex-col
					gap-8
				">
					<h2
						className="
						text-l
						font-bold
						tracking-widest
						text-blue-500
					">
						GASTOS
					</h2>
					<BillsTable bills={bills} />
				</div>
			</div>
	);
}
