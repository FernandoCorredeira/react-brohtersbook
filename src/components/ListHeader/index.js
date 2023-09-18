import styled from 'styled-components'

const OptionsHeader = styled.ul`
  display: flex;
`

const Options = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items:center ;
    text-align: center;
    height: 100% ;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const textOptions1 = ['Categorias', 'Favoritos', 'Minha estante']

function ListHeader(){
    return(
        <OptionsHeader>
          {textOptions1.map( (text) => (
            <Options><p>{text}</p></Options>
          ) )}
        </OptionsHeader>
    )
}

export default ListHeader