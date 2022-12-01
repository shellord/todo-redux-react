import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type todoState = {
  id: number;
  value: string;
}[];

const initialState: todoState = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});
