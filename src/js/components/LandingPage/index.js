import $ from 'jquery';
import React from 'react';
import { withRouter } from 'react-router';
import ReactTransitionGroup from 'react-addons-transition-group';

import style from './style.less';
import Header from '../Header';
import Footer from '../Footer';
import fdicSrc from 'images/fdic.resized.png';
import verisignSrc from 'images/verisign.resized.jpg';
import trusteeSrc from 'images/trustee.resized.jpg';

class LandingPageTransition extends React.Component {
  static propTypes = {
    router: React.PropTypes.object
  };

  static defaultPros = {
    router: { push() {} }
  };

  render() {
    return (
      <ReactTransitionGroup>
        <LandingPage router={this.props.router} />
      </ReactTransitionGroup>
    );
  }
}

class LandingPage extends React.Component {
  static propTypes = {
    router: React.PropTypes.object
  };

  static defaultPros = {
    router: { push() {} }
  };

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

  componentWillAppear(callback) {
    try {
      $(this.refs.landingPage)
        .transition({
          animation: 'fade in',
          duration: '500ms',
          onComplete() {
            callback();
          }
        });
    } catch(e) {
      console.error(e);
    }
  }

  redirectToDashboard() {
    this.props.router.push('/dashboard');
  }

  render() {
    return (
      <div className="app row ui grid">
        <div className="sixteen wide column">
          <div className="landingPage" ref="landingPage">
            <div className="landingPage__header inverted ui large top fixed hidden menu row">
                <div className="landingPage__title container left floated column">
                  <Header />
                </div>
            </div>
            <div className="landingPage__content container ui grid very relaxed three column">
              <div className="column">
                <div className="ui raised segment">
                  <p>50% APY</p>
                  <p>No Fees, No Minimums</p>
                  <p>Mobile Check Deposit</p>
                  <p>FDIC Insured</p>
                </div>
              </div>
              <div className="column">
                <div className="ui raised segment">
                  <p>Nation Wide ATM Access</p>
                  <p>24/7 Online Access</p>
                  <p>Free Debit Card</p>
                  <p>50 Free Checks</p>
                </div>
              </div>
              <div className="column">
                <div className="landingPage__loginButton right floated column">
                  <h3> Kustomer Banking Systems </h3>
                  <p> Your one stop shop for all your banking needs. </p>
                  <button className="ui primary button" onClick={this.redirectToDashboard}>Try Demo</button>
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
        </div>
        <div className="sixteen wide column">
          <Footer />
        </div>
      </div>
    );
  }
}

export { LandingPageTransition };
export { LandingPage };
export default withRouter(LandingPage);
