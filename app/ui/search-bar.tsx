'use client'

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from 'use-debounce';

export default function SearchBills() {

	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const params = new URLSearchParams(searchParams);

	const handleChange = useDebouncedCallback((term: string) => {
		if (term) {
			params.set('query', term);
		} else {
			params.delete('query');
		}
    	replace(`${pathname}?${params.toString()}`);
	}, 500);

	return (
		<div className="flex flex-row w-full rounded-lg shadow-lg bg-white overflow-hidden">
			<input
			type="text"
			placeholder="Buscar..."
			className="w-full p-4 focus:outline-none focus:border-blue-500 focus:border-b-2"
			defaultValue={searchParams.get('query')?.toString()}
			onChange={(e) => {handleChange(e.target.value)}}/>
			<MdSearch 
			className="w-18 text-white p-4 bg-blue-500 h-full"/>
		</div>
	);
}