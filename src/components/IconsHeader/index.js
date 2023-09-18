import perfil from '../../img/profile_7368509.png'
import bag from '../../img/shopping-bag_teste.png'
import styled from 'styled-components'

const Icon = styled.li`
    margin-right: 40px;
    width: 25px;
`
const IconsMap = styled.ul`
    display: flex;
    align-items: center;
`

const icons = [perfil, bag]

function IconsHeader() {
    return (
        <IconsMap>
            {icons.map((icon) => (
                <Icon>
                    <img src={icon}></img>
                </Icon>
            ))}
        </IconsMap>

    )
}



export default IconsHeader;