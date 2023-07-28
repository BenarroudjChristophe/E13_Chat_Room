import { createReducer } from "@reduxjs/toolkit";

import { addMessage } from "../actions/chatAction";

const initialState = [
	{
		author: "Moi",
		message: "coucou",
	},
	{
		author: "Toi",
		message: "Hello",
	},
];

const chatReducer = createReducer(initialState, (builder) => {
	builder.addCase(addMessage, (state, action) => {
		const message = { ...action.payload, date: Date.now() };
		state.push(message);
	});
});

export default chatReducer;
