'use client';

import { useState } from "react";

import Link from "next/link";
import { FaHome, FaListAlt, FaCalendarAlt, FaCreditCard } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { GiReceiveMoney } from "react-icons/gi";

const links = [
	{ name: 'Inicio', href: '/', icon: FaHome },
	{ name: 'Semana', href: '/week', icon: FaListAlt },
	{ name: 'Mes', href: '/month', icon: FaCalendarAlt },
	{ name: 'Gastos', href: '/bills', icon: FaCreditCard },
	{ name: 'Ingresos', href: '/incomes', icon: GiReceiveMoney },
	{ name: 'Ajustes', href: '/config', icon: FaGear }
];

export default function SideNav() {

	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);


	return (
		<>
			<button 
				className={`
					rounded-tr-full
					rounded-br-full
					h-16
					w-16 
					flex md:hidden
					items-center
					justify-center 
					absolute
					top-[50%] 
					left-0
					z-50
					transform
					transition-transform
					duration-300
					ease-in-out
					${isOpen ? 'translate-x-20 text-5xl bg-neutral-50 text-blue-500' : 'translate-x-0 text-2xl font-bold bg-blue-500 text-white'}`
				}
				onClick={() => setIsOpen(prev => !prev)}>
				{isOpen ? '×' : '☰'}
			</button>

			<div 
				className={`
					h-screen
					flex
					flex-col
					font-bold
					bg-neutral-50
					absolute
					md:static
					top-0 
					left-0
					z-40
					transform
					transition-transform
					duration-300
					ease-in-out
					md:translate-x-0
					md:w-auto
					shadow-lg
					${isOpen ? 'translate-x-0' : '-translate-x-full'}
				`}>
				<div
					className="
						flex
						flex-col
						items-center
						h-full
						justify-between
					">
					<div 
						className="
							flex
							flex-col
							w-full
						">
						{
							links.map((link) => {
								const LinkIcon = link.icon;
									return (
										<Link
											key={link.name}
											href={link.href}
											className={`
												w-20
												h-20
												transition-colors
												duration-600
												text-2xl
												text-neutral-600
												${pathname === link.href ? 'bg-blue-500 text-white' : 'hover:text-blue-600 hover:bg-blue-100'}
												flex
												items-center
												justify-center
											`}
											onClick={() => setIsOpen(false)}
										>
											<LinkIcon />
										</Link>
									)
								}
							)
						}<Link
									key='Logout'
									href='/logout'
									className={`
										w-20
										h-20
										transition-colors
										duration-600
										text-4xl
										text-neutral-600
										hover:text-blue-500
										hover:bg-blue-100
										flex
										items-center
										justify-center`}>
										<IoLogOut />
								</Link>
					</div>
				</div>
			</div>
		</>
	);
}