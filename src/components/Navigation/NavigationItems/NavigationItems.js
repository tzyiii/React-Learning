import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
    return (<ul>
        <NavigationItem link={"/"} active>Burger Builder</NavigationItem>
        <NavigationItem link={"/"} active>Checkout</NavigationItem>
    </ul>);
};

export default navigationItems;