import { Bills } from '../lib/definitions';
import { MdEdit, MdDelete } from "react-icons/md";
import TableRow from './table-row';

export default function BillsTable({ bills }: { bills: Bills[] }) {
	
	let oddBill = true;
	
	return (
		<>
		<div className="hidden lg:flex flex-col w-full bg-white rounded-lg shadow-xl overflow-hidden">
			{bills.map((bill) => {
				oddBill=!oddBill;
				const date = new Date(bill.date);
				return (
					<div key={bill.id} className={`flex flex-row w-full h-18 items-center ${oddBill ? 'bg-neutral-200' : 'bg-white'}`}>
						<div className="
							basis-2/8
							lg:basis-2/8
							xl:basis-2/12
							2xl:basis-1/12
							px-8">
							{date.getDate()<10?`0${date.getDate()}`:`${date.getDate()}`}/{date.getMonth()<10?`0${date.getMonth()}`:`${date.getMonth()}`}/{date.getFullYear()}
						</div>
						<div className="
							basis-5/8
							lg:basis-4/8
							xl:basis-4/12
							2xl:basis-4/12
							px-8">
							{bill.description}
						</div>
						<div className="
							hidden
							xl:block
							xl:basis-4/12
							2xl:basis-4/12
							px-8">
							{bill.store}
						</div>
						<div className="
							basis-1/8
							lg:basis-1/8
							xl:basis-1/12
							2xl:basis-1/12
							px-8">
							${bill.amount}
						</div>
						<div className="
							hidden
							2xl:block
							2xl:basis-1/12
							px-8">
							{bill.method}
						</div>
						<div className='
							hidden
							lg:flex
							flex-row
							justify-end
							lg:basis-1/8
							xl:basis-2/12
							2xl:basis-1/12
							h-full'>
							<div className="flex justify-center items-center text-blue-500 hover:bg-blue-500 hover:text-neutral-50 w-18 h-full">
								<MdEdit />
							</div>
							<div className="flex justify-center items-center text-red-500 hover:bg-red-500 hover:text-neutral-50 w-18 h-full">
								<MdDelete />
							</div>
						</div>
					</div>
				)
			})}
		</div>
		<div className="flex lg:hidden flex-col w-full bg-white rounded-lg shadow-xl overflow-hidden">
			{bills.map((bill) => {
				oddBill=!oddBill;
				return (
					<TableRow key={bill.id} odd={oddBill} bill={bill}>
					</TableRow>
					
				)
			})}
		</div>
		</>
	);
}