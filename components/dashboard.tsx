"use client";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import ExchangeRatesTable from "./exchangeTable/exchange-rates-table";
import Loader from "./loader";
import ExchangeRatesChart from "./exchangeChart/exchange-rates-chart";

export const Dashboard = () => {
  const { rates, loading } = useAppSelector((state) => state.exchangeRates);

  if (loading) return <Loader />;
  return (
    <div className="w-full">
      <div className="mx-16 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          <ExchangeRatesTable rates={rates} />
          <ExchangeRatesChart rates={rates} />
        </div>
      </div>
    </div>
  );
};
