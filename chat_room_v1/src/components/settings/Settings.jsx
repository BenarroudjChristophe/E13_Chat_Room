import { useDispatch } from "react-redux";
import { useState } from "react";
import { logUser } from "../../store/actions/settingsAction";

import "./Settings.css";

const Settings = () => {
	const dispatch = useDispatch();

	const [inputPassword, setInputPassword] = useState("");
	const [inputUser, setInputUser] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setInputUser("");
		setInputPassword("");
		dispatch(logUser({ user: inputUser, password: inputPassword }));
		alert(`${inputUser} is logged in`);
	};
	return (
		<>
			<form className='flex flex-col space-y-2.5 ' onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Pseudo'
					value={inputUser}
					className='input input-bordered input-md w-full max-w-xs '
					onChange={(e) => setInputUser(e.target.value)}
				/>
				<input
					type='text'
					value={inputPassword}
					placeholder='Password'
					className='input input-bordered input-md w-full max-w-xs '
					onChange={(e) => setInputPassword(e.target.value)}
				/>
				<button className='btn btn-primary w-full max-w-xs'>Envoyer</button>
			</form>
		</>
	);
};

export default Settings;
