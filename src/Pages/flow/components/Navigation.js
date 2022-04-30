import React, {Component} from 'react';
import {Popup} from './popup'
export class Navigation extends Component {
  constructor(props) {
      super(props)
      this.state ={
          updateNodeCb: props.publishClick,
          configUpdate: props.configUpdate,
          showPopup: false
      };
  }
  _download (evt) {
    this.state.updateNodeCb();

    return true
}
togglePopup() {
  this.setState({
    showPopup: !this.state.showPopup
  });
}
 
    render() {
        // eslint-disable-next-line
        return (
         
          <div id="navigation" className="flex">
                <a 
                 href="#/"
                onClick={this.togglePopup.bind(this)} > 
                  <img src="https://img.icons8.com/color/50/000000/add--v1.png" alt="img"/>
                </a>
            
                <a  
                 href="#/"
                onClick={this._download.bind(this)}> 
                <img src="https://img.icons8.com/ios/50/000000/download--v1.png" alt="img"/>
                </a>
        
            {this.state.showPopup ? 
              <Popup
                text='Close Me'
                configUpdate={this.state.configUpdate}
                closePopup={this.togglePopup.bind(this)}
              />
              : null
            }
          </div>
        );
    }
}
export default Navigation