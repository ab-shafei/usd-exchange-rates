"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Rate } from "@/types/type";

interface ExchangeRatesTableProps {
  rates: Rate[];
}

const chartConfig = {
  currency: {
    label: "Currency",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export default function ExchangeRatesChart({ rates }: ExchangeRatesTableProps) {
  return (
    <div className="rounded-md border p-2">
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={rates}>
          <XAxis dataKey="currency" />
          <YAxis />
          <Bar dataKey="exchangeRate" fill="var(--color-desktop)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
