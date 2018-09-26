import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Form, FormGroup, FormControl, Button, ControlLabel,
         Alert, Glyphicon, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import moment from 'moment';

import s from './Enrollments.scss';
import withMeta from '../../../core/withMeta';
import Widget from '../../../components/Widget';

import { fetchProgramSlotsForADay } from '../../../actions/gymProgram';
import { enrolGymProgram } from '../../../actions/profile';

class Enrollments extends React.Component {
  static meta = {
    title: 'Program Enrollments',
    description: 'Enrol Gym Programs'
  };

  constructor(props) {
    super(props);
    this.state = {
      open : false,
      clickedGym : this.props.location.state.gym,
      gymId : this.props.location.state.gym.id,
      enrollmentDate: '',
      programId: '',
      slots: '',
      selectedDate : '',
    };
    this.changeEnrollmentDate = this.changeEnrollmentDate.bind(this);
  }

  componentWillMount() {
    
  }

  enrolProgram = (slot) => {
    var requestBody = this.requestBodyForEnrollment(slot);
    console.log('Request body: ', requestBody);
    this.props.dispatch(enrolGymProgram(requestBody, this.state.gymId)).then(() => {
      this.setState({
      });
    });

  }

  requestBodyForEnrollment(slot){
    var startOfDayMillis = moment(new Date(slot.startTime)).startOf('day').valueOf();
    var body = {
        "bookingDates" : [startOfDayMillis],
        "endTime" : slot.endTime,
        "programId" : this.state.programId,
        "startTime" : slot.startTime,
        "subscriptionType" : "DAY"
    }
    return body;
  }

  changeEnrollmentDate = (event, date) => {
    var millis = date.getTime();
    this.props.dispatch(fetchProgramSlotsForADay(this.state.programId, millis)).then(() => {
      this.setState({
        slots : this.props.slots,
        selectedDate : millis
      });
    });

  }

  getSlotsOfProgram = (programId) => {
    this.setState({
      programId: programId,
      open: true,
      slots: '',
      selectedDate: ''
    });
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    var that = this;
    return (
      <div className={s.root}>
        <ol className="breadcrumb">
          <li><span className="text-muted">Search</span></li>
          <li className="active">Enroll Gym Programs</li>
        </ol>
        <Widget title={
              <div>
                <h5 className="mt-0 mb-0">Gym Programs</h5>
              </div>
        }>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Discount</th>
                <th>Max Seats</th>
                <th>Price</th>
                <th>Special Program</th>
                <th>Closed Days In Week</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {this.state.clickedGym.gymPrograms && this.state.clickedGym.gymPrograms.map((gymProgram, index) => (

              <tr key={gymProgram.id}>
                <td>{gymProgram.programName}</td>
                <td>{gymProgram.programDescription}</td>
                <td>{gymProgram.discount}</td>
                <td>{gymProgram.maxSeats}</td>
                <td>{gymProgram.price}</td>
                {gymProgram.isSpecialProgram && <td>&#10004;</td>}
                {!gymProgram.isSpecialProgram && <td>&#10008;</td>}
                <td>{gymProgram.closedDaysInWeek}</td>
                <td>
                  <Button className="btn btn-sm btn-success" type="submit" onClick={this.getSlotsOfProgram.bind(this, gymProgram.id)}>
                      <Glyphicon glyph="eye-open" />
                  </Button>
                </td>
              </tr>
            ))}
            {this.props.gymPrograms && !this.props.gymPrograms.length &&
              <tr>
                <td colSpan="100">No gym programs yet</td>
              </tr>
            }
            {this.props.isFetching &&
              <tr>
                <td colSpan="100">Loading...</td>
              </tr>
            }
            </tbody>
          </table>
        </Widget>

        {this.state.open && 
          <Widget title={
              <div>
                <h5 className="mt-0 mb-0">Enrollments</h5>
                <div className="pull-right mt-n-xs">
                  <a className="fs-md" onClick={this.handleClose.bind(this)}><Glyphicon glyph="remove-circle" /></a>
                </div>
              </div>
          }>
          
          <div>
            <Row controlId="enrFirst">
                <Col componentClass={ControlLabel} sm={1}>
                  Type
                </Col>
                <Col sm={4}>
                  <ButtonGroup className="mb">
                      <Button>DAY</Button>
                      <Button>WEEK</Button>
                      <Button>MONTH</Button>
                      
                  </ButtonGroup>
               </Col>

                <Col componentClass={ControlLabel} sm={2}>
                  Enrollment Date
                </Col>
                <Col sm={2}>
                  <MuiThemeProvider>  
                      <DatePicker defaultDate={new Date()} 
                                  onChange={this.changeEnrollmentDate}
                                  format='DD/MM/YYYY' autoOk/>
                  </MuiThemeProvider> 
                </Col>
            </Row>

            <table className="table table-striped">
            <thead>
              <tr>
                <th>Start</th>
                <th>End</th>
                <th>Max Seats</th>
                <th>Avaiable Seats</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>

            {this.state.slots && this.state.slots.map((slot, index) => (
              <tr key={slot.id}>
                <td>{moment(new Date(slot.startTime)).format('LT')}</td>
                <td>{moment(new Date(slot.endTime)).format('LT')}</td>
                <td>{slot.maxSeats}</td>
                <td>{slot.availableSeats}</td>
                <td>{slot.price}</td>
                <td>{slot.discount}</td>
                <td>
                  <Button className="btn btn-sm btn-success" data-toggle="tooltip" data-placement="bottom" title="Enrol"
                                    type="submit" onClick={this.enrolProgram.bind(this, slot)}>
                      <Glyphicon glyph="plus" />
                  </Button>
                </td>
              </tr>
            ))}
            {this.state.slots && !this.state.slots.length &&
              <tr>
                <td colSpan="100">No slots are found.</td>
              </tr>
            }
            {this.props.isFetching &&
              <tr>
                <td colSpan="100">Loading...</td>
              </tr>
            }
            </tbody>
          </table>

          </div>
          </Widget>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.gym.isFetching,
    slots: state.gymProgram.slots
  };
}

export default connect(mapStateToProps)(withStyles(s)(withMeta(Enrollments)));
