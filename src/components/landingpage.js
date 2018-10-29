import React, { Component } from 'react';
import { Grid , Cell } from 'react-mdl';


class LandingPage extends Component {
   
    render() { 
        return ( 
            <div style= {{ width: '100%' , margin: 'auto' }}>
                <Grid className="landing-grid"> 
                <Cell col={12}> 
                 <img 
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmKx49yUWyj8yXmB5i2xLhvMYyr9PTRyDFclJ8MVT5TxEcBhRE"
                 alt="avatar"
                 className="avatar-img"/>
                 <div className="banner-text">
                 <h1> Full Stack Web Developer</h1>
                    <hr />
                    <p> HTML & CSS      |    JAVASCRIPT    |    REACT    |    REDUX    |     PHP    | MYSQL  </p>
                    
                    
                    <div className="social-links">
                   
                    <a href="http://www.linkedin.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>
                   
                    <a href="http://www.instagram.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-youtube-square" aria-hidden="true" />
                    </a>
                   
                    <a href="http://www.google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-facebook-square" aria-hidden="true" />
                    </a>
                   
                    <a href="http://www.github.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                    </a>
                    
                     </div>
                 </div>
                </Cell>

                </Grid>
            </div>
         );
    }
}
 
export default LandingPage;