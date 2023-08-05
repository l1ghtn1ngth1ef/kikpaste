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

var colors = require("colors")
// @ts-check

const NewPastePage = (props) => {
  const handleSubmit = async (values) => {
    console.log(stringify(values))

    const [createPasteMutation] = useMutation(createPaste)
    const paste = await updatePasteMutation(values)

  }
  return (
    <Layout title={"Create New Paste"}>

      <h1>Create New Paste</h1>
      <form onSubmit={handleSubmit}>
        <CKEditor

          editor={ClassicEditor}
          data="Well well well ..."
          schema={CreatePasteSchema}

onSubmit={async (values: any) => {
            console.log("Testing Form Submission with Content!")

            try {
              const [textEditor, setTextEditor] = useState("")
              const data = {textEditor: textEditor}
              const paste = await updatePasteMutation(values)

              await router.push(Routes.ShowPastePage({ pasteId: paste.id }))
              console.log(stringify(values))

            } catch (error: any) {
              console.log(error)

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

