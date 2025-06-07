import { ReactNode } from "react";

export default function Buttons({children, icon, action}: {children: ReactNode, icon: ReactNode, action?: () => void}) {

	return (
		<button
			className="h-15 w-full p-4 rounded-lg flex flex-row justify-between items-center bg-blue-500 text-white text-left hover:bg-blue-600 focus:outline-none shadow-lg"
			onClick={action}>
				{children}
				{icon}
		</button>
	);
}