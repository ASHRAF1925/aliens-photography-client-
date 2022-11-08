import {createGlobalStyle} from 'styled-components'

export const lightTheme={
    body:"#fff",
    fontcolor:"#000"
}
export const darkTheme={
    fontcolor:"#fff",
    body:"#000"
}

export const GlobalStyles = createGlobalStyle`

body{
    background-color: ${props=>props.theme.body};
}


`
