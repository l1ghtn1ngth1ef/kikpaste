import { Routes } from "@blitzjs/next"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"
import Layout from "src/core/layouts/Layout"
import { CreatePasteSchema } from "src/pastes/schemas"
import createPaste from "src/pastes/mutations/createPaste"
import { PasteForm, FORM_ERROR } from "src/pastes/components/PasteForm"
import { Suspense } from "react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import { useState, useEffect } from "react"
var colors = require('colors');

const NewPastePage = () => {
  useEffect(() => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, []);

  const router = useRouter()
  const [createPasteMutation] = useMutation(createPaste)
  const [textEditor, setTextEditor] = useState("")

  const data = {
    textEditor: textEditor,
  }

  const handleSubmit = async (values) => {
    values.preventDefault()
    console.log(values)
    try {
      const paste = await createPasteMutation(values)
      await router.push(Routes.ShowPastePage({ pasteId: paste.id }))
    } catch (error) {
      alert("Error saving project")
    }
    console.log("Form Lodgement Submitted!")
  }

  return (
    
    <Layout title={"Create New Paste"}>
      <h1>Create New Paste</h1>
      <Suspense fallback={<div>Loading...</div>}>
      <form style={{display: "block", width: "50%", maxHeight : "50%", margin: "0px auto"}}>
          <CKEditor
            editor={ClassicEditor}
            submitText="Create Paste"
            schema={CreatePasteSchema}
            // initialValues={{}}
            onReady={(editor) => {
              const data = editor.getData()
              console.log("CEditor Form Loaded Successfully!")
            }}
            onChange={(event, editor) => {
              const data = editor.getData()
              setTextEditor(data)
              console.log("CKEditor5 Input Detected Successfully!")
            }}
            onSubmit={async (values) => {
              console.log("Testing Form Submission with Content!" .rainbow)
              try {
                const paste = await createPasteMutation(values)
                await router.push(Routes.ShowPastePage({ pasteId: paste.id }))
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
      </Suspense>
      <p>
        <Link href={Routes.PastesPage()}>Pastes</Link>
      </p>
    </Layout>
  )
}

NewPastePage.authenticate = true

export default NewPastePage
