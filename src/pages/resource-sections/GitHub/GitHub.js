import React from "react";
import {Card , CardDeck,Image, Row, Col, Container,Jumbotron, Accordion, Button} from "react-bootstrap";

import './GitHub.css'


const GetStarted = () => {
  return (
    <>
      <Jumbotron className='git' fluid>
          <Container>
            <Image className='github-logo' src='/images/other/GitHubLogo.png'/>
            <p className='resources-section-p'>At a high level, GitHub is a website and cloud-based service that helps developers store and manage their code, as well as track and control changes to their code. To understand exactly what GitHub is, you need to know two connected principles:</p>  
            
            <h3 className='resources-section-h3'> Version Control:</h3>
                <p className='resources-section-p'>In software engineering, version control is a class of systems responsible for managing changes to computer programs, documents, large web sites, or other collections of information. Version control is a component of software configuration management.</p>
            
            <h3 className='resources-section-h3'> Git: </h3>
                <p className='resources-section-p'>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.</p>       
          
          </Container>
          <Container>
              <h1 className='resources-section-h1'>Set Up</h1>
              
              
              <Row className='git-links-row'>
                <h3 className='resources-section-h3'> Installing Git:</h3>
                <a className='git-links' href='https://git-scm.com/download/win'><i class="fab fa-windows fa-2x"> Windows</i></a>
                <a className='git-links' href='https://git-scm.com/download/linux'><i class="fab fa-linux fa-2x"></i> Linux</a>
                <a className='git-links' href='https://git-scm.com/download/mac'><i class="fab fa-apple fa-2x"> Mac OS</i></a>
              </Row>
            
              <Row className='git-links-row'>
                <h3 className='resources-section-h3'> GitHub:</h3>
                <a className='git-links' href='https://github.com/'><i class="fab fa-github fa-2x"> GitHub </i></a>
              </Row>

              <h1>Git Cheat Sheet:</h1>
              <CardDeck className="git-carddeck">
                    <Card className="git-card" border="dark">
                        <Card.Body className="git-card-body">
                            <Card.Title className="git-card-title">
                                SETUP
                            </Card.Title>
                            <Card.Text className="git-card-text">
                                Configuring user information used across all local repositories
                                
                            </Card.Text>
                                    
                                <code className='git-code'>git config --global user.name “[firstname lastname]”</code>
                                <p className='git-cheat-p'>Set a name that is identifiable for credit when review version history</p>
                
                                <code className='git-code'>git config --global user.email “[valid-email]”</code>
                                <p className='git-cheat-p'>Set an email address that will be associated with each history marker</p>
                         
                                <code className='git-code'>git config --global color.ui auto</code>
                                <p className='git-cheat-p'>Set automatic command line coloring for Git for easy reviewing</p>
            
                        </Card.Body>
                    </Card>
                    
                    <Card className="git-card" border="dark">
                        <Card.Body className="git-card-body">
                            <Card.Title className="git-card-title">
                                SETUP & INIT
                            </Card.Title>
                            <Card.Text className="git-card-text">
                                Configuring user information used across all local repositories
                                
                            </Card.Text>
                                      
                                <code className='git-code'>git init</code> 
                                <p className='git-cheat-p'>Initialize an existing directory as a Git repository</p>

                                <code className='git-code'>git clone [url]</code> 
                                <p className='git-cheat-p'>Retrieve an entire repository from a hosted location via URL</p> 

                        </Card.Body>
                    </Card>
                                
              </CardDeck>

              <CardDeck className="git-carddeck">
                    <Card className="git-card" border="dark">
                        <Card.Body className="git-card-body">
                            <Card.Title className="git-card-title">
                                STAGE & SNAPSHOT
                            </Card.Title>
                            <Card.Text className="git-card-text">
                                Working with snapshots and the Git staging area
                                
                            </Card.Text>
                                <code className='git-code'>git add [file] or git add .</code>  
                                <p className='git-cheat-p'>Add a file as it looks now to your next commit (stage)</p>
                         

                                <code className='git-code'>git commit -m “[descriptive message]”</code> 
                                <p className='git-cheat-p'>Commit your staged content as a new commit snapshot</p> 
                                    
                        </Card.Body>
                    </Card>
                    
                    <Card className="git-card" border="dark">
                        <Card.Body className="git-card-body">
                            <Card.Title className="git-card-title">
                                BRANCH & MERGE
                            </Card.Title>
                            <Card.Text className="git-card-text">
                                Isolating work in branches, changing context, and integrating changes
                                
                            </Card.Text>
                            <code className='git-code'>git branch</code>  
                            <p className='git-cheat-p'>List your branches. a * will appear next to the currently active branch</p>
                      
                            <code className='git-code'>git branch [branch-name]</code> 
                            <p className='git-cheat-p'>Create a new branch at the current commit</p> 
                        
                            
                            <code className='git-code'>git checkout [branch-name]</code> 
                            <p className='git-cheat-p'>Switch to another branch and check it out into your working directory</p> 
                       
                            
                            <code className='git-code'>git merge [branch]</code> 
                            <p className='git-cheat-p'>Merge the specified branch’s history into the current one</p> 
                       
                                
                        </Card.Body>
                    </Card>
                                
              </CardDeck>
            </Container>
      </Jumbotron>
      















     
    </>
  );
};

export default GetStarted;
