
export default function Input({type, placeholder}: {type: string, placeholder: string}) {

	return (
		<input
			type={type}
			placeholder={placeholder}
			name={placeholder.toLowerCase().replace(/\s+/g, '-')}
			className="h-15 w-full p-4 mt-4 bg-white shadow-xl rounded-md outline-0 focus:border-b-2 focus:border-blue-500" />
	);
}