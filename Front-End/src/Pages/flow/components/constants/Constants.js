
import TextNode from '../nodes/TextNode';
import MediaNode from '../nodes/MediaNode';
import SuggestionChipsNode from '../nodes/SuggestionChipsNode';
import CarouselChipsNode from '../nodes/CarouselChipsNode';
import Userinput from '../nodes/Userinput';
import StartNode from '../nodes/StartNode';
import ToAgentNode from '../nodes/ToAgentNode';
import ApiCallingNode from '../nodes/ApiCallingNode';
import ScriptNode from '../nodes/ScriptNode';
import StopNode from '../nodes/StopNode';
import Integraçãonode from '../nodes/Braip';

export const NodeTypes = {
   selectorText:TextNode,
   selectorMedia:MediaNode,
   selectorSuggestionChips:SuggestionChipsNode,
   selectorCarouselChips:CarouselChipsNode,
   selectorUserInput: Userinput,
   selectorNodeStart: StartNode,
   selectorToAgent:ToAgentNode,
   selectorApiCalling:ApiCallingNode,
   selectorScriptNode:ScriptNode,
   selectorStop: StopNode,
   selectorIntegração: Integraçãonode,
 }
export const leftPalateConstants = {
    "send":{
       "title":"Bot Send",
       "elements":[
          {
             "label":"Enviar Mensagem",
             "nextNodeHints": "Enviar Mensagem",
             "type":"selectorText",
             "subtype":"text",
             "class":"blockyBlue"
          },
          {
             "label":"Enviar Imagem",
             "description": "Send user a multimedia link",
             "nextNodeHints": "Next should be User Input",
             "type":"selectorMedia",
             "image":"database.svg",
             "subtype":"multimedia",
             "class":"blockyBlue"
          },
          {
             "label":"Menu",
             "nextNodeHints": "Menu de mult seleção",
             "type":"selectorSuggestionChips",
             "subtype":"suggestionchip",
             "image":"time.svg",
             "class":"blockyBlue"
          },
          {
             "label":"Carousel Cips",
             "description": "Send user multiple card options",
             "nextNodeHints": "Next should be User Input",
             "type":"selectorCarouselChips",
             "subtype":"carousel",
             "image":"error.svg",
             "class":"blockyBlue"
          }
       ]
    },
    "action":{
       "title":"Bot Actions",
       "elements":[
          {
             "label":"To Agent",
             "subtype":"toagent",
             "description": "Transfer current conversation to agent",
             "nextNodeHints": "Next node could be anything",
             "type":"selectorToAgent",
             "image":"action.svg",
             "class":"blockyGrey"
          },
          {
             "label":"Api Calling",
             "subtype":"apicalling",
             "description": "GET and POST method allowed. Request and response are json",
             "nextNodeHints": "Next node could be anything",
             "type":"selectorApiCalling",
             "image":"action.svg",
             "class":"blockyGrey"
          },
          {
             "label":"Integração",
             "subtype":"scriptnode",
             "description": "Process input data and set result to output variables",
             "nextNodeHints": "Next node could be anything",
             "type":"selectorScriptNode",
             "image":"action.svg",
             "class":"blockyGrey"
          },
          {
             "label":"Finalizar",
             "subtype":"closenode",
             "description": "Close conversation session",
             "nextNodeHints": "This is a final node of the flow",
             "type":"selectorStop",
             "class":"blockyRed"
          }
       ]
    },
    "integração":{
      "title":"Integração",
      "elements":[
         {
            "label":"To Agent",
            "subtype":"toagent",
            "description": "Transfer current conversation to agent",
            "nextNodeHints": "Next node could be anything",
            "type":"selectorToAgent",
            "image":"action.svg",
            "class":"blockyGrey"
         },
         {
            "label":"Api Calling",
            "subtype":"apicalling",
            "description": "GET and POST method allowed. Request and response are json",
            "nextNodeHints": "Next node could be anything",
            "type":"selectorApiCalling",
            "image":"action.svg",
            "class":"blockyGrey"
         },
         {
            "label":"Integração",
            "subtype":"scriptnode",
            "description": "Process input data and set result to output variables",
            "nextNodeHints": "Next node could be anything",
            "type":"selectorScriptNode",
            "image":"action.svg",
            "class":"blockyGrey"
         },
         {
            "label":"Finalizar",
            "subtype":"closenode",
            "description": "Close conversation session",
            "nextNodeHints": "This is a final node of the flow",
            "type":"selectorStop",
            "class":"blockyRed"
         }
      ]
   }
 };


 export const initialCanvasValue = [
    {
      id:'dndnode_0',
      type:'selectorNodeStart',
      position:{x:-205,y:-89},
      label:'Start',
      data:{
         "label":"Start",
         "subtype":"start",
         "type":"node",
         "class":"blockyGrey"
      }
   },
];

