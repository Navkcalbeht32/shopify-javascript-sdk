import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { Icon, Flex, Box, Badge, Text } from '@chakra-ui/react'
import { MdMenu, MdShoppingBasket } from 'react-icons/md'

const Navbar = () => {
    
    const { openCart, openMenu, checkout } = useContext(ShopContext)

    const renderBadge = () => {
        if (checkout.lineItems?.length !== 0) {
            return (
                <Badge className="cart-badge" backgroundColor='red' color='white' padding='3px' borderRadius='50%'>
                    <Text>{checkout.lineItems?.length}</Text>
                </Badge>
            )
            
        } else {
            <Badge className="cart-badge" backgroundColor='transparent' color='transparent' padding='3px' borderRadius='50%'>
                <Text>{checkout.lineItems?.length}</Text>
            </Badge>
        }
    }

    return (
        <Flex className='container' backgroundColor="#fff" flexDirection="row" justifyContent="space-between" p="2rem" >
            <Icon className='nav-link' fill="black" as={MdMenu} w={30} h={30}  onClick={() => openMenu()}/>
            <Icon className='nav-link' fill="black" w={30} h={30} />
            
            <Box className="cart-icon">
                <Icon className='nav-link' fill="black" as={MdShoppingBasket} w={30} h={30} onClick={() => openCart()} />
                {renderBadge()}
            </Box>
        </Flex>
    )
}

export default Navbar