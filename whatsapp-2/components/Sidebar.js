import { Avatar,Button, IconButton } from '@material-ui/core';
import styled from 'styled-components';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import * as EmailValidator from 'email-validator';


function Sidebar() {

    const createChat = () => {
        const input = prompt(
            'Please enter an email address for the user yo wish to chat with'
            );

            if(!input) return null;

            if(!EmailValidator.validate(input)) {
                //tendriamos que agregar el chat en la DB "chats" collection
            }


    }
    return (
        <Container>
            <Header>
                <UserAvatar />

                <IconsContainer>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </IconsContainer>
            </Header>

            <Search>
                <SearchIcon />
                <SearchInput placeholder='Search in chats'/>
            </Search>

            <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>


            {/*list of chats*/}
        </Container>

    )
}


export default Sidebar;

const Container = styled.div``;

const Search = styled.div`
    display: flex;
    aloign-items: center;
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

const SearchInput = styled.input`
    border: none;
    outline-width: 0;
    flex: 1;

`;

const Header = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    background-color: #5b2cd2;
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