import React, { Component } from 'react';
import { Grid , Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
   
    render() { 
        return ( 
            <div>
                <Grid>
                    <Cell col={4}>
                    <div style={{textAlign:'center'}}>

                        <img 
                        src="https://shareicon.net/download/2015/09/18/103157_man_512X512.png"
                        alt="avatar"
                        style={{height:'200px'}}
                        />
                    </div>
                    <h2 style={{paddingTop:'2em'}}>Oguzhan Arik</h2>
                    <h3 style={{color:'grey'}}>Programmer </h3>
                    <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                    <p>Buraya açıklama kısmı gelecek</p>
                    <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                    <h5>Adress</h5>
                    <p>1460sk Alsancak/Izmir</p>
                    <h5>Phone</h5>
                    <p>+90 545 243 13 60</p>
                    <h5>Email</h5>
                    <p>oguzhannarik@gmail.com</p>
                    <h5>Web</h5>
                    <p>www.oguzhannarik.com</p>
                    <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
            
                    </Cell>
                    <Cell className="resume-right-col" col={8}> 
                    <h2>Education</h2>
                    <Education
                     startYear = {2012}
                     endYear = {2017}
                     schoolName= "Akdeniz University"
                     schoolDescription = "Computer Programming  "
                     />
                    <Education
                     startYear = {2007}
                     endYear = {2011}
                     schoolName= "Karsiyaka  Highschool"
                     schoolDescription = " "
                     />
                     <hr  style= {{ borderTop: '3px solid #e22947'}}/>
                     <h2>Experience</h2>
                     <Experience 
                      startYear = {2017}
                      endYear   = {2018}
                      role      = "Front End Developer"
                      jobDescription = "Created a Izmir art gallery web app using Php and React
                      "
                      place = "@artwebdesign"
                     />
                     <Experience 
                      startYear = {2016}
                      endYear   = {2017}
                      role      = "  Front End Developer"
                      jobDescription = "Helped integrate agile practices into team workflow, resulting in organized, documented, and accountable work."
                      place =  "@intesowebagency"
                     />
                      <hr  style= {{ borderTop: '3px solid #e22947'}}/>
                      <h2>Skills</h2>
                      <Skills 
                      skill= "JavaScript"
                      progress={90}
                      />
                      <Skills 
                      skill= "Html5"
                      progress={100}
                      />
                      <Skills 
                      skill= "Css3"
                      progress={100}
                      />
                      <Skills 
                      skill= "Php & MySQL"
                      progress={70}
                      />

                    </Cell>
                </Grid>
            </div>
         );
    }
}
 
export default Resume;