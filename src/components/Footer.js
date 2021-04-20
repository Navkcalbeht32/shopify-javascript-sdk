import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Box, Text, Image, VStack } from '@chakra-ui/react'
import { Icon, Flex, Badge } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box className='footer' backgroundColor='#161816'>
            <Grid className='container' templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)']} color='#999999'>
                <VStack p='2rem'>
                    <Icon fill="black" w={30} h={30} />
                </VStack>
                <VStack p='2rem'>
                    <Link to='/'>Footer Link</Link>
                    <Link to='/'>Footer Link</Link>
                    <Link to='/'>Footer Link</Link>
                </VStack>
            </Grid>
            <Box textAlign='center' color='#555555' w='100%' pt='3rem'>
                © Copyright www.ecommerceshop.com
            </Box>
        </Box>
    )
}

export default Footer
