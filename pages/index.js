import NextLink from 'next/link'
import { 
    Button,
    Container, 
    Box, 
    Heading, 
    Image, 
    useColorModeValue,
    Link
} from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection , BioYear } from '../components/bio'
import Layout from '../components/layouts/article'

const Page = () => {
    return (
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center"> 
                Hello, I&apos;m a front-end developer based in Brazil!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Lucas Reis
                    </Heading>
                    <p>Student ( Artist / Developer / Designer )</p>
                </Box>
                <Box 
                flexShrink={0}
                mt={{base: 4, 
                     md: 0
                }}
                ml={{md: 6}}
                align="center"
                >
                    <Image 
                    borderColor="whiteAlpha.800" 
                    borderWidth={2} 
                    borderStyle="solid"
                    maxWidth="100px"
                    display="inline-block"
                    borderRadius="full"
                    src="https://avatars.githubusercontent.com/u/72222396?v=4"
                    alt="Profile Image"
                    />
                </Box>        
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>Lucas is a freelancer and student in the field of Web development, always looking for new knowledge

                #WeAreTheFuture {''}
                <NextLink href="/works/eplayer.js" >
                    <Link>
                        E-Players
                    </Link>
                </NextLink>
                .
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2004</BioYear>
                    Born in Santo André (SP), Brazil.
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    I started studying Systems Development at SENAI Informatica School
                </BioSection>
            </Section>
        </Container>
        </Layout>
    )
}

export default Page