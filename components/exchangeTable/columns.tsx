"use client";

import { Rate } from "@/types/type";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Rate>[] = [
  {
    accessorKey: "currency",
    header: "Currency",
  },
  {
    accessorKey: "exchangeRate",
    header: "Exchange Rate",
  },
];
