'use client'

// import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { MdAdd } from "react-icons/md";
import { CiSaveUp2 } from "react-icons/ci";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react"
import Input from "./input";
import Buttons from "./Buttons";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from "@mui/x-date-pickers";



export default function AddBill() {

	const addIcon = <MdAdd className="w-12 text-white text-4xl"/>;
	const saveIcon = <CiSaveUp2 className="w-12 text-white text-4xl"/>;

	// const searchParams = useSearchParams();
	// const pathname = usePathname();
	// const { replace } = useRouter();
	// const params = new URLSearchParams(searchParams);
	const [expand, setExpand] = useState(false);

	function expandAdd (){
		setExpand(prev => !prev);
	};

	return (
		<div className="flex flex-col w-full">
			<Buttons icon={addIcon} action={expandAdd}>Agregar gasto</Buttons>
			<AnimatePresence>
				{expand && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className={`
						w-full pt-4`}>
		
						
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DateField className="w-full bg-white rounded-md shadow-lg mt-4"/>
						</LocalizationProvider>
						<Input type="text" placeholder="Comercio"/>
						<Input type="text" placeholder="Monto"/>
						<Input type="text" placeholder="Descripción"/>
						<Input type="text" placeholder="Categoría"/>
						<Input type="text" placeholder="Método"/>
					<div className="mt-4 flex flex-row w-full">
						<Buttons icon={saveIcon}>Guardar</Buttons>
					</div>
				</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}