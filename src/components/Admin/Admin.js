import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


class Admin extends Component {

    state = {
        name: '',
        date: '',
        tag: '',
        github: '',
        website: '',
        description: ''
    }

    //checks for confirmation when the delete button is clicked
    handleClick = (id) => {
        confirmAlert({
            title: 'Confirm delete',
            message: 'Are you sure you want to delete this?',
            buttons: [
              {
                label: 'Get it out of my sight!',
                onClick: () => this.deleteProject(id),
              },
              {
                label: 'Not yet.',
                onClick: () => this.closeDelete()
              }
            ]
        })
    };

    //Notifies user that the delete was not processed
    closeDelete = () => {
        confirmAlert({
            title: 'Got it!',
            message: 'Your project has not been deleted',
            buttons: [
              {
                label: 'OK',
              },
            ]
        })
    }

    //dispatches the action to delete the selected project
    deleteProject = (id) => {
        this.props.dispatch({type: 'DELETE_PROJECT', payload: id});
        confirmAlert({
            title: 'Sure thing!',
            message: 'Your project is gone.',
            buttons: [
                {
                label: 'Thanks!',
                },
            ]
        })
    }

    //sets state when the user types in the textboxes
    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    //dispatches action to add a project to the database
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'ADD_PROJECT', payload: this.state})
    }

    //on mount, requests all projects and all tags
    componentDidMount() {
        this.props.dispatch({type: 'FETCH_PROJECTS'})
        this.props.dispatch({type: 'FETCH_TAGS'})
    }

    render() {
        return (
            <div className="Admin">
            <header><h1 id="header">Admin</h1></header>
            <Link id="link" to="/">Back to Projects</Link>
            <section>
                <h2>Add New Project</h2>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.name} 
                    placeholder="Name" type="text" name="name" />
                    <input onChange={this.handleChange} value={this.state.date} 
                    placeholder="mm-dd-yyyy" type="date" name="date" />
                    <select onChange={this.handleChange} name="tag">
                        <option defaultValue="" hidden>Tag</option>
                        {this.props.reduxState.tags.map( tag => (
                            <option key={tag.id} value={tag.id}>{tag.name}</option>
                        ))}
                    </select>
                    <br/>
                    <input onChange={this.handleChange} value={this.state.github}
                    placeholder="GitHub URL" type="text" name="github" />
                    <input onChange={this.handleChange} value={this.state.website}
                    placeholder="Website URL (Optional)" type="text" name="website"/>
                    <br/>
                    <input onChange={this.handleChange} value={this.state.description}
                     id="description" placeholder="Description" type="text" name="description" />
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </section>
            <section>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.reduxState.projects.map( project => ( 
                            <TableRow key={project.id}>
                                <TableCell>{project.name}</TableCell>
                                <TableCell><Button onClick={() => this.handleClick(project.id)}>Delete Project</Button></TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </section>
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => ({reduxState});

export default connect(mapStateToProps)(Admin);
