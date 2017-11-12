import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Moment from 'react-moment';

const QuakeTile = (props) => {
  let action =
    <FlatButton
      label="Ok"
      primary={true}
      keyboardFocused={true}
      onClick={props.handleClose}
    />

  return (
    <Table>
      <TableHeader displaySelectAll={props.displaySelectAll}>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Time</TableHeaderColumn>
          <TableHeaderColumn>Location</TableHeaderColumn>
          <TableHeaderColumn>Magnitude</TableHeaderColumn>
          <TableHeaderColumn>More Info</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={props.displayRowCheckbox}>
        <TableRow>
          <TableRowColumn style={{ paddingLeft: '70px'}}>{props.id}</TableRowColumn>
          <TableRowColumn>
            <Moment format="MMMM DD, YYYY @ HH:mm">
              {props.time}
            </Moment>
          </TableRowColumn>
          <TableRowColumn style={{ paddingLeft: '75px'}}>{props.location}</TableRowColumn>
          <TableRowColumn style={{ paddingLeft: '65px'}}>{props.magnitude}</TableRowColumn>
          <TableRowColumn>
            <RaisedButton label="Details" style={{ margin: 12 }} onClick={props.handleOpen}/>
            <Dialog
              title="Lat & Long"
              actions={action}
              modal={false}
              open={props.open}
              onRequestClose={props.handleClose}
            >
              Latitude and Longitude will display here
            </Dialog>
          </TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default QuakeTile;
