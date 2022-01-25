import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile(){
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Thiago Padovani</Text>
                <Text color="gray.300" fontSize="small">
                    padovanitr@gmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Thiago Padovani" src="https://github.com/padovanitr.png"/>
        </Flex>
    )
}