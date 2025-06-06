import { BalanceCard } from "../ui/balance-card"


export default function Home() {

	const cash = 12.5;
	const bank = 4116.01;
	const savings = 0;
	const loan = -3691;
	const total = cash + bank + savings + loan;

	return (
			<div className="px-12 py-8 flex flex-col gap-16 h-screen">
				<div className="flex flex-col gap-8">
					<h2 className="text-l font-bold tracking-widest text-blue-500">BALANCE</h2>
					<div className="flex flex-row w-full gap-8">
						<BalanceCard title="BALANCE TOTAL" amount={total} />
						<BalanceCard title="EFECTIVO" amount={cash} />
						<BalanceCard title="BANCO" amount={bank} />
						<BalanceCard title="AHORRO" amount={savings} />
						<BalanceCard title="PRÉSTAMO" amount={loan} />
					</div>
				</div>
				<div className="flex flex-col gap-8">
					<h2 className="text-l font-bold tracking-widest text-blue-500">RESUMEN DEL MES</h2>
					<div className="flex flex-row w-full gap-8">
						<BalanceCard title="INGRESOS" amount={900} />
						<BalanceCard title="GASTOS" amount={cash} />
						<BalanceCard title="BALANCE" amount={bank} />
					</div>
				</div>
			</div>
	);
}
