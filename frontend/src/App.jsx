import { useState,useRef } from 'react'
import './App.css'
import Editor from "@monaco-editor/react"
import * as Y from "yjs"
import { WebrtcProvider } from "y-webrtc"
import {MonacoBinding} from "y-monaco"


function App() {
  const editorRef = useRef(null);
  
  function handleEditorChange(value, event) {
    return value
  }

  function handleEditorDidMount(editor, monaco) {
    
      editorRef.current = editor;
      
        
      const doc = new Y.Doc()

      const provider = new WebrtcProvider( 'test-room', doc,{
          signaling: ['wss://signaling.yjs.dev/',
    'wss://y-webrtc-eu.fly.dev/',
    'wss://y-webrtc-us.fly.dev/'], 
    })
      const type = doc.getText("monaco")
      const binding = new MonacoBinding(type, editorRef.current.getModel(), new Set([editorRef.current]), provider.awareness)
      
    }
    
  function handleEditorChange(value, event) {
    console.log("current model value", value)
  }
  return (
    <div style = {{height:"90vh", border:"1px solid black", width:"90vw"}}>

      <Editor defaultLanguage="javascript" theme="vs-dark" defaultValue="//some comment" onMount={handleEditorDidMount}  onChange={handleEditorChange} />
      
     </div> 
  
  
   )
}

export default App
