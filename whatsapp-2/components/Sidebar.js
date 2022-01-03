import { Avatar, Button, IconButton } from '@material-ui/core';
import styled from 'styled-components';
import ChatIcon from '@material-ui/icons/Chat';
import CustomVerticalMore from './CustomVerticalMore';
import SearchIcon from '@material-ui/icons/Search';
import * as EmailValidator from 'email-validator';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import chats from '../data/chats.json';
import Chat from './Chat';

function Sidebar() {

    const createChat = () => {
        const input = prompt(
            'Please enter an email address for the user yo wish to chat with'
        );

        if (!input) return null;

        if (!EmailValidator.validate(input)) {
            //tendriamos que agregar el chat en la DB "chats" collection
        }


    }
    return (
        <Container>
            <Header>
                <UserAvatar src="https://mir-s3-cdn-cf.behance.net/user/115/4952f2889290823.60af11b761920.jpg" />

                <IconsContainer>
                    <IconButton>
                        <StoriesIcon src="/stories.png" style={{ fill: 'whitesmoke' }} />
                    </IconButton>

                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    {/* <IconButton>
                        <MoreVertIcon />
                    </IconButton> */}
                    <CustomVerticalMore />
                </IconsContainer>
            </Header>

            <Notification>
                <NotificationAvatar>
                    <NotificationsOffIcon style={{ color: "#9DE1FE" }} />
                </NotificationAvatar>
                <NotificationText>
                    <div>Get Notified of New Messages</div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <a href="#">Turn off Notifications</a>
                        <IconButton>
                            <ArrowForwardIosIcon style={{ width: 15, height: 15 }} />
                        </IconButton>

                    </div>
                </NotificationText>
            </Notification>
            <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>

            <SearchChat>
                <SearchBar>
                    <SearchIcon />
                    <SearchInput placeholder="Search or start new chat" />
                </SearchBar>
            </SearchChat>
            {chats.map(chat => (<Chat
                latestMessage={chat.latestMessage}
                name={chat.name}
                timestamp={chat.timestamp}
                photoURL={chat.photoURL}
            />))}



            {/*list of chats*/}
        </Container>

    )
}


export default Sidebar;

const Container = styled.div`
    background-color: #ffffff;
    min-width: 320px;
    max-width: 450px;
    height: 100%;
`;

const SearchChat = styled.div`
    display: flex;
    align-items: center;
    background-color: #f6f6f6;
    padding: 20px;
    border-radius: 2px;
`;

const SidebarButton = styled(Button)`
    width: 100%;

    &&&{
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
        color: black;
    }
`;

const SearchBar = styled.div`
   display: flex;
   padding:5px;
   border-radius: 10px;
   border-bottom: 1px solid #ededed;
   background: white;
   width: 100%;
`;

const SearchInput = styled.input`
    width: 100%;
    border: none;

`;


const Header = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    /* background-color: #5b2cd2; */
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;

const IconsContainer = styled.div``;

const StoriesIcon = styled.img`
    width: 20px;
    height: 20px;
    color: whitesmoke;
`;


const Notification = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    background-color: #9DE1FE;
`;

const NotificationAvatar = styled(Avatar)`
    background-color: white;
 `;

const NotificationText = styled.div`
    display: flex;
    flex-direction: column;
    `;

