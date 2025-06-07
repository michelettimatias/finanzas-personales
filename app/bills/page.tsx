import AddBill from "../ui/add-bill";
import BillsTable from "../ui/bills-table";
import SearchBills from "../ui/search-bar";

export default async function Bills(props: {
	searchParams?: Promise<{
		query?: string;
	}>;
	}) {
	const searchParams = await props.searchParams;
	const query = searchParams?.query || '';
	return (
			<div 
				className="
				py-8
				flex
				flex-col
				gap-16
				h-screen
			">
				<div
					className="
					px-4
					md:p-12
					flex
					flex-col
					gap-8
				">
					<h2
						className="
						font-bold
						tracking-widest
						text-blue-500
					">
						GASTOS
					</h2>
					<AddBill />
					<SearchBills />
					<BillsTable query={query}/>
				</div>
			</div>
	);
}
