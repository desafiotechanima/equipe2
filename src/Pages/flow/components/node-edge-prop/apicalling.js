import React, {Component} from 'react';
export class apicalling extends Component {
    constructor(props) {
        super(props)
        this.state ={
            element:props.element,
            updateNodeCb:props.updateNodeCb,
            clicked:'dataprop',
            rowChip:(props.element&&props.element.data.rowChip)||[{image:"",text:"",description:""}],
            theme:"light",
            language:"javascript",
            isEditorReady:false
        };
        this.updateText1 = this.updateText1.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if(!this.state.element){
            this.setState({
                element:nextProps.element,
                updateNodeCb:nextProps.updateNodeCb,
                clicked:'dataprop',
                rowChip:(nextProps.element&&nextProps.element.data.rowChip)||[{image:"",text:"",description:""}]

            });

            console.log('nextProps',nextProps);
        }
    }

    componentWillUpdate(prevProps, prevState){
        if(prevProps.element&&this.state.element&&(prevProps.element.id!==this.state.element.id)){
            this.setState({
                element:prevProps.element,
                updateNodeCb:prevProps.updateNodeCb,
                clicked:'dataprop',
                rowChip:(prevProps.element&&prevProps.element.data.rowChip)||[{image:"",text:"",description:""}]

            });
        }
        
        console.log('nextPropswill',prevProps,prevState,this.state);
    }
    handleInputChange (e, index){
        const { name, value } = e.target;
        const list = [...this.state.rowChip];
        list[index][name] = value;
        this.setState({rowChip:list});
        if(this.state.element.data.subtype==='suggestionchip'||this.state.element.data.subtype==='carousel'){
            let a = {rowChip:list};
            let obj = Object.assign({}, this.state.element.data, a);
            this.setState({element:{...this.state.element,data:{...obj}}}); 
        }
      };
     
      // handle click event of the Remove button
    handleRemoveClick(index){
        const list = [...this.state.rowChip];
        list.splice(index, 1);
        this.setState({rowChip:list});
      };
     
      // handle click event of the Add button
    handleAddClick() {
        this.setState({rowChip:[...this.state.rowChip, { image: "", text: "",description:"" }]});
      };

    _handleClick(evt){
        this.setState({clicked:evt.target.id})
    }

    _handleClickClose(evt){
        console.log('clled');
        this.setState({clicked:'dataprop',element:null})
    }
        
    handlerChange(evt){
        
        if(evt.target.id==='id_label'){
        this.setState({element:{...this.state.element,label:evt.target.value,data:{...this.state.element.data,label:evt.target.value}}});
        }else{
            let a = {};
            a[evt.target.id]=evt.target.value;
            
            var obj = Object.assign({}, this.state.element.data, a);
            
            this.setState({element:{...this.state.element,data:{...obj}}}); 
        }
    }
    updateText1 (evt) {
        // this.setState({clicked:true});
        if(this.state.element){
            
           console.log('called');
            console.log('inside',this.state.element);
            let elemetOld = this.props.element;
            let newLabel = this.state.element;
            this.setState({element:newLabel});
            
            this.state.updateNodeCb(elemetOld,newLabel,(elemetOld.data.type==='node'?0:1));
            
        }else{
            console.log('empty',this.props);
        }
        this.setState({element:null});
        

        return true
    }
    handleChangeSpace(e) {
        if (e.key === " ") {
            e.preventDefault();
          }
      };
    handleChange(e){
        let a = {};
        a[e.target.id]=e.target.value;
        
        var obj = Object.assign({}, this.state.element.data, a);
        console.log(obj);
        this.setState({element:{...this.state.element,data:{...obj}}}); 
        // this.setState({selectValue:e.target.value});
    }
    handleEditorDidMount() {
        this.setState({isEditorReady:true});
      }
    render() {
        return (
            <div id="propwrap" className={(this.state.element&&this.state.element.data)?"itson":""}>
                    <div id="properties" className={(this.state.element&&this.state.element.data)?"expanded":''}>
                        <div id="close" onClick={this._handleClickClose.bind(this)}>
                            <img src="assets/close.svg" alt="close"/>
                        </div>
                        <p id="header2">Properties</p>
                        <div id="propswitch">
                            <div id="dataprop" className={this.state.clicked==='dataprop' ? 'navactive side' : "navdisabled side"} onClick={this._handleClick.bind(this)}>Data</div>
                            <div id="alertprop" className={this.state.clicked==='alertprop' ? 'navactive side' : "navdisabled side"} onClick={this._handleClick.bind(this)}>Configuration</div>
                            <div id="logsprop" className={this.state.clicked==='logsprop' ? 'navactive side' : "navdisabled side"} onClick={this._handleClick.bind(this)}>Logs</div>
                        </div>
                        <div className={this.state.clicked==='dataprop' ? 'proplist' : "proplist hidden"}>
                        <p className="inputlabel">Type</p>
                        <select className="dropme" id="api_type"
                            value={(this.state.element&&this.state.element.data&&this.state.element.data.api_type)||'POST'} 
                            onChange={this.handleChange.bind(this)} 
                        >
                            <option value="GET">GET</option>
                            <option value="POST">POST</option>
                        </select>
                            <p className="inputlabel">URL</p>
                            <input className="dropme" id='url' type="text" value={(this.state.element&&this.state.element.data&&(this.state.element.data.url))||''} onChange={this.handlerChange.bind(this)}/>
                            <p className="inputlabel">Request Json</p>
                            <input className="dropme" id='request_json' type="text" value={(this.state.element&&this.state.element.data&&(this.state.element.data.request_json))||''} onChange={this.handlerChange.bind(this)}/>
                            <p className="inputlabel">API Response Value</p>
                            <input className="dropme" id='response_json' type="text" value={(this.state.element&&this.state.element.data&&(this.state.element.data.response_json))||''} onChange={this.handlerChange.bind(this)}/>
                            <p className="inputlabel">API Response Status Code</p>
                            <input className="dropme" id='response_status' type="text" value={(this.state.element&&this.state.element.data&&(this.state.element.data.response_status))||''} onChange={this.handlerChange.bind(this)}/>
                            
                            {/* <p className="inputlabel">Check properties</p>
                            {JSON.stringify(this.state.element)}
                            <div className="dropme">All<img src="assets/dropdown.svg" alt="all"/></div>
                            <div className="checkus"><img src="assets/checkon.svg" alt="checkon"/><p>Log on successful performance</p></div>
                            <div className="checkus"><img src="assets/checkoff.svg" alt="checkoff"/><p>Give priority to this block</p></div> */}
                        </div>
                        <div className={this.state.clicked==='alertprop' ? 'proplist' : "proplist hidden"}>
                            <p className="inputlabel">Name</p>
                            <input className="dropme" id='var_name' type="text" value={(this.state.element&&this.state.element.data&&(this.state.element.data.var_name||this.state.element.id))||''} onChange={this.handlerChange.bind(this)}/>
                            
                            <div className="checkus"><p></p></div>
                                
                        </div>
                        <div className={this.state.clicked==='logsprop' ? 'proplist' : "proplist hidden"}>
                            <div>
                            {/* <Editor
                                height="490vh" // By default, it fully fits with its parent
                                theme={this.state.theme}
                                language={this.state.language}
                                value={'Place code here'}
                                name="editor"
                                editorDidMount={this.handleEditorDidMount.bind(this)}
                                onChange={e => this.handleInputChange(e, 'editor')}
                                loading={"Loading..."}
                            /> */}
                            </div>
                        </div>
                        <div id="divisionthing"></div>
                        <div id="Saveblock" onClick={this.updateText1.bind(this)}>Save</div>
                    </div>
                </div>
        );
    }
    
}
export default apicalling