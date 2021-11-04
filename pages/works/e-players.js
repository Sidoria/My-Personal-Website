import {  Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="E-Players">
        <Container>
                  <Title>
                    E-Players <Badge>2021</Badge>
                </Title>
                    <P>
                        Um Site para gamers de verdade competirem, verem as competições que estão por vir de seu game preferido, e poder tornar o seu time, o melhor do mundo.
                    </P>


                    <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link>Cooming Soon</Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>MVC</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Git Project</Meta>
                        <Link href="https://github.com/Sidoria/E-PlayerV2">E-Players, for real gamers <ExternalLinkIcon mx="2px" /></Link>
                    </ListItem>
                </List>
            <WorkImage src="/images/EPlayers.png" alt="E-players"/>
        </Container>
    </Layout>           

)


export default Work
