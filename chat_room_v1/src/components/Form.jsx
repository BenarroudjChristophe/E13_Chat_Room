import { useDispatch } from "react-redux";
import { addMessage } from "../store/actions/chatAction";
import { useState } from "react";
import { logUser } from "../store/actions/settingsAction";

const Form = () => {
	
	const user = "Moi";
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setInputValue("");
		dispatch(addMessage({ author: user, message: inputValue }));
	};

	return (
		<form className='flex' onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Votre message...'
				className='input input-bordered w-full max-w-xs neutral'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button className='btn btn-outline btn-success'>Send</button>
		</form>
	);
};

export default Form;
