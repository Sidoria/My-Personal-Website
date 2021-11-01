import Head from 'next/head'
import Navbar from '../navbar'
import NoSsr from '../no-ssr'
import { Box, Container } from '@chakra-ui/react'
import VoxelGhost from '../voxel-ghost'
import { noSSR } from 'next/dynamic'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=devide-width, initial-scale=1" />
                <title>Lucas Reis - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    <VoxelGhost />
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}

export default Main