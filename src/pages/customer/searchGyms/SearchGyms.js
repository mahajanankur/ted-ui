import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Form, FormGroup, FormControl, Button, ControlLabel, Alert, Glyphicon } from 'react-bootstrap';
import Popup from "reactjs-popup";

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import s from './SearchGyms.scss';
import withMeta from '../../../core/withMeta';
import Widget from '../../../components/Widget';
import { searchGyms } from '../../../actions/gym';
import Enrollments from '../customerEnrollments/Enrollments';

class SearchGyms extends React.Component {
  static meta = {
    title: 'SearchGyms',
    description: 'Gym search to enroll.',
  };

  constructor(props) {
    super(props);
    this.state = {
      searchBy: 'pincode',
      open: false,
      page: 0,
      size: 10,
      selectedGym: '',
      mobile: ''
    };
  }

  componentWillMount() {
    //this.props.dispatch(searchGyms());
  }

  searchGymsRequest(event){
    this.props
      .dispatch(searchGyms({ areaPinCode: this.state.pincode,
                             longitude: this.state.longitude,
                             latitude: this.state.latitude,
                             radius: this.state.radius,
                             page: this.state.page,
                             size: this.state.size,
                             searchBy: this.state.searchBy
                })).then(() => {
                    this.setState({
                        gyms: this.props.gym
                    })});
      event.preventDefault();
  }

  setLongitude(event){
    this.setState({ longitude: event.target.value });
  }

  setLatitude(event){
    this.setState({ latitude: event.target.value });
  }

  setRadius(event){
    this.setState({ radius: event.target.value });
  }

  setPincode(event){
    this.setState({ pincode: event.target.value });
  }

  setPage(event){
    this.setState({ page: event.target.value });
  }

  setSize(event){
    this.setState({ size: event.target.value });
  }

  updadateSearchByStateWhileRadioChange(event){
    this.setState({ searchBy : event.target.value });
  }

  handleOpen = (gym) => {
    this.setState({
      open: true,
      selectedGym: gym
    });
  };

  handleClose = () => {
    this.setState({open: false});
  };
 
  render() {
    var that = this;
    return (
      <div className={s.root}>
        <ol className="breadcrumb">
          <li><span className="text-muted">search</span></li>
          <li className="active">gyms</li>
        </ol>
        <h3>Gym Search</h3>
        <Widget title={
              <div>
                <h5 className="mt-0 mb-0">Search <span className="fw-semi-bold">Parameters</span></h5>
              </div>
        }>

        <Form horizontal onSubmit={this.searchGymsRequest.bind(this)}>
                {
                  this.props.message && (
                    <Alert className="alert-sm" bsStyle="info">
                      {this.props.message}
                    </Alert>
                  )
                }

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Search By
                  </Col>
                  <Col sm={6}>
                    <label>
                      <input type="radio" value="pincode" checked={this.state.searchBy === "pincode"}
                             onChange={this.updadateSearchByStateWhileRadioChange.bind(this)}
                      />
                      Pincode
                    </label>
                    <label className={s.customRadioLabel}>
                      <input type="radio" value="latlongs" checked={this.state.searchBy === "latlongs"}
                             onChange={this.updadateSearchByStateWhileRadioChange.bind(this)}
                      />
                      Latlongs
                    </label>
                  </Col>
                </FormGroup>

            {this.state.searchBy != undefined && this.state.searchBy === "latlongs" &&
                <FormGroup controlId="longitude">
                  <Col componentClass={ControlLabel} sm={2}>
                    Longitude
                  </Col>
                  <Col sm={6}>
                    <FormControl type="text" placeholder="longitude" onChange={this.setLongitude.bind(this)}/>
                  </Col>
                </FormGroup>
            }
            {this.state.searchBy != undefined && this.state.searchBy === "latlongs" &&
                <FormGroup controlId="latitude">
                  <Col componentClass={ControlLabel} sm={2}>
                    Latitude
                  </Col>
                  <Col sm={6}>
                    <FormControl type="text" placeholder="latitude" onChange={this.setLatitude.bind(this)}/>
                  </Col>
                </FormGroup>
            }
            {this.state.searchBy != undefined && this.state.searchBy === "latlongs" &&
                <FormGroup controlId="radius">
                  <Col componentClass={ControlLabel} sm={2}>
                    Radius
                  </Col>
                  <Col sm={6}>
                    <FormControl type="text" placeholder="radius" onChange={this.setRadius.bind(this)}/>
                  </Col>
                </FormGroup>
            }

            {this.state.searchBy != undefined && this.state.searchBy === "pincode" &&
                <FormGroup controlId="pincode">
                  <Col componentClass={ControlLabel} sm={2}>
                    Pincode
                  </Col>
                  <Col sm={6}>
                    <FormControl type="text" placeholder="pincode" onChange={this.setPincode.bind(this)}/>
                  </Col>
                </FormGroup>
            }
                
                <FormGroup controlId="page">
                  <Col componentClass={ControlLabel} sm={2}>
                    Page
                  </Col>
                  <Col sm={6}>
                    <FormControl type="text" placeholder="page" value= {this.state.page} onChange={this.setPage.bind(this)} required/>
                  </Col>
                </FormGroup>

                <FormGroup controlId="size">
                  <Col componentClass={ControlLabel} sm={2}>
                    Size
                  </Col>
                  <Col sm={6}>
                    <FormControl type="text" placeholder="size" value= {this.state.size} onChange={this.setSize.bind(this)} required/>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <div className="btn-toolbar pull-right">
                      <Button>
                        Cancel
                      </Button>
                      <Button bsStyle="danger" type="submit">
                        {this.props.isFetching ? 'Searching...' : 'Search'}
                      </Button>
                    </div>
                  </Col>
                </FormGroup>
        </Form>

          <table className="table table-striped">
            <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {this.state.gyms && this.state.gyms.map((gym, index) => (
              <tr key={gym.id}>
                <td>{gym.name}</td>
                <td>{gym.description}</td>
                <td>{gym.contactDetail.address}</td>
                <td>{gym.contactDetail.mobile}</td>

                <td>                    
                    <MuiThemeProvider>
                      <div>
                        <Button className="btn btn-sm btn-success" type="submit" onClick={this.handleOpen.bind(this, gym)}>
                          <Glyphicon glyph="eye-open" />
                        </Button>
                        <Dialog
                          title="Gym Details"
                          actions={[
                                    <FlatButton
                                      label="Cancel"
                                      primary={true}
                                      onClick={this.handleClose}
                                    />,
                                    <FlatButton
                                      label="Submit"
                                      primary={true}
                                      keyboardFocused={true}
                                      onClick={this.handleClose}
                                    />,
                                  ]}
                          modal={false}
                          open={this.state.open}
                          onRequestClose={this.handleClose}
                          autoScrollBodyContent={true}>

                          <div>
                            <Row controlId="first">
                                <Col componentClass={ControlLabel} sm={2}>
                                  Name
                                </Col>
                                <Col sm={4}>
                                  <FormControl type="text" placeholder="name" value={that.state.selectedGym.name} disabled/>
                                </Col>

                                <Col componentClass={ControlLabel} sm={2}>
                                  Description
                                </Col>
                                <Col sm={4}>
                                  <FormControl type="text" placeholder="name" value={that.state.selectedGym.description} disabled/>
                                </Col>
                            </Row>

                           <Row controlId="second">
                                <Col componentClass={ControlLabel} sm={2}>
                                  Mobile
                                </Col>
                                <Col sm={4}>
                                  <FormControl type="text" placeholder="mobile" 
                                      value={that.state.selectedGym.contactDetail !=null ? that.state.selectedGym.contactDetail.mobile : ''} disabled/>
                                </Col>

                                <Col componentClass={ControlLabel} sm={2}>
                                  Email
                                </Col>
                                <Col sm={4}>
                                  <FormControl type="text" placeholder="email" 
                                      value={that.state.selectedGym.contactDetail !=null ? that.state.selectedGym.contactDetail.email : ''} disabled/>
                                </Col>
                            </Row>
                            
                            <Row controlId="third">
                                <Col componentClass={ControlLabel} sm={2}>
                                  Landline
                                </Col>
                                <Col sm={4}>
                                  <FormControl type="text" placeholder="landline" 
                                      value={that.state.selectedGym.contactDetail !=null ? that.state.selectedGym.contactDetail.landline : ''} disabled/>
                                </Col>

                                <Col componentClass={ControlLabel} sm={2}>
                                  Address
                                </Col>
                                <Col sm={4}>
                                  <FormControl type="text" placeholder="address" 
                                      value={that.state.selectedGym.contactDetail !=null ? that.state.selectedGym.contactDetail.address : ''} disabled/>
                                </Col>
                            </Row>

                            <Row controlId="fourth">
                                <Col componentClass={ControlLabel} sm={2}>
                                  Pincode
                                </Col>
                                <Col sm={4}>
                                  <FormControl type="text" placeholder="pincode" value={that.state.selectedGym.areaPinCode} disabled/>
                                </Col>

                                <Col componentClass={ControlLabel} sm={2}>
                                  Closed On
                                </Col>
                                <Col sm={4}>
                                  <FormControl type="text" placeholder="closedOn" value={that.state.selectedGym.closedDaysInWeek} disabled/>
                                </Col>
                            </Row>

                            <Row controlId="fifth">
                                <Col componentClass={ControlLabel} sm={2}>
                                  Latitude
                                </Col>
                                <Col sm={4}>
                                  <FormControl type="text" placeholder="latitude" 
                                      value={that.state.selectedGym.location !=null ? that.state.selectedGym.location.latitude : ''} disabled/>
                                </Col>

                                <Col componentClass={ControlLabel} sm={2}>
                                  Longitude
                                </Col>
                                <Col sm={4}>
                                  <FormControl type="text" placeholder="longitude" 
                                      value={that.state.selectedGym.location !=null ? that.state.selectedGym.location.longitude : ''} disabled/>
                                </Col>
                            </Row>
                          
                          </div>
                        </Dialog>
                        <Link to={{
                                    pathname: '/app/customer/enrollments',
                                    hash: '#the-hash',
                                    state: {gym}

                                  }} 
                              className="btn btn-sm btn-success">Enrol</Link>
                        
                      </div>
                    </MuiThemeProvider>
                </td>
                
              </tr>
            ))}
            {this.props.content && !this.props.posts.content &&
              <tr>
                <td colSpan="100">No posts yet</td>
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.gym.isFetching,
    gym: state.gym.gym,
  };
}

export default connect(mapStateToProps)(withStyles(s)(withMeta(SearchGyms)));
