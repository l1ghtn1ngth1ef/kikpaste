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
  const { CKEditor, DecoupledEditor } = editorRef.current || {}
  const [data, setData] = useState("")

  const router = useRouter();const [CreatePasteMutation] = useMutation(createPaste);
  const [textEditor, setTextEditor] = useState("");

  const handleSubmit = async (values) => {
    const paste = await CreatePasteMutation(values);await router.push(Routes.ShowPastePage({pasteId: paste.id}));console.log("Pressed Button!");
    console.log("Values!", values)
  }

  const inputHandler = (event, editor) => {
  }

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, //Added .CKEditor
      DecoupledEditor: require("@ckeditor/ckeditor5-build-decoupled-document")
    }
    setEditorLoaded(true)
  }, [])

  return (
    <>
        {editorLoaded ? (

        <Form onSubmit={handleSubmit}>
        <LabeledTextField name="pasteName" label="Data Name" placeholder="Data Name" type="text"/>
        <LabeledTextField name="pasteDescription" label="Data Desc" placeholder="Data Desc" type="text"/>
        <LabeledTextField name="pasteContent" label="Paste Content" placeholder="Paste Content"type="text"/>

        {/* template: <__component__ name="__fieldName__" label="__Field_Name__" placeholder="__Field_Name__"  type="__inputType__" /> */}

        <CKEditor
          editor={DecoupledEditor}
          data={data}
          onReady={(editor: any) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor)
          }}
          onChange={(event, editor) => {
            const data = editor.getData()
            setData(data)
            console.log("Values!", values)

            console.log("Data: ", data)
          }}
        />
          <button type="submit">Submit!</button>
          </Form>
      ) : (
        <p>Loading Incredible Website Extension...</p>
      )}
    </>
  )
}

export default NewPastePage
