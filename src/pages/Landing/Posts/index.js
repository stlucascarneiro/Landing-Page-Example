import React, { useContext } from 'react'
// Config
import { GlobalContext } from 'context';
import { ThemeProvider } from 'styled-components';
// Components
import { Container, InnerContainer, Title, Caption, Paragraph, ExampleContainer, BackgroundFrame, PostsContainer, Item, Avatar, Username, TimeStamp, Content, Genre, Favorites, FavoriteIcon } from './styles';
// Assets
import avatar from "assets/avatar/avatar.png";

const Posts = () => {
    const { device, theme } = useContext(GlobalContext)
    return (
        <ThemeProvider theme={{ ...theme, device }}>
            <Container id='Suggestions'>
                <InnerContainer>
                    <Title>Olha como nossos</Title>
                    <Caption>posts são legais</Caption>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Paragraph>
                    <ExampleContainer>
                        <BackgroundFrame />
                        <PostsContainer>
                            <Item>
                                <Avatar src={avatar} />
                                <Username>JohnDoe<TimeStamp>15 minutos atrás</TimeStamp></Username>
                                <Content>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</Content>
                                <Genre>Lorem ipsum <FavoriteIcon /> <Favorites>273</Favorites> </Genre>
                            </Item>
                            <Item>
                                <Avatar src={avatar} />
                                <Username>JohnDoe<TimeStamp>2 horas atrás</TimeStamp></Username>
                                <Content>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</Content>
                                <Genre>Nemo enim ipsam <FavoriteIcon /> <Favorites>419</Favorites> </Genre>
                            </Item>
                            <Item>
                                <Avatar src={avatar} />
                                <Username>JohnDoe<TimeStamp>3 dias atrás</TimeStamp></Username>
                                <Content>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Content>
                                <Genre>Lorem ipsum <FavoriteIcon /> <Favorites>2.7k</Favorites> </Genre>
                            </Item>
                        </PostsContainer>
                    </ExampleContainer>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Paragraph>
                    <div style={{ height: '6rem' }} />
                </InnerContainer>
            </Container>
        </ThemeProvider>
    );
}

export default Posts;