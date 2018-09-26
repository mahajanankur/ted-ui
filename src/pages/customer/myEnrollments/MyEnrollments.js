import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Form, FormGroup, FormControl, Button, ControlLabel,
         Alert, Glyphicon, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import Select from 'react-select';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import BigCalendar from 'react-big-calendar-like-google';
import moment from 'moment';

import s from './MyEnrollments.scss';
import withMeta from '../../../core/withMeta';
import Widget from '../../../components/Widget';
import { fetchCustomerEnrollments } from '../../../actions/profile';

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const sort = [
  { value: 'desc', label: 'DESC' },
  { value: 'asc', label: 'ASC' }
];

class MyEnrollments extends React.Component {
  static meta = {
    title: 'My Enrollments',
    description: 'Get all enrollments'
  };

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      size: 10,
      sortOrder: 'desc'
    }
  }

  componentWillMount() {
  }

  getCustomerEnrollments(event) {
    this.props.dispatch(fetchCustomerEnrollments(
        {
          from: this.state.from,
          to: this.state.to,
          sort: this.state.sortOrder,
          page: this.state.page,
          size: this.state.size
        })).then(() => {
          this.setState({
            myEnrollments : this.props.enrollment
        });
    });
    event.preventDefault();
  }

  formatBigCalanderData(data) {
    var enrollments = data;
    var formattedData = [];
    for (var i = 0; i < enrollments.length; i++) {
        formattedData.push({ 
              id: enrollments[i].id,
              start: moment(new Date(enrollments[i].startTime)).toDate(),
              end: moment(new Date(enrollments[i].endTime)).toDate(),
              title: enrollments[i].programName
            });
    }
    return formattedData;
  }

  changeDateFrom = (event, date) => {
    var millis = date.getTime();
    this.setState({ from: millis });
  }

  changeDateTo = (event, date) => {
    var millis = date.getTime();
    this.setState({ to: millis });
  }

  setPage(event){
    this.setState({ page: event.target.value });
  }

  setSize(event){
    this.setState({ size: event.target.value });
  }

  enrollmentDetails(info) {
    console.log(info);
    return alert(info.title);
  }

  render() {
    var that = this;
    return (
      <div className={s.root}>
        <ol className="breadcrumb">
          <li><span className="text-muted">Home</span></li>
          <li className="active">MyEnrollments</li>
        </ol>
        <Widget title={
              <div>
                <h5 className="mt-0 mb-0">My Enrollments</h5>
              </div>
        }>
          <Form horizontal onSubmit={this.getCustomerEnrollments.bind(this)}>
              {
                this.props.message && (
                  <Alert className="alert-sm" bsStyle="info">
                    {this.props.message}
                  </Alert>
                )
              }
              
              <FormGroup controlId="size">
                  <Col componentClass={ControlLabel} sm={2}>
                    Start
                  </Col>
                  <Col sm={6}>
                    <MuiThemeProvider>  
                      <DatePicker onChange={this.changeDateFrom} autoOk />
                    </MuiThemeProvider>
                  </Col>
              </FormGroup>

              <FormGroup controlId="size">
                  <Col componentClass={ControlLabel} sm={2}>
                    End
                  </Col>
                  <Col sm={6}>
                    <MuiThemeProvider>  
                      <DatePicker onChange={this.changeDateTo} autoOk />
                    </MuiThemeProvider>
                  </Col>
              </FormGroup>

              <FormGroup controlId="page">
                  <Col componentClass={ControlLabel} sm={2}>
                    Page
                  </Col>
                  <Col sm={6}>
                    <FormControl type="text" placeholder="page" value= {this.state.page} 
                                  onChange={this.setPage.bind(this)} required/>
                  </Col>
                </FormGroup>

                <FormGroup controlId="size">
                  <Col componentClass={ControlLabel} sm={2}>
                    Size
                  </Col>
                  <Col sm={6}>
                    <FormControl type="text" placeholder="size" value= {this.state.size} 
                                  onChange={this.setSize.bind(this)} required/>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <div className="btn-toolbar pull-right">
                      <Button>
                        Cancel
                      </Button>
                      <Button bsStyle="danger" type="submit">
                        {this.props.isFetching ? 'Searching...' : 'Submit'}
                      </Button>
                    </div>
                  </Col>
                </FormGroup>
          </Form>
                
        </Widget>

        <Widget title={
              <div>
                <h5 className="mt-0 mb-0">My Enrollments</h5>
              </div>
        }>
          <div>
            {this.state.myEnrollments &&
              <BigCalendar
                popup
                selectable
                events={this.formatBigCalanderData(this.state.myEnrollments)}
                startAccessor='start'
                endAccessor='end'
                onSelectEvent={event => this.enrollmentDetails(event)} />
            }
          </div>
        </Widget>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.profile.isFetching,
    enrollment: state.profile.enrollments
  };
}

export default connect(mapStateToProps)(withStyles(s)(withMeta(MyEnrollments)));
