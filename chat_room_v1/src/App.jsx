import Form from "./components/Form";
import MessagesContainer from "./components/Messages";

import "./App.css";

function App() {
	const user = "Toi";
	return (
		<>
			<MessagesContainer user={user} />
			<Form user={user} />
		</>
	);
}

export default App;
