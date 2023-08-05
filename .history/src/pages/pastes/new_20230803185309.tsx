/* eslint-disable react-hooks/rules-of-hooks */
import { Routes } from "@blitzjs/next"
import Link from "next/link"
import router, { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"
import Layout from "src/core/layouts/Layout"
import { CreatePasteSchema } from "src/pastes/schemas"
import createPaste from "src/pastes/mutations/createPaste"
import { PasteForm, FORM_ERROR } from "src/pastes/components/PasteForm"
import { Suspense } from "react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import { useState, useEffect } from "react"
import Loadable from "react-loadable"
import { stringify } from "flatted"
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document"
import React from "react"
import ReactDOM from "react-dom"
import { Form, Field } from "react-final-form"
import createPastebackup from "src/pastebackups/mutations/createPastebackup"

var colors = require("colors")

// @ts-check
function NewPastePage() {
  const [data, setData] = React.useState("")
  const router = useRouter()
  const [CreatePasteMutation] = useMutation(createPastebackup)

  const handleSubmit = async (event, values) => {
    console.log(editor.getData(values))

    event.preventDefault()

    console.log("Tried!")
    console.log("Values!", stringify(values))

    const paste = await CreatePasteMutation(values)
    await router.push(Routes.ShowPastePage({ pasteId: paste.id }))

    // Define your onSubmit function here
    // ...
    console.log("Pressed Button!")
  }

  const inputHandler = (event, editor) => {
    console.log(editor.getData())
    // Define your onSubmit function here
    // ...
    // for example, setData() here
  }

  return (
    <div className="Submit">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <CKEditor
              id="inputText"
              editor={DecoupledEditor}
              onChange={inputHandler}
              submitText="Create Paste"
              schema={CreatePasteSchema}
              onSubmit={async (any, values) => {
                const data = editor.getData()
                setTextEditor(data)
              }}
            />
          </div>
          <button type="submit">Submit!</button>
        </form>
      </div>
    </div>
  )
}

export default NewPastePage
