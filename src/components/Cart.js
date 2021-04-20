import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import {
    Grid,
    Text,
    Box,
    Image,
    Link,
    Flex,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button
  } from "@chakra-ui/react"
import { CloseIcon } from '@chakra-ui/icons'

const Cart = () => {

    const { isCartOpen, closeCart, checkout, removeLineItem } = useContext(ShopContext)

    return (
        <>
            <Drawer
                isOpen={isCartOpen}
                placement="right"
                onClose={closeCart}
                size="sm"
            >
                <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Your Shopping Cart</DrawerHeader>

                    <DrawerBody>
                        {
                            checkout.lineItems?.length  ? checkout.lineItems.map(item => (
                                <Grid templateColumns="repeat(4, 1fr)" gap={2} key={item.id}>
                                    <Flex className="cart-remove-item" onClick={() => removeLineItem(item.id)} alignItems='center' justifyContent='center'>
                                        <CloseIcon className="remove-line-item" />
                                    </Flex>
                                    <Flex alignItems='center' justifyContent='center'>
                                        <Image src={item.variant.image.src} />
                                    </Flex>
                                    <Flex alignItems='center' justifyContent='center'>
                                        <Text>{item.title}</Text>
                                    </Flex>
                                    <Flex alignItems='center' justifyContent='center'>
                                        <Text>{item.variant.price}</Text>
                                    </Flex>
                                </Grid>
                            )) : 
                            <Box h='100%' w='100%'>
                                <Text h='100%' display='flex' alignItems='center' justifyContent='center'>
                                    Your cart is empty!
                                </Text>
                            </Box>
                        }
                    </DrawerBody>
                        
                    <DrawerFooter>
                        { checkout.lineItems?.length ?
                            <Link style={{ textDecoration: 'none' }} w="100%" href={checkout.webUrl}>
                                <Button w="100%" colorScheme="blue">Checkout</Button>
                            </Link> 
                            :
                            <Link style={{ textDecoration: 'none' }} w="100%" href={checkout.webUrl}>
                                <Button w="100%" disabled colorScheme="blue">Checkout</Button>
                            </Link>
                        } 
                    </DrawerFooter> 
                        
                </DrawerContent>
                </DrawerOverlay>
            </Drawer> 
        </>
    )
}

export default Cart