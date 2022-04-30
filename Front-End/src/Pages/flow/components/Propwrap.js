import React, {Component, lazy, Suspense } from 'react';
// import Editor from "@monaco-editor/react";
import EdgeProp from "./node-edge-prop/edge";
export class Propwrap extends Component {
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

    updateText1 (elemetOld,newLabel,type) {
        // this.setState({clicked:true});
        if(this.state.element){
          
            this.setState({element:newLabel});
            
            this.state.updateNodeCb(elemetOld,newLabel,type);
            
        }else{
            console.log('empty',this.props);
        }
        this.setState({element:null});
        

        return true
    }
    render() {
        if(this.state.element&&this.state.element.data){
            
            if(this.state.element&&this.state.element.data.type === 'edge') {
                return (<EdgeProp element={this.state.element} updateNodeCb={this.updateText1}
                />)
            }else{
                const DynamicComponent = lazy(() => import(`./node-edge-prop/${this.state.element.data.subtype}`));
                return (
                    <Suspense fallback={<div>Loading...</div>}>
                        <DynamicComponent element={this.state.element} updateNodeCb={this.updateText1} />
                    </Suspense>
                )
            }
        }else{
            return(
                <></>
            )
        }
        }
        
}
export default Propwrap