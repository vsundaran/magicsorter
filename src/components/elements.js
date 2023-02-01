import styled,{css} from "styled-components";

export const Wrapper = styled.div`      
width: 100%;
height: 100vh;
background-color: white;
`
export const Navbar = styled.div`
width: 100%;
height: 55px;
display: flex;
cursor: pointer;
align-items: center;
justify-content: space-between;
border-bottom: 0.1px solid lightgray;
`
export const Verticalnavbar = styled.div`
width: 230px;
padding: 10px;
height:calc(100vh - 80px);
border-right: 1px solid lightgray;
`
export const Flexbox = styled.div`
display: flex;
align-items: center;

  ${props => props.center && css`
    justify-content: center;
  `}
  
  ${props => props.trick && css`
    flex: 1 0;
  `}

  ${props => props.wrap && css`
    flex-wrap: wrap;
  `}
  ${props => props.align && css`
    align-items: flex-start;
  `}

  ${props => props.gap && css`
    gap: 10px;
    margin-top: 150px;
  `}

  ${props => props.top && css`
    align-items: flex-start;
  `}

  ${props => props.space && css`
    gap: 10px;
    justify-content: space-evenly;
    flex-direction: row;
    align-content: stretch;
  `}
  `
export const RightFlexBox = styled.div`
height: calc(100vh - 80px);
background-color: black;
`

export const Container = styled.div`
padding: 0px 20px;
margin-bottom: 50px;
padding: 0px 20px;
margin-bottom: 50px;
overflow: hidden;
`
export const Gridbox = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
`
export const Card = styled.div`
    margin: 20px;
    display: flex;
    padding: 10px;
    min-height: 450px;
    flex-wrap: wrap;
    overflow: hidden;
    transition: 0.3s;
    border-radius: 5px;
    flex-direction: row;
    background-color: #fff;
    align-content: stretch;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`
export const Button = styled.button`
    color: white;
    border: none;
    padding: 0 0.5em;
    border-radius: 3px;
    margin-bottom: auto;
    background-color: #625eff;
    ${props => props.sort && css`
    padding: 0.18em 1em;
  `}
    ${props => props.code && css`
    padding: 0.18em 1em;
    margin-top: 10px;
  `}
    ${props => props.clear && css`
    padding: 0.18em 1em;
    background-color: #ce2828;
  `}
`
export const Footer = styled.div`
padding: 20px;
display: flex;
justify-content: space-around;
min-height: 300px;
position: relative;
background-color: rgb(10 21 53);

${props => props.short && css`
  gap: 10px;
  min-height: 25px;
`}

`
export const Footercard = styled.div`
max-width: 200px;
min-height: 200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const Capsule = styled.button`
border: none;
color: white;
padding: 0 0.8em;
margin: 0px 10px;
margin-top: 10px;
border-radius: 30px;
background-color: #625eff;
`