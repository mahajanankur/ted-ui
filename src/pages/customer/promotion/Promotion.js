import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Row, Col, Form, FormGroup, FormControl, Button, ControlLabel, Alert, Image, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import withMeta from '../../../core/withMeta';
import Widget from '../../../components/Widget';
import { fetchPromotion } from '../../../actions/promotion';

import s from './Promotion.scss';

class Promotion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {
    this.props.dispatch(fetchPromotion());
  }

  render() {
    return (
      <div className={s.root}>
        <ol className="breadcrumb">
          <li><span className="text-muted">Home</span></li>
          <li className="active">Promotions</li>
        </ol>
        <Widget title={
              <div>
                <h5 className="mt-0 mb-0">My Promotions</h5>
              </div>
        }>
          <table className="table table-striped">
            <thead>
            <tr>
              <th>Code</th>
              <th>Description</th>
              <th>Active</th>
              <th>Discount</th>
              <th>Expire On</th>
              <th>Usages</th>
              
            </tr>
            </thead>
            <tbody>
            {this.props.promotions && this.props.promotions.map((promotion, index) => (
              <tr key={promotion.id}>
                <td>{promotion.code}</td>
                <td>{promotion.descriptions}</td>
                {promotion.active && <td>&#10004;</td>}
                {!promotion.active && <td>&#10008;</td>}
                {promotion.fixedDiscount && <td>&#8377;{promotion.fixedDiscount}</td>}
                {!promotion.fixedDiscount && <td>{promotion.discountPercentage}%</td>}
                <td>{new Date(promotion.activeTill).toLocaleDateString("en-US")}</td>
                <td>{promotion.redemptionPerUser}</td>
              </tr>
            ))}
            {this.props.promotions && !this.props.promotions.length &&
              <tr>
                <td colSpan="100">No promotions linked with this user.</td>
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
    isFetching: state.promotion.isFetching,
    promotions: state.promotion.promotion
  };
}

export default connect(mapStateToProps)(withStyles(s)(withMeta(Promotion)));