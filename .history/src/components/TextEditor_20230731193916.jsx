import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import axios from "axios";
import dynamic from "next/dynamic"
import { useQuery } from "@blitzjs/rpc"
import createPaste from "src/pastes/mutations/createPaste";
import React, { useState, useEffect, useRef } from 'react'

// yarn add axios @ckeditor/ckeditor5-build-classic @ckeditor/ckeditor5-react

export default function TextEditor () {
  const editorRef = useRef()
  const [ editorLoaded, setEditorLoaded ] = useState( false )
  const { CKEditor, ClassicEditor } = editorRef.current || {}

  useEffect( () => {
    editorRef.current = {
      CKEditor: require( '@ckeditor/ckeditor5-react' ),
      ClassicEditor: require( '@ckeditor/ckeditor5-build-classic' )
    }
    setEditorLoaded( true )
  }, [] )

  return editorLoaded ? (
    <CKEditor
      editor={ ClassicEditor }
      data='<p>Hello from CKEditor 5!</p>'
      onInit={ editor => {
        // You can store the "editor" and use when it is needed.
        console.log('Editor is ready to use!', editor)
      } }
      onChange={ (event, editor ) => {
        const data = editor.getData()
        console.log( { event, editor, data } )
      } }
    />
  ) : (
    <div>Editor loading</div>
  )
}

