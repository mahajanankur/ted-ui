import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Row, Col, Form, FormGroup, FormControl, Button, ControlLabel,
         Alert, Glyphicon, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  EventCalendar from 'react-event-calendar';
import Widget from '../../components/Widget';
import { fetchUniqueTags, fetchTedByTagName } from '../../actions/ted';

import s from './Dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0, 
      size: 10,
      sortByDate: false,
      sortByViews: false
    };
  }

  componentWillMount() {
    this.props.dispatch(fetchUniqueTags()).then(() => {
        this.setState({
          tags: this.props.tags
        });
    });
  }

  submitTags(event){
    this.props.dispatch(fetchTedByTagName(
        {
          sortByDate: this.state.sortByDate,
          sortByViews: this.state.sortByViews,
          page: this.state.page,
          size: this.state.size,
          tag: this.state.selectedTag
        }
      )).then(() => {
        this.setState({
          teds: this.props.teds
        });
    });
    event.preventDefault();
  }

  changeTags = (selected) => {
    console.log("Selected : ", selected.value);
    this.setState({ selectedTag : selected.value});
  }

  formatTags(data){
    var tagData = [];
    if (data) {
      for (var i = 0; i < data.length; i++) {
        var id = data[i];
        var name = data[i];
        var map = { value: id, label: name };
        tagData.push(map);
      }
    }
    return tagData;
  }

  render() {
    return (
      <div className={s.root}>
        <h1 className="mb-lg">Ted Dashboard</h1>
        <Row>
          <Col sm={12}>
            <Widget title={
              <div>
                <h5 className="mt-0"><Glyphicon glyph="search" className="mr-xs opacity-70"/>Teds</h5>
              </div>
            }>
              <Form horizontal onSubmit={this.submitTags.bind(this)}>
              {
                this.props.message && (
                  <Alert className="alert-sm" bsStyle="info">
                    {this.props.message}
                  </Alert>
                )
              }
              
              <FormGroup controlId="formHorizontal">
                  <Col componentClass={ControlLabel} sm={1}>
                    Tags
                  </Col>
                  <Col sm={6}>
                  <Select
                       options={this.formatTags(this.state.tags)}
                       className="basic-select"
                       classNamePrefix="select"
                       onChange={this.changeTags}/>
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
          </Col>
        </Row>


        <Row>
          <Col sm={12}>
            <Widget title={
              <div>
                <div className="pull-right mt-n-xs">
                  <input type="search" placeholder="Search..." className="form-control input-sm" />
                </div>
                <h5 className="mt-0"><Glyphicon glyph="user" className="mr-xs opacity-70"/> Teds</h5>
              </div>
            }>
              <table className="table mb-0">
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Event</th>
                  <th>Speaker</th>
                  <th>Title</th>
                  <th>Views</th>
                  <th>URL</th>
                </tr>
                </thead>
                
                <tbody>

                  {this.state.teds && this.state.teds.map((ted, index) => (
                    <tr key={ted.name}>
                      <td>{ted.name}</td>
                      <td>{ted.description}</td>
                      <td>{ted.event}</td>
                      <td>{ted.mainSpeaker}</td>
                      <td>{ted.title}</td>
                      <td>{ted.views}</td>
                      <td><a href={ted.url}>URL</a></td>
                    </tr>
                  ))}
                  {this.state.teds && !this.state.teds.length &&
                    <tr>
                      <td colSpan="100">No Teds are found.</td>
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
          </Col>
          <Col sm={6}>
            
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.ted.isFetching,
    tags: state.ted.tags,
    teds: state.ted.teds,
  };
}

export default connect(mapStateToProps)(withStyles(s)(Dashboard));
