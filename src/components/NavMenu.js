import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'
import {
    Text,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack
  } from "@chakra-ui/react"

const NavMenu = () => {

    const {isMenuOpen, closeMenu} = useContext(ShopContext)

    return (
        <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement='left' size='sm'>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <VStack fontSize='24px' p='2rem'>
                            <Link to='/'>Home</Link>
                            <Link to='/products'>Browse Products</Link>
                            <Link to='/about'>About Us</Link>
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter>
                        <Text w='100%'>bottom message</Text>
                    </DrawerFooter>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
}

export default NavMenu
