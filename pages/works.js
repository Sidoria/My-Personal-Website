import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section  from '../components/section'
import { WorkGridItem  } from '../components/grid-item'
import thumbEPlayers from '../images/EPlayers.png'
import thumbSPMedical from '../images/spmedical.png'
import thumbWish from '../images/wishlist.png'
import Layout from '../components/layouts/article'

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay={0.3}>
                    <WorkGridItem 
                    id="e-players"
                    title="E-Players" 
                    thumbnail={thumbEPlayers}>
                        A E-Sports Competition Website
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem 
                    id="spmedical"
                    title="SP-Medical" 
                    thumbnail={thumbSPMedical}>
                        A Medical Website
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem 
                    id="wish-list"
                    title="Wish-List" 
                    thumbnail={thumbWish}>
                        A Wewbsite, list all your dreams
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works