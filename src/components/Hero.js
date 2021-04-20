import React from 'react'
import { Box, Button, Text, Image, Center } from '@chakra-ui/react'

const Hero = () => {
    return (
        <Box w='100%' position='relative' h='70vh' overflow='hidden' display='flex'>
            <Box position='absolute' backgroundColor='#444444' w='100%' h='100%' opacity='0.5' />
            <Box position='absolute' width='100%' p='3rem' top='45%' transform='translateY(-50%)' >
                <Text color='white' fontSize='2rem' fontWeight='300' margin='auto'>Everything you need in one place.</Text>
                <Text color='#FFE5B4' fontSize={['3rem', '4rem', '6rem']} fontWeight='500' margin='10px auto' lineHeight='1'>40% OFF Clearance</Text>
                <Button mt='30px' backgroundColor='black' padding='24px 60px' borderRadius='none' color='white'>View Deals</Button>
            </Box>
            <Image src='https://images.pexels.com/photos/4071383/pexels-photo-4071383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' w='100%' h='100%' m='auto' objectFit='cover' objectPosition={['top', 'center']} />
        </Box>
    )
}

export default Hero
