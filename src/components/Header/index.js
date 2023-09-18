import ListHeader from "../ListHeader"
import Logo from "../Logo"
import IconsHeader from "../IconsHeader"
import styled from 'styled-components'

const HeaderContainer = styled.header`
        background-color: #d2ffc8;
        display: flex;
        justify-content: center;
    

`


function Header(){
    return(
        <HeaderContainer>
            <Logo />
            <ListHeader/>
            <IconsHeader/>
        </HeaderContainer>
    )
}

export default Header