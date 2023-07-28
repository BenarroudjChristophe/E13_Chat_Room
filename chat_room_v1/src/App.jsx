import Form from "./components/Form";
import MessagesContainer from "./components/Messages";
import Settings from "./components/settings/Settings";

import "./App.css";

function App() {
	const user = "Toi";
	return (
		<>
			<Settings />
			<MessagesContainer user={user} />
			<Form user={user} />
		</>
	);
}

export default App;
