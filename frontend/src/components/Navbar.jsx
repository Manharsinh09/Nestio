import React, { useContext, useState } from 'react';
import {styled} from 'styled-components';
import { AuthDataContext } from '../context/AuthContext';
import axios from 'axios';
import { VscSearch } from "react-icons/vsc";
import { FaFire} from "react-icons/fa";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { MdMeetingRoom } from "react-icons/md";
import { MdApartment, MdHolidayVillage } from "react-icons/md";
import { PiFarm } from "react-icons/pi";
import { GiHamburgerMenu, GiWoodCabin } from "react-icons/gi";
import { FaShop } from "react-icons/fa6";

const Nav = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const NavbarContainer =styled.div`

    width:100%;
    height: 80%;
    display: flex;    
    justify-content: center;
    align-items: center;
    background-color: red;

`;
const NavLogo =styled.div`
    width: 50%;
    height: 100%;    
    display: flex;
    justify-content: center;
    align-items: center;
    background: blue;
`;
const Logo = styled.div``;

const NavSearch = styled.div`
    width: 100%;
    height: 100%;
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SearchBar = styled.div`
    width: 600px;
    height: 60px;
    border-radius: 50px;
    border: 1px  gray;
    box-shadow: 1px 1px 2px 2px rgba(0,0,0,0.1);
    padding: 20px 10px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

`;
const SearchWhwere = styled.div`
    width: 50%;
    padding: 0px 10px;
`;
const SearchWhen = styled.div`
    width: 50%;
    border-width: 0 1px 0 1px;
    border-style: solid;
    border-color: lightgray;
    padding: 0px 10px;
`;
const SearchGuest = styled.div`
    width: 50%;
    padding: 0px 10px;
`;

const SearchBtn = styled.div`
    width: 50px;
    height: 50px;
    margin-left: -52px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    border-radius: 50%;
    background-color: red;
    position: relative;
    left: 3px;
`;


const NavOptions = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
    align-items: center;
    background: yellow;
    gap: 10px;
`;
const NavOptionsCard = styled.ul`
    list-style: none;
    width: 200px;    
    display: flex;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;    
    padding: 10px 10px;
    border-radius: 5px;
    background-color: #f5f5e6;
    position: absolute;
    top: 80px;
    right: 50px;


`;
const NavItems = styled.div`
    width: 100%;
    height: 60%;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const NavLinks =styled.div`
    margin: 0px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3px;
    font-size: 16px;
    font-weight: 800;
`;

export const Navbar = () =>{
    
    const [isOpen,setIsOpen] = useState(false)
    
    return (
    
        <Nav>
            <NavbarContainer>
                <NavLogo>
                    <Logo>
                        <h1>Nestio</h1>
                    </Logo>
                </NavLogo>
                <NavSearch>
                    <SearchBar>
                        <SearchWhwere>
                            <label htmlFor="">Where</label>
                            <input type="text" placeholder='Search for location' style={{border:"none", outline:"none"}}/>
                        </SearchWhwere>
                        <SearchWhen>
                            <label htmlFor="">When</label><br/>
                            <input type="date" style={{border:"none", outline:"none"}}/>
                        </SearchWhen>
                        <SearchGuest>
                            <label htmlFor="">Who</label>
                            <input type="number" placeholder='Add guests' style={{border:"none", outline:"none"}}/>
                        </SearchGuest>
                        <SearchBtn><VscSearch /></SearchBtn>        
                    </SearchBar>
                </NavSearch>
              
                <NavOptions>  
                      <GiHamburgerMenu size={30} onClick={()=>setIsOpen(!isOpen)}/>                  
                        {isOpen && (<NavOptionsCard>
                            <li>Login</li>
                            <li>Logout</li>
                            <hr/>
                            <li>Listing</li>
                            <li>Order</li>
                        </NavOptionsCard>)}
                </NavOptions>
            </NavbarContainer>

            <NavItems>
                <NavLinks><FaFire size={25} /> Trending</NavLinks>
                <NavLinks><MdHolidayVillage size={25} /> Villa</NavLinks>
                <NavLinks><PiFarm size={25} /> Farm House</NavLinks>
                <NavLinks><MdMeetingRoom size={25} /> Rooms</NavLinks>
                <NavLinks><MdApartment size={25} /> Flat</NavLinks>
                <NavLinks><FaHouseChimneyWindow size={25} /> PG</NavLinks>
                <NavLinks><GiWoodCabin size={25} /> Cabins</NavLinks>
                <NavLinks><FaShop size={25} /> Shop</NavLinks>

            </NavItems>
        </Nav>
        
    )
}