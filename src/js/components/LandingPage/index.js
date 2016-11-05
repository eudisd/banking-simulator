import $ from 'jquery';

import React from 'react';
import { withRouter } from 'react-router';

import style from './style.less';
import Header from '../Header';

import fdicSrc from 'images/fdic.resized.png';
import verisignSrc from 'images/verisign.resized.jpg';
import trusteeSrc from 'images/trustee.resized.jpg';

export default withRouter(class LandingPage extends React.Component {
  static propTypes = {
    router: React.PropTypes.object
  };

  static defaultPros = {
    router: { push() {} }
  }

  constructor(props) {
    super(props);

    this.redirectToDashboard = this.redirectToDashboard.bind(this);
  }

  componentWillMount() {
    style.use();
  }

  componentWillUnmount() {
    style.unuse();
  }

  componentDidMount() {
    $(this.refs.modal).modal('show');
  }

  redirectToDashboard() {
    this.props.router.push('/dashboard');
  }

  render() {
    return (
      <div className="landingPage">
        <div className="landingPage__header inverted ui large top fixed hidden menu row">
            <div className="landingPage__title kbs-white container left floated ">
              <h1>Kustomer Banking Systems</h1>
            </div>
            <div className="landingPage__loginButton right floated column">
              <button className="ui inverted button" onClick={this.redirectToDashboard}>Login As Guest</button>
            </div>
        </div>

        <div className="landingPage__content container ui grid very relaxed three column">
          <div className="centered column">
            <div className="ui segment">
              <a className="ui blue ribbon label">Features</a>
              <p>
                <br />
                50% APY
              </p>

              <p>
                No Fees, No Minimums
              </p>

              <p>
                Mobile Check Deposit
              </p>

              <p>
                FDIC Insured
              </p>

              <p>
                24/7 Online Access
              </p>

              <p>
                Nation Wide ATM Access
              </p>

              <p>
                Open in Seconds
              </p>
            </div>
          </div>
        </div>
        <div className="landingPage__social ui centered containner grid">
          <div className="three wide column">
            <div className="ui grid">
              <div className="sixteen wide column">
                <i className="facebook f icon"></i>
                <i className="twitter icon"></i>
                <i className="google icon"></i>
                <i className="twitch icon"></i>
                <i className="git icon"></i>
                <i className="reddit icon"></i>
                <i className="pinterest icon"></i>
                <i className="linkedin icon"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="landingPage__security ui centered containner grid">
          <div className="five wide column">
            <div className="ui grid">
              <div className="twelve wide centered column">
                <img className="landingPage__fdic" src={fdicSrc} /> &nbsp;
                <img className="landingPage__verisign" src={verisignSrc} /> &nbsp;
                <img className="landingPage__trustee" src={trusteeSrc} /> &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
