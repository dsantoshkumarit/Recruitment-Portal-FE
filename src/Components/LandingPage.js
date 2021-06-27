import {Grid,Segment,Image,Container,Header,Icon} from 'semantic-ui-react';
import LoginOrSignupMenu from './LoginOrSignupMenu';

export default function LandingPage(){
    return (
        <Container text-align='center' style={{margin:'20px'}}>
        <Grid columns={2} divided stackable>
            <Grid.Row >
                <Grid.Column width={12}>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <h1>My Recruitment Portal</h1>
                            
                            <h4>Where Developers meet excellent Companies</h4>
                            <br/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column >
                            <Segment >
                                <Grid columns={2} stackable  divided>
                                
                                    <Grid.Row  verticalAlign="middle">
                                        <Grid.Column >
                                            <Header  >
                                                <Icon name='industry'/>
                                                <Header.Content>
                                                For Recruiters
                                                <Header.Subheader>
      View and hire candidates remotely.
    </Header.Subheader>
                                                </Header.Content>
                                                
                                            </Header>
                                            <LoginOrSignupMenu user={'recruiter'}/>
                                           
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Header  >
                                                <Icon name='users'/>
                                                <Header.Content>
                                                For Candidates
                                                <Header.Subheader>
      View and apply for companies.
    </Header.Subheader>
                                                </Header.Content>
                                               
                                            </Header>
                                            <LoginOrSignupMenu user={'candidate'}/>
                                            
                                        </Grid.Column>

                                    </Grid.Row>

                                </Grid>
                                 </Segment>
                            
                        </Grid.Column>
                    </Grid.Row>
                </Grid.Column>
                <Grid.Column width={4}>
                    
                    <Image src='../Media/homepageimg.jpg'  alt='Recruitment Portal Image' />                   
                    
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </Container>
    );
};