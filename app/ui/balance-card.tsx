export function BalanceCard({ title, amount }: { title: string, amount: number }) {
	return (
		<div className="bg-white shadow-lg rounded-lg p-8 gap-4 flex flex-col items-center justify-center w-full">
			<h3 className="text-sm font-bold tracking-widest text-blue-500">{title}</h3>
			<p className={`text-4xl font-bold ${amount<=0?'text-red-600':'text-green-700'}`}>€{amount}</p>
		</div>
	);
}