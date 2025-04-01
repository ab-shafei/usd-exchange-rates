import { Rate } from "@/types/type";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface ExchangeRatesState {
  rates: Rate[];
  loading: boolean;
  error: string | null;
}

// Initial State
const initialState: ExchangeRatesState = {
  rates: [],
  loading: false,
  error: null,
};

export const fetchExchangeRates = createAsyncThunk(
  "exchangeRates/fetch",
  async () => {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_EXCHANGE_RATE_API!
    );

    const exchangeRates = response.data.conversion_rates;

    const formatetedRates = Object.entries(exchangeRates).map(
      ([currency, exchangeRate]) => ({
        currency,
        exchangeRate: exchangeRate as number,
      })
    );
    return formatetedRates;
  }
);

const exchangeRatesSlice = createSlice({
  name: "exchangeRates",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchangeRates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchExchangeRates.fulfilled,
        (state, action: PayloadAction<Rate[]>) => {
          state.rates = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchExchangeRates.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch exchange rates.";
      });
  },
});

export default exchangeRatesSlice.reducer;
