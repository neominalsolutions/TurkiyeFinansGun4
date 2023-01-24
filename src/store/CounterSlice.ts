// state değişikliğini yönettiğimiz service burası olucak
// state yöneten kod parcası bizim için slice

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CountState {
  counter: number;
}

// state içerisinde birden fazla property tanımı yapılabilir

const initialState: CountState = {
  counter: 0,
};

// count/increment
export const countSlice = createSlice({
  name: "count", // action type denk gelir
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.counter = action.payload; // 5 değeri gönderirsem counter değeri 5 olacak
    },
  },
});

// slice içerisinde actionlara component üzerinden ulaşabilmek için export ettik.
export const { increment, decrement, incrementByValue } = countSlice.actions;
export default countSlice.reducer; // Buda store için hangi reducer bilgisi ile çalışacağını tanımlamız kısım.
