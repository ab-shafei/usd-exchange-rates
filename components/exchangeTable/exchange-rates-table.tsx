import { Rate } from "@/types/type";
import { columns } from "./columns";
import { DataTable } from "./data-table";

interface ExchangeRatesTableProps {
  rates: Rate[];
}

export default function ExchangeRatesTable({ rates }: ExchangeRatesTableProps) {
  return <DataTable columns={columns} data={rates} />;
}
