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
import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from "react-final-form"
var colors = require("colors")

// @ts-check
function NewPastePage() {
  const [data, setData] = React.useState("")
  const handleSubmit = (event) => {
    event.preventDefault()
    // Define your onSubmit function here
    // ...
    const [createPasteMutation] = useMutation(createPaste)

  }

  const inputHandler = (event, editor) => {
    console.log(editor.getData())
    // Define your onSubmit function here
    // ...
    // for example, setData() here
  }

  return (
    <div className="Sumbit">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewPastePage
