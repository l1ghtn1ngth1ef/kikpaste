/* eslint-disable react-hooks/rules-of-hooks */
import React from "react"
import Link from "next/link"
import { Suspense } from "react"
import ReactDOM from "react-dom"
import { stringify } from "flatted"
import Loadable from "react-loadable"
import { Routes } from "@blitzjs/next"
import { useState, useEffect } from "react"
import { useMutation } from "@blitzjs/rpc"
import Layout from "src/core/layouts/Layout"
import router, { useRouter } from "next/router"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import { CreatePasteSchema } from "src/pastes/schemas"
import { Form, FormProps } from "src/core/components/Form"
import createPaste from "src/pastes/mutations/createPaste"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { PasteForm, FORM_ERROR } from "src/pastes/components/PasteForm"
import { LabeledTextField } from "src/core/components/LabeledTextField"
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document"
import { useRef } from "react"

// @ts-check
function NewPastePage() {
  const editorRef = useRef()
  const [editorLoaded, setEditorLoaded] = useState(false)
  const { CKEditor, ClassicEditor } = editorRef.current || {}

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, //Added .CKEditor
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    }
    setEditorLoaded(true)
  }, [])

  const [data, setData] = useState("")

  return (
    <>
        {editorLoaded ? (

        <Form onSubmit={handleSubmit}>
        <LabeledTextField name="pasteName" label="Data Name" placeholder="Data Name" type="text"/>
        <LabeledTextField name="pasteDescription" label="Data Desc" placeholder="Data Desc" type="text"/>
        <LabeledTextField name="pasteContent" label="Paste Content" placeholder="Paste Content"type="text"/>

        {/* template: <__component__ name="__fieldName__" label="__Field_Name__" placeholder="__Field_Name__"  type="__inputType__" /> */}
          <div>

        <CKEditor
          editor={ClassicEditor}
          data={data}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor)
          }}
          onChange={(event, editor) => {
            const data = editor.getData()
            setData(data)
          }}
        />
        </div>
          <button type="submit">Submit!</button>
          
      ) : (
        <p>Carregando...</p>
      )}
    </>
  )
}

export default NewPastePage
