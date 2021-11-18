const Notification = ({text}) => (
                               
<h3>{text}</h3>

    )

Notification.defaultProps = {
    text: 'No feedback given',
};

export default Notification;