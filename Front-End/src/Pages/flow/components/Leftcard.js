import React, {Component} from 'react';
import {leftPalateConstants} from './constants/Constants';



const json = leftPalateConstants;
    
export class Leftcard extends Component {
    constructor(props) {
        super(props)
        this.state ={
            activeClass:'send',
            elemetArray: json,
            elemetOrig: json
        };
        this.filterList = this.filterList.bind(this);
    }
    filterList(event) {
        console.log('Event:', event.target.value)

       
    }
    _handleClick(evt){
        this.setState({activeClass:evt.target.id})
    }
    onDragStart(event, nodeType, title){
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.setData('element', title);
        event.dataTransfer.effectAllowed = 'move';
    };
    render() {
        
        return (
            <div id="leftcard">
                <div id="subnav">
                    {Object.keys(this.state.elemetArray).map((e, i) => {
                    return(<div id={e} key={`menu_`+i} 
                    className={this.state.activeClass===e ? 'navactive side' : "navdisabled side"} 
                    onClick={this._handleClick.bind(this)}>{this.state.elemetArray[e].title}</div> )
                    
                    })}
                </div>
                {Object.keys(this.state.elemetArray).map((e, i) => {
                    return (
                        <div id={`blocklist${++i} ${e}`} key={`menu_compo`+i}  
                        className={this.state.activeClass===e ? 'blocklist' : 'hidden blocklist'}>
                            {this.state.elemetArray[e].elements.map((item, iNested) => {
                            return (
                                <div key={`menu_compo`+i+'_'+iNested} 
                                className="blockelem create-flowy noselect" 
                                onDragStart={(event) => this.onDragStart(event, item.type, JSON.stringify(item))}  draggable>
                                    
                                    <div className="blockin">
                                            <h2>{item.label}</h2>
                                            <img src={item.image} alt="img"></img>
                                           teste
                                    </div>
                                </div>
                                );
                            })}
                        </div>
                    );    
                })}
            </div>
        );
    }
}

export default Leftcard