import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Message = ({ author, message, date, user }) => {
	const formatDate = (date) => {
		return new Date(date).toLocaleString();
	};
	const currentUser = useSelector((state) => state.user);
	console.log(currentUser);

	return (
		<div
			className={`chat ${user === author ? "self-end chat-end" : "chat-start"}`}
		>
			<div className='chat-header'>
				{author}
				{date && (
					<time className='text-xs ml-2 opacity-50'>{formatDate(date)}</time>
				)}
			</div>
			<div
				className={`chat-bubble w-64 ${
					user === author ? "chat-bubble-secondary" : "chat-bubble-primary"
				}`}
			>
				{message}
			</div>
		</div>
	);
};

Message.propTypes = {
	author: PropTypes.string,
	message: PropTypes.string,
	date: PropTypes.number,
	user: PropTypes.string,
};

export default Message;
