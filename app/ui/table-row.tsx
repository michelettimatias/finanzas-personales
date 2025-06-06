'use client';

import { Bills } from "../lib/definitions";
import { MdEdit, MdDelete, MdExpandCircleDown } from "react-icons/md";
import { useState } from "react";

export default function TableRow({last, bill}: {last: boolean, bill: Bills}) {
	const date = new Date(bill.date);
	const [expand, setExpand] = useState(false);
	
	return (
		<div className={`hover:bg-neutral-100 ${last ? '' : 'border-b border-neutral-300'}`}>
					<div className={`
							flex
							flex-row
							w-full
							h-18
							items-center
							justify-between
							pl-4
							gap-4
							${expand ? 'border-b border-neutral-300 border-dashed' : ''}`}>
						<div className="
							basis-1/8">
							{date.getDate()<10?`0${date.getDate()}`:`${date.getDate()}`}/{date.getMonth()<10?`0${date.getMonth()}`:`${date.getMonth()}`}/{date.getFullYear()}
						</div>
						<div className="
							basis-4/8">
							{bill.store}
						</div>
						<div className="
							basis-1/8">	
							${bill.amount}
						</div>
						<div className='
							basis-1/8
							flex
							flex-row
							justify-end
							items-end
							h-full'>
							<div
								className="flex justify-center items-center text-blue-500 hover:bg-blue-500 hover:text-neutral-50 w-18 h-full"
								onClick={() => setExpand(prev => !prev)}>
									<MdExpandCircleDown className={`
										transform
										transition-transform
										duration-300
										ease-in-out
										text-2xl
										${expand ? 'rotate-180' : 'rotate-360'
									}`}/>
							</div>
						</div>
					</div>
					<div className={`
							pl-4
							gap-4
						overflow-hidden
						transition-all
						duration-300
						ease-in-out
						flex
						flex-row
						w-full
						items-center
						${expand ? 'h-18' : 'h-0'}`}
					>
						<div className="
							basis-4/8">
							{bill.description}
						</div>
						<div className="
							basis-2/8">
							{bill.method}
						</div>
						<div className='
							basis-2/8
							flex
							flex-row
							justify-end
							h-full'>
							<div className="flex justify-center items-center text-blue-500 hover:bg-blue-500 hover:text-neutral-50 w-18 h-full">
								<MdEdit />
							</div>
							<div className="flex justify-center items-center text-red-500 hover:bg-red-500 hover:text-neutral-50 w-18 h-full">
								<MdDelete />
							</div>
						</div>
					</div>
		</div>
		
	);
}