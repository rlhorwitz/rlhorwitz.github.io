import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const FullPageSection = styled.div`
    position: fixed;
    overflow: scroll;
    background-size: cover;
    background-position: center;
    background-image: ${({backgroundImage}) => {
        if(backgroundImage){
            return `url("${backgroundImage}")`
        } else {
            return "none"
        }
    }};
    background-color: ${({backgroundColor, backgroundImage}) => backgroundImage ? "none" : backgroundColor || "none"};
    height: calc(100vh - ${({theme}) => theme.nav.height});
`

export const StyledCard = styled(Card)`
    background-color: ${({backgroundColor}) => backgroundColor || "white"};
`