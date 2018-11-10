import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


class Admin extends Component {

    handleSubmit = () => {
        console.log('in handlesubmit');
    }

    render() {
        return (
            <div className="Admin">
            <header><h1>Admin</h1></header>
            <Link to="/">Back to Projects</Link>
            <section>
                <h2>Add New Project</h2>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Name" type="text" />
                    <input placeholder="mm-dd-yyyy" type="date" />
                    <select name="tags">
                        <option value="react">React</option>
                        <option value="jQuery">jQuery</option>
                        <option value="node">Node</option>
                        <option value="sql">SQL</option>
                        <option value="redux">Redux</option>
                        <option value="html">HTML</option>
                    </select>
                    <br/>
                    <input placeholder="GitHub URL" type="text" />
                    <input placeholder="Website URL (Optional)" type="text" />
                    <br/>
                    <input id="description" placeholder="Description" type="text" />
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
                            {/* Map here */}
                            <TableRow>
                                <TableCell>Test Data</TableCell>
                                <TableCell><Button>Delete</Button></TableCell>
                            </TableRow>
                            {/* end map */}
                        </TableBody>
                    </Table>
                </Paper>
            </section>
            </div>
        );
    }
}

export default Admin;
