import styled from 'styled-components';
import moment from 'moment';


const Message = ({ user, message, timestamp }) => {

    const loginMail = "ckmobile@gmail.com"
    const MessageType = user === loginMail ? MyMessage : FrdMessage;
    const TimestampType = user === loginMail ? MyTimestamp : FrdTimestamp;
    return (
        <Container>
            <MessageType>
                {message}
                <TimestampType>{moment(timestamp).format('LT')}</TimestampType>
            </MessageType>

        </Container>
    )
}

export default Message;


const Container = styled.div`
    display: flex;
 `;

const MessageBubble = styled.div`
    padding: 15px;
    padding-bottom: 26px;
    text-align: right;
    background-color: white;
    margin-bottom: 10px;
    position: relative;
`;

const MyMessage = styled(MessageBubble)`
    margin-left: auto;
    background-color: #896bd5;
    border-radius: 8px 0px 8px 8px;
    color: white;
`;

const FrdMessage = styled(MessageBubble)`
    text-align: left;
    background-color: white;
    border-radius: 0px 8px 8px 8px;
`;

const MyTimestamp = styled.span`	
    color: white;
    padding: 10px;
    font-size: 9px;
    position: absolute;
    bottom: 0;
    text-align: right;
    right: 0;
`;
const FrdTimestamp = styled.span`	
    color: gray;
    padding: 10px;
    font-size: 9px;
    position: absolute;
    bottom: 0;
    text-align: right;
    right: 0;
`;

