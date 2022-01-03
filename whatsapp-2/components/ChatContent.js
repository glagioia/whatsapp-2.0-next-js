import styled from 'styled-components';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';


const ChatContent = () => {
    return (
        <Container>
            <Header>
                <Avatar />
                <HeaderInfo>
                    <h3>Emma</h3>
                    <div>Last Active: 3 hours ago</div>
                </HeaderInfo>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </Header>

            <InputContainer>
                <IconButton>
                    <InsertEmotionIcon />
                </IconButton>
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
                <Input placeholder="Type a message..." />
                <IconButton>
                    <MicIcon />
                </IconButton>
            </InputContainer>
        </Container>
    )
}

export default ChatContent;


const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    position: sticky;
    background-color: white;
    z-index: 100;
    top: 0;
    display: flex;
    padding: 11px;
    height: 80px;
    align-items: center;
    border-bottom: 1px solid whitesmoke;
`;

const HeaderInfo = styled.div`
    margin-left: 15px;
    flex: 1;

    >h3{
        margin-bottom: 3px;
    }

    >div{
        font-size: 14px;
        color: gray;
    }
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    position: sticky;
    bottom: 0;
    background-color: #f0f0f0;
    z-index: 100;
`;

const Input = styled.input`
    flex: 1;
    border: none;
    outline: none;
    border-radius: 30px;
    padding: 20px;
    margin-left: 15px;
    margin-right: 15px;
`;


