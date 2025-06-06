import { Bills } from '../lib/definitions';

export default function BillsTable({ bills }: { bills: Bills[] }) {
	
	let oddBill = true;
	
	return (
		<div className="flex flex-col w-full bg-white rounded-lg shadow-xl overflow-hidden">
			{/* <div className={`flex flex-row w-full h-18 items-center font-bold px-8`}>
				<div className="basis-2/6 md:basis-1/6">Fecha</div>
				<div className="basis-4/6 md:basis-2/6">Descripción</div>
				<div className="basis-2/6 hidden md:block">Tienda</div>
				<div className="basis-1/6">Importe</div>
			</div> */}
			{bills.map((bill) => {
				oddBill=!oddBill;
				const date = new Date(bill.date);
				return (
					<div key={bill.id} className={`flex flex-row w-full h-18 items-center ${oddBill ? 'bg-neutral-200' : 'bg-white'} px-8`}>
						<div className="basis-2/6 md:basis-1/6 lg:basis-1/6">
							{date.getDate()<10?`0${date.getDate()}`:`${date.getDate()}`}/{date.getMonth()<10?`0${date.getMonth()}`:`${date.getMonth()}`}/{date.getFullYear()}
						</div>
						<div className="basis-3/6 lg:basis-2/6">
							{bill.description}
						</div>
						<div className="basis-2/6 hidden lg:block">
							{bill.store}
						</div>
						<div className="basis-1/6">
							${bill.amount}
						</div>
					</div>
				)
			})}
		</div>
	);
}