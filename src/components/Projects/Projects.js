import React, { Component } from 'react';
import './Projects.css';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {connect} from 'react-redux';


class Projects extends Component {
  // Renders the entire app on the DOM

    // On render, tell the saga to handle to next step of getting projects
    componentDidMount(){
        this.props.dispatch({type: 'FETCH_PROJECTS'})
    }

    render() {
        return (
            <div className="Projects">
                <h1 id="header">Jonathan Reckinger</h1>
                {this.props.reduxState.projects.map(project => (
                    <div key={project.id}>
                        <Paper>
                            <Card>
                                <CardContent>
                                    {project.thumbnail && <img className="pics" 
                                    src={project.thumbnail} alt={project.name} />}
                                    {project.name && <h1>{project.name}</h1>}
                                    {project.github && <a href={project.github}
                                    target="_blank">GitHub</a>}
                                    {project.website && <a href={project.website} 
                                    target="_blank">Website</a>}
                                    {project.tag_name && <p>{project.tag_name}</p>}
                                    {project.description && <p id="describe">{project.description}</p>}     
                                </CardContent>                     
                            </Card>
                        </Paper>
                     </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => ({reduxState});

export default connect(mapStateToProps)(Projects);
