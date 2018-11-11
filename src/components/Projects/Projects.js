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
                                    <img className="pics" src="/images/goat_small.jpg" alt={project.name} />
                                    <h1 id="test">{project.name}</h1>
                                    <p>{project.github}</p>
                                    <p>{project.website}</p>
                                    <p>{project.tag_name}</p>
                                    <br/>
                                    <p>{project.description}</p>     
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
