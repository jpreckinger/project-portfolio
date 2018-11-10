import React, { Component } from 'react';
import './Projects.css';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';


class Projects extends Component {
  // Renders the entire app on the DOM

    

    render() {
        return (
            <div className="Projects">
                <h1 id="header">Jonathan Reckinger</h1>
                <Paper>
                    <Card>
                        <CardMedia>
                            {/* img goes here */}
                        </CardMedia>
                        <CardContent>
                            <h1>Project Name</h1>
                            <p>github</p>
                            <p>Website</p>
                            <p>tag</p>
                            <br/>
                            <p>here will go a bunch of words describing the project</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardMedia>
                            {/* img goes here */}
                        </CardMedia>
                        <CardContent>
                            <h1>Project Name</h1>
                            <p>github</p>
                            <p>Website</p>
                            <p>tag</p>
                            <br/>
                            <p>here will go a bunch of words describing the project</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardMedia>
                            {/* img goes here */}
                        </CardMedia>
                        <CardContent>
                            <h1>Project Name</h1>
                            <p>github</p>
                            <p>Website</p>
                            <p>tag</p>
                            <br/>
                            <p>here will go a bunch of words describing the project</p>
                        </CardContent>
                    </Card>
                </Paper>
            </div>
        );
    }
}

export default Projects;
