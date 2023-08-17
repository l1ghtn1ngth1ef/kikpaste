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
// @ts-check

var colors = require("colors")
import { stringify } from "flatted"

const NewPastePage = (props) => {
  if (typeof window === "undefined") {
    /* we're on the server */

    const handleSubmit = async (values) => {
      values.preventDefault()

    const router = useRouter()
    const [textEditor, setTextEditor] = useState("")
    const data = {textEditor: textEditor}

      console.log("Form Lodgement Submitted!")
    }
  }

  return (
    <Layout title={"Create New Paste"}>
      <h1>Create New Paste</h1>
      <form>
        <CKEditor

          editor={ClassicEditor}

          schema={CreatePasteSchema}
          // initialValues={{}}

          onReady={(editor) => {
            const data = editor.getData()
            console.log("CEditor Form Loaded Successfully!")
          }}

          onChange={(event, editor) => {
            const data = editor.getData()
            console.log("CKEditor5 Input Detected Successfully!")
          }} //

          o
              return {
                [FORM_ERROR]: error.toString(),
              }
            }
          }}
        />

        <button type="submit">Submit</button>

      </form>

      <p>
        <Link href={Routes.PastesPage()}>Pastes</Link>
      </p>

    </Layout>
  )
}

NewPastePage.authenticate = true

export default NewPastePage