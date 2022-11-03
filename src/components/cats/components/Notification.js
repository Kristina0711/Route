const Notification = (props) => {
    const {name, kind, email} = props;
    return (
        <>
            <p>Уважаемый, {name}!</p>
            <p>Как только кошки пароды {kind} появятся</p>
            <p>Мы сразу вам сообщим по адресу: {email}</p>
        </>
    )
}

export default Notification;