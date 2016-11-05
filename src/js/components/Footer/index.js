import React from 'react';

import style from './style.less';

export default class Footer extends React.Component {
  componentWillMount() {
    style.use();
  }

  componentWillUnount() {
    style.unuse();
  }

  render() {
    return (
      <div>
        <div className="ui inverted verticle footer segment">
          <div className="ui container">
            <div className="ui stackable inverted divided equal height stackable grid">
              <div className="three wide column">
                <div className="ui inverted link list">
                  <a href="#" className="item">Sitemap</a>
                  <a href="#" className="item">Contact Us</a>
                  <a href="#" className="item">Benefits and Services</a>
                  <a href="#" className="item">Special Offers</a>
                </div>
              </div>
              <div className="three wide column">
                <div className="ui inverted link list">
                  <a href="#" className="item">Accessible Banking</a>
                  <a href="#" className="item">Help</a>
                  <a href="#" className="item">Careers</a>
                  <a href="#" className="item">Privacy & Security</a>
                </div>
              </div>
              <div className="three wide column">
                <div className="ui inverted link list">
                  <a href="#" className="item">Locations</a>
                  <a href="#" className="item">Rewards</a>
                  <a href="#" className="item">Mortgage</a>
                  <a href="#" className="item">Lending</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui container grid centered">
          <div className="four wide column">
            Copyright &copy; 2016 KBS LLC
          </div>
        </div>
      </div>
    );
  }
}
