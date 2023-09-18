import logo from '../../img/father_7704134att.png'
import styled from 'styled-components'

const LogoContainer= styled.div`
    display: flex;
    font-size: 30px;
    align-items: center;
`
const LogoImg = styled.img`
    margin-right: 10px;
    width: 65px;
    height: 65px;
`
function Logo(){
    return (
        <LogoContainer>
        <LogoImg
        src={logo} 
        alt='logo'
        />
        <p><strong>Brothers</strong>Books</p>
      </LogoContainer>
    )
}

export default Logo