import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [navStatus,setNavStatus] = useState(false);
  return (
    <Container>
        <a>
            <img src="images/logo.jp" alt=''/>
        </a>
        <Menu>
            <p><a href="#">Model S</a></p>
            <p><a href="#">Model 3</a></p>
            <p><a href="#">Model X</a></p>
            <p><a href="#">Model Y</a></p>
        </Menu>
        <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            <CustomMenu  onClick={()=>setNavStatus(true)} src="/images/menu (1).png" />
        </RightMenu>
        <Nav show={navStatus}>
            <CloseWrapper>
                <CustomClose onClick={()=>setNavStatus(false)} src="/images/menu (1).png" />
            </CloseWrapper>
            <li><a href='#'>Existing Inventory</a></li>
            <li><a href='#'>Used Inventory</a></li>
            <li><a href='#'>Trade-in</a></li>
            <li><a href='#'>Cybertruck</a></li>
            <li><a href='#'>Roadaster</a></li>
            <li><a href='#'>Existing Inventory</a></li>
            <li><a href='#'>Existing Inventory</a></li>
        </Nav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 20px;
    top:0;
    left:0;
    right:0;
    z-index:1;`

const Menu = styled.div` 
    display:flex;
    align-items:center; 
    justify-content:center;
    flex:1;   
    a{
        font-weight:600;
        text-transform:uppercase;
        padding: 0 10px;
        flex-wrap:nowrap;
    }

    @media(max-width:768px){
    display:none;}
`

const RightMenu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    a{
            font-weight:600;
            text-transform:uppercase;
            margin-right:10px;
        }
`

const CustomMenu = styled.img`
    cursor:pointer;
    height:20px;
`

const CustomClose = styled.img`
    cursor:pointer;
    height:20px;
`

const Nav=styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    width:300px;
    z-index:16;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform:${props => props.show ? 'translateX(0)':'translateX(100%)'};
    transition:transform 0.2s;
    li{
        padding:15px 0;   
        border-bottom:1px solid rgba(0,0,0,.2);
        a{
        font-weight:600;
        }
    }
`

const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;

`