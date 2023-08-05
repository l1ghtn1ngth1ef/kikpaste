/* eslint-disable react-hooks/rules-of-hooks */
import { Routes } from "@blitzjs/next"
import Link from "next/link"
import router, { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"
import Layout from "src/core/layouts/Layout"
import { CreatePasteSchema } from "src/pastes/schemas"
import createPaste from "src/pastes/mutations/createPaste"
import { Suspense } from "react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import { useState, useEffect } from "react"
import Loadable from "react-loadable"
import { stringify } from "flatted"
import React from "react"
import ReactDOM from "react-dom"

import { Form, FormProps } from "src/core/components/Form"
import { PasteForm, FORM_ERROR } from "src/pastes/components/PasteForm"
import { LabeledTextField } from "src/core/components/LabeledTextField"
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document"

// @ts-check
function NewPastePage() {

  const router = useRouter();const [CreatePasteMutation] = useMutation(createPaste);

  const handleSubmit = async (values) => {
    const paste = await CreatePasteMutation(values);await router.push(Routes.ShowPastePage({pasteId: paste.id}));console.log("Pressed Button!");
  }

  const inputHandler = (event, editor) => {
  }

  return (
    <div className="Submit">
      <div>
        <Form onSubmit={handleSubmit}>
          <LabeledTextField name="pasteName" label="Data Name" placeholder="Data Name" type="text"/>
          <LabeledTextField name="pasteDescription" label="Data Desc" placeholder="Data Desc" type="text"/>
          <LabeledTextField name="pasteContent" label="Paste Content" placeholder="Paste Content"type="text"/>

          {/* template: <__component__ name="__fieldName__" label="__Field_Name__" placeholder="__Field_Name__"  type="__inputType__" /> */}

          <div>

            <CKEditor id="inputText" editor={DecoupledEditor} onChange={inputHandler} schema={CreatePasteSchema}
              onSubmit={async (values) => {const data = editor.getData();setTextEditor(data)}}
            />
          </div>
          <button type="submit">Submit!</button>
        </Form>
      </div>
    </div>
  )
}

export default NewPastePage