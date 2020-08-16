import styled from 'styled-components';
import { Navbar } from "react-bootstrap";

export const StyledNavBar = styled(Navbar)`
    height: ${({theme}) => theme.nav.height};
`