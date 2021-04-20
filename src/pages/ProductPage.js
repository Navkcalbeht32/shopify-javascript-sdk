import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Grid, Image, Text, Heading, Button, Flex } from '@chakra-ui/react'
import { ShopContext } from '../context/shopContext'

const ProductPage = () => {

    const { handle } = useParams();

    const { fetchProductWithHandle, addItemToCheckout, product } = useContext(ShopContext)

    useEffect(() => {
        fetchProductWithHandle(handle)
    }, [fetchProductWithHandle, handle])

    if (!product.title) return <div>Loading...</div>

    return (
        <Box p='2rem' className='container'>    
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]} m='auto'>
                <Flex justifyContent='center' alignItems='center'>
                    <Image src={product.images[0].src}  />
                </Flex>
                <Flex flexDirection='column' px={['0px', '0px', '20px']}>
                    <Heading pb='2rem' pt={['50px', '50px', '0px']} >{product.title}</Heading>
                    <Text>$ {product.variants[0].price}</Text>
                    <Text color='gray.500' lineHeight='1.8'>{product.description}</Text>
                    <Button mt='40px' colorScheme="blue"
                        onClick={() => addItemToCheckout(product.variants[0].id, 1)}
                    >Add to Cart</Button>
                </Flex>
            </Grid>
        </Box>
    )
    
}

export default ProductPage
