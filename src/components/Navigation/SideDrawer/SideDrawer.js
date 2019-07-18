import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux'

import './SideDrawer.css'

const sideDrawer = (props) => {
    let attachedClasses = ['SideDrawer', 'Close'];
    if(props.open){
        attachedClasses = ['SideDrawer', 'Open'];
    }

    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.close}/>
            <div className={attachedClasses.join(' ')}>
                <div className='LogoSide'>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>    
        </Aux>   
        
    );
};

export default sideDrawer;