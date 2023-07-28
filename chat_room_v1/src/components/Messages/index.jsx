import { useSelector } from "react-redux";
import Message from "./Message";
import { useEffect, useRef } from "react";

const MessagesContainer = ({ user }) => {
	// à récupérer depuis le store
	const messages = useSelector((state) => state.chat);

	const bottomElement = useRef(null);

	useEffect(() => {
		// en mettant la ref sur le conteneur directement
		bottomElement.current.scrollTop = bottomElement.current.scrollHeight;
		// // si on met la ref sur une div en bas du conteneur :
		// bottomElement.current.scrollIntoView()
	});

	return (
		<section className='mb-8 max-w-7xl w-full'>
			<h1 className='mb-8 h-[10vh]'>Messages</h1>
			<div
				ref={bottomElement}
				className='flex flex-col overflow-y-auto h-[70vh]'
			>
				{messages.map((mess) => (
					<Message
						key={mess.message}
						user={user}
						author={mess.author}
						message={mess.message}
						date={mess.date}
					/>
				))}
			</div>
		</section>
	);
};

export default MessagesContainer;
