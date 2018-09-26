import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Row, Col, Form, FormGroup, FormControl, Button, ControlLabel, Alert, Image, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import 'moment-timezone';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import moment from 'moment';

import withMeta from '../../../core/withMeta';
import Widget from '../../../components/Widget';
import { fetchPosts } from '../../../actions/posts';
import { fetchGYM } from '../../../actions/gym';
import { fetchProfile, updateProfile } from '../../../actions/profile';

import s from './CustomerDetails.scss';

class CustomerDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id : '',
      firstName : '',
      lastName : '',
      gender : 'Male',
      occupation : '',
      dob : '',
      membershipType : '',
      contactDetail : '',
      email : '',
      mobile : '',
      landline : '',
      address : '',
      lastExcerciseTime : '',
      heartStroke : false,
      highBloodPressure : false,
      lowBloodPressure : false,
      breathingProblem : false,
      backPain : false,
      surgeryInLastSixMonths : false,
      anyMedications : false,
      medicationDetails : '',
      otherProblem : false,
      otherProblemDetails : '',

    };
  }

doUpdateProfile(info) {
    this.props.dispatch(updateProfile({
     contactDetail: {
        address: this.state.address,
        email: this.state.email,
        landline: this.state.landline,
        mobile: this.state.mobile
     },
     dob: this.state.dob,
     firstName: this.state.firstName,
     gender: this.state.gender,
     healthDetails: {
        anyMedications: this.state.anyMedications,
        backPain: this.state.backPain,
        breathingProblem: this.state.breathingProblem,
        heartStroke: this.state.heartStroke,
        highBloodPressure: this.state.highBloodPressure,
        lastExcerciseTime: this.state.lastExcerciseTime,
        lowBloodPressure: this.state.lowBloodPressure,
        medicationDetails: this.state.medicationDetails != null ? (this.state.medicationDetails) : null,
        otherProblemDetails: this.state.otherProblemDetails != null ? (this.state.otherProblemDetails) : null,
        surgeryInLastSixMonths: this.state.surgeryInLastSixMonths
     },
     joinedGymBefore: this.state.joinedGymBefore,
     lastName: this.state.lastName,
     membershipType: this.state.membershipType,
     needInstructor: this.state.needInstructor,
     occupation: this.state.occupation
    }));
    info.preventDefault();
  }
  componentWillMount() {
    this.props.dispatch(fetchProfile()).then(() => {
        this.setState({
            id : this.props.profile.id,
            firstName : this.props.profile.firstName,
            lastName : this.props.profile.lastName,
            gender : this.props.profile.gender != null ? (this.props.profile.gender) : 'Male',
            occupation : this.props.profile.occupation,
            dob : this.props.profile.dob,
            membershipType : this.props.profile.membershipType,
            joinedGymBefore : this.props.profile.joinedGymBefore,
            needInstructor : this.props.profile.needInstructor,
            contactDetail : this.props.profile.contactDetail,
            email : this.props.profile.contactDetail != null ? (this.props.profile.contactDetail.email) : '',
            mobile : this.props.profile.contactDetail != null ? (this.props.profile.contactDetail.mobile) : '',
            landline : this.props.profile.contactDetail != null ? (this.props.profile.contactDetail.landline) : '',
            address : this.props.profile.contactDetail != null ? (this.props.profile.contactDetail.address) : '',
            lastExcerciseTime : this.props.profile.healthDetails != null ? (this.props.profile.healthDetails.lastExcerciseTime) : '',
            heartStroke : this.props.profile.healthDetails != null ? (this.props.profile.healthDetails.heartStroke) : false,
            highBloodPressure : this.props.profile.healthDetails != null ? (this.props.profile.healthDetails.highBloodPressure) : false,
            lowBloodPressure : this.props.profile.healthDetails != null ? (this.props.profile.healthDetails.lowBloodPressure) : false,
            breathingProblem : this.props.profile.healthDetails != null ? (this.props.profile.healthDetails.breathingProblem) : false,
            backPain : this.props.profile.healthDetails != null ? (this.props.profile.healthDetails.backPain) : false,
            surgeryInLastSixMonths : this.props.profile.healthDetails != null ? (this.props.profile.healthDetails.surgeryInLastSixMonths) : false,
            anyMedications : this.props.profile.healthDetails != null ? (this.props.profile.healthDetails.anyMedications) : false,
            medicationDetails : this.props.profile.healthDetails != null ? (this.props.profile.healthDetails.medicationDetails) : null,
            otherProblem : this.props.profile.healthDetails != null ? (this.props.profile.healthDetails.otherProblem) : false,
            otherProblemDetails : this.props.profile.healthDetails != null ? (this.props.profile.healthDetails.otherProblemDetails) : null,
        });
    });
  }

  changeJoinedGymBefore(event) {
    var newValue = false;    
    var flag = event.target.value;
    if (flag == 'true') {
      newValue = true;
    }
    this.setState({ joinedGymBefore: newValue });
  }

  changeNeedInstructor(event) {
    var newValue = false;    
    var flag = event.target.value;
    if (flag == 'true') {
      newValue = true;
    }
    this.setState({
      needInstructor: newValue
    });
  }
  
  changeFirstName(event) {
    this.setState({ firstName: event.target.value });
  }

  changeLastName(event) {
    this.setState({ lastName: event.target.value });
  }

  changeGender(event) {
    this.setState({ gender: event.target.value });
  }

  changeOccupation(event) {
    this.setState({ occupation: event.target.value });
  }

  changeDob = (event, date) => {
    var millis = date.getTime();
    this.setState({ dob: millis });
  }

  changeMembershipType(event) {
    this.setState({ membershipType: event.target.value });
  }

  changeEmail(event) {
    this.setState({ email: event.target.value });
  }

  changeMobile(event) {
    this.setState({ mobile: event.target.value });
  }

  changeLandline(event) {
    this.setState({ landline: event.target.value });
  }

  changeAddress(event) {
    this.setState({ address: event.target.value });
  }

  changeLastExerciseTime(event) {
    this.setState({ lastExcerciseTime: event.target.value });
  }

  changeMedicationDetails(event) {
    this.setState({ medicationDetails: event.target.value });
  }

  changeOtherProblemDetails(event) {
    this.setState({ otherProblemDetails: event.target.value });
  }

  changeHeartStroke(event) {
    var newValue = false;    
    var flag = event.target.value;
    if (flag == 'true') {
      newValue = true;
    }
    this.setState({
      heartStroke: newValue
    });
  }

  changeHighBloodPressure(event) {
    var newValue = false;    
    var flag = event.target.value;
    if (flag == 'true') {
      newValue = true;
    }
    this.setState({
      highBloodPressure: newValue
    });
  }
  
  changeLowBloodPressure(event) {
    var newValue = false;    
    var flag = event.target.value;
    if (flag == 'true') {
      newValue = true;
    }
    this.setState({
      lowBloodPressure: newValue
    });
  }
  
  changeBreathingProblem(event) {
    var newValue = false;    
    var flag = event.target.value;
    if (flag == 'true') {
      newValue = true;
    }
    this.setState({
      breathingProblem: newValue
    });
  }

  changeBackPain(event) {
    var newValue = false;    
    var flag = event.target.value;
    if (flag == 'true') {
      newValue = true;
    }
    this.setState({
      backPain: newValue
    });
  }

  changeSurgeryInLastSixMonths(event) {
    var newValue = false;    
    var flag = event.target.value;
    if (flag == 'true') {
      newValue = true;
    }
    this.setState({
      surgeryInLastSixMonths: newValue
    });
  }

  changeAnyMedications(event) {
    var newValue = false;    
    var flag = event.target.value;
    if (flag == 'true') {
      newValue = true;
    }
    this.setState({
      anyMedications: newValue
    });
  }

  changeOtherProblem(event) {
    var newValue = false;    
    var flag = event.target.value;
    if (flag == 'true') {
      newValue = true;
    }
    this.setState({
      otherProblem: newValue
    });
  }

  render() {
    return (
         <div className={s.root}>
        <ol className="breadcrumb">
          <li><span className="text-muted">Home</span></li>
          <li className="active">Profile</li>
        </ol>
        {this.props.isFetching &&
              <tr>
                <td colSpan="100">Loading...</td>
              </tr>
            } 
        <h2>Profile</h2> 
        <Row>
          <Col sm={8}>
            <Widget
              title={
                <span className="fw-semi-bold">Customer Details</span>
              }
            >
              <Form horizontal onSubmit={this.doUpdateProfile.bind(this)}>
                {
                  this.props.message && (
                    <Alert className="alert-sm" bsStyle="info">
                      {this.props.message}
                    </Alert>
                  )
                }
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    ID
                  </Col>
                  <Col sm={6}>
                    <FormControl disabled type="text" placeholder="id" value={this.state.id} 
                                 required
                                  />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    First Name
                  </Col>
                  <Col sm={6}>
                    <FormControl type="text" placeholder="first name" value={this.state.firstName}
                                 required onChange={this.changeFirstName.bind(this)} 
                                  />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Last Name
                  </Col>
                  <Col sm={6}>
                    <FormControl type="text" placeholder="last name" value={this.state.lastName}
                                 required onChange={this.changeLastName.bind(this)} 
                                  />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Gender
                  </Col>
                  <Col sm={6}>
                    <label>
                      <input type="radio" value="Male" checked={this.state.gender === "Male"}
                             onChange={this.changeGender.bind(this)}
                      />
                      Male
                    </label>
                    <label className={s.customRadioLabel}>
                      <input type="radio" value="Female" checked={this.state.gender === "Female"}
                             onChange={this.changeGender.bind(this)}
                      />
                      Female
                    </label>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Occupation
                  </Col>
                  <Col sm={6}>
                    <FormControl type="text" placeholder="occupation" value={this.state.occupation}
                                 required onChange={this.changeOccupation.bind(this)}
                                  />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    DOB
                  </Col>
                  <Col sm={6}>
                   
                    <MuiThemeProvider>  
                            <DatePicker value={new Date(Number(this.state.dob))}
                                        defaultDate={new Date()} onChange={this.changeDob}
                              />             
                    </MuiThemeProvider> 
                   
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Membership Type
                  </Col>
                  <Col sm={6}>
                    <FormControl type="text" placeholder="membership type" value={this.state.membershipType}
                                 required onChange={this.changeMembershipType.bind(this)}
                                  />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Joined Gym Before
                  </Col>
                  <Col sm={6}>
                    <label>
                      <input type="radio" value='true' checked={this.state.joinedGymBefore}
                             onChange={this.changeJoinedGymBefore.bind(this)}
                      />
                      Yes
                    </label>
                    <label className={s.customRadioLabel}>
                      <input type="radio" value='false' checked={!this.state.joinedGymBefore}
                             onChange={this.changeJoinedGymBefore.bind(this)}
                      />
                      No
                    </label>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Nneed Instructor
                  </Col>
                  <Col sm={6}>
                    <label>
                      <input type="radio" value='true' checked={this.state.needInstructor}
                             onChange={this.changeNeedInstructor.bind(this)}
                      />
                      Yes
                    </label>
                    <label className={s.customRadioLabel}>
                      <input type="radio" value='false' checked={!this.state.needInstructor}
                             onChange={this.changeNeedInstructor.bind(this)}
                      />
                      No
                    </label>
                  </Col>
                </FormGroup>

                <span><u><b>Contact Info</b></u></span>

                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                      E mail
                    </Col>
                    <Col sm={6}>
                      <FormControl type="text" placeholder="email" value={this.state.email}
                              required onChange={this.changeEmail.bind(this)}
                      />
                    </Col>
                </FormGroup>
                    
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                      Mobile
                    </Col>
                    <Col sm={6}>
                      <FormControl type="text" placeholder="mobile" value={this.state.mobile}
                              required onChange={this.changeMobile.bind(this)}
                      />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                      Landline
                    </Col>
                    <Col sm={6}>
                      <FormControl type="text" placeholder="landline" value={this.state.landline}
                              required onChange={this.changeLandline.bind(this)}
                      />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                      Address
                    </Col>
                    <Col sm={6}>
                      <FormControl type="text" placeholder="address" value={this.state.address}
                              required onChange={this.changeAddress.bind(this)}
                      />
                    </Col>
                </FormGroup>
                
               
                    <span><u><b>Health Details</b></u></span>

                    <FormGroup controlId="formHorizontalEmail">
                      <Col componentClass={ControlLabel} sm={2}>
                        Last Excercise Time
                      </Col>
                      <Col sm={6}>
                        <FormControl type="text" placeholder="last excercise time" value={this.state.lastExcerciseTime}
                                     required onChange={this.changeLastExerciseTime.bind(this)}
                                      />
                      </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                          HeartStroke
                        </Col>
                        <Col sm={6}>
                          <label>
                            <input type="radio" value='true' checked={this.state.heartStroke}
                                   onChange={this.changeHeartStroke.bind(this)}
                            />
                            Yes
                          </label>
                          <label className={s.customRadioLabel}>
                            <input type="radio" value='false' checked={!this.state.heartStroke}
                                   onChange={this.changeHeartStroke.bind(this)}
                            />
                            No
                          </label>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                          High Blood Pressure
                        </Col>
                        <Col sm={6}>
                          <label>
                            <input type="radio" value='true' checked={this.state.highBloodPressure}
                                   onChange={this.changeHighBloodPressure.bind(this)}
                            />
                            Yes
                          </label>
                          <label className={s.customRadioLabel}>
                            <input type="radio" value='false' checked={!this.state.highBloodPressure}
                                   onChange={this.changeHighBloodPressure.bind(this)}
                            />
                            No
                          </label>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                          Low Blood Pressure
                        </Col>
                        <Col sm={6}>
                          <label>
                            <input type="radio" value='true' checked={this.state.lowBloodPressure}
                                   onChange={this.changeLowBloodPressure.bind(this)}
                            />
                            Yes
                          </label>
                          <label className={s.customRadioLabel}>
                            <input type="radio" value='false' checked={!this.state.lowBloodPressure}
                                   onChange={this.changeLowBloodPressure.bind(this)}
                            />
                            No
                          </label>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                         Breathing Problem
                        </Col>
                        <Col sm={6}>
                          <label>
                            <input type="radio" value='true' checked={this.state.breathingProblem}
                                   onChange={this.changeBreathingProblem.bind(this)}
                            />
                            Yes
                          </label>
                          <label className={s.customRadioLabel}>
                            <input type="radio" value='false' checked={!this.state.breathingProblem}
                                   onChange={this.changeBreathingProblem.bind(this)}
                            />
                            No
                          </label>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                         Back Pain
                        </Col>
                        <Col sm={6}>
                          <label>
                            <input type="radio" value='true' checked={this.state.backPain}
                                   onChange={this.changeBackPain.bind(this)}
                            />
                            Yes
                          </label>
                          <label className={s.customRadioLabel}>
                            <input type="radio" value='false' checked={!this.state.backPain}
                                   onChange={this.changeBackPain.bind(this)}
                            />
                            No
                          </label>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                         Surgery In Last SixMonths
                        </Col>
                        <Col sm={6}>
                          <label>
                            <input type="radio" value='true' checked={this.state.surgeryInLastSixMonths}
                                   onChange={this.changeSurgeryInLastSixMonths.bind(this)}
                            />
                            Yes
                          </label>
                          <label className={s.customRadioLabel}>
                            <input type="radio" value='false' checked={!this.state.surgeryInLastSixMonths}
                                   onChange={this.changeSurgeryInLastSixMonths.bind(this)}
                            />
                            No
                          </label>
                        </Col>
                    </FormGroup>
                    
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                         Any Medications
                        </Col>
                        <Col sm={6}>
                          <label>
                            <input type="radio" value='true' checked={this.state.anyMedications}
                                   onChange={this.changeAnyMedications.bind(this)}
                            />
                            Yes
                          </label>
                          <label className={s.customRadioLabel}>
                            <input type="radio" value='false' checked={!this.state.anyMedications}
                                   onChange={this.changeAnyMedications.bind(this)}
                            />
                            No
                          </label>
                        </Col>
                    </FormGroup>

                    {this.state.anyMedications &&
                      <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                          Medication Details
                        </Col>
                        <Col sm={6}>
                          <FormControl type="text" placeholder="medication details" value={this.state.medicationDetails}
                                       onChange={this.changeMedicationDetails.bind(this)}
                                        />
                        </Col>
                      </FormGroup>
                    }

                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                         Other Problem
                        </Col>
                        <Col sm={6}>
                          <label>
                            <input type="radio" value='true' checked={this.state.otherProblem}
                                   onChange={this.changeOtherProblem.bind(this)}
                            />
                            Yes
                          </label>
                          <label className={s.customRadioLabel}>
                            <input type="radio" value='false' checked={!this.state.otherProblem}
                                   onChange={this.changeOtherProblem.bind(this)}
                            />
                            No
                          </label>
                        </Col>
                    </FormGroup>

                    {this.state.otherProblem  && 
                      <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                          Other Problem Details
                        </Col>
                        <Col sm={6}>
                          <FormControl type="text" placeholder="other problem details" value={this.state.otherProblemDetails}
                                       onChange={this.changeOtherProblemDetails.bind(this)}
                              />
                        </Col>
                      </FormGroup>
                    }

                    <FormGroup>
                      <Col smOffset={2} sm={10}>
                        <div className="btn-toolbar pull-right">
                          <Button bsStyle="warning">RESET</Button>
                          <Button bsStyle="success" type="submit">
                            {this.props.isFetching ? 'Updating...' : 'UPDATE'}
                          </Button>
                        </div>
                      </Col>
                    </FormGroup>
              </Form>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.profile.isFetching,
    profile: state.profile.profile,
  };
}

export default connect(mapStateToProps)(withStyles(s)(withMeta(CustomerDetails)));
