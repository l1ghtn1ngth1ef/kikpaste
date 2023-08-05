import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import axios from "axios"
import { useState } from "react"
import dynamic from "next/dynamic"
import { useQuery } from "@blitzjs/rpc"
import createPaste from "src/pastes/mutations/createPaste"
import { useMutation } from "@blitzjs/rpc"
import { CreatePasteSchema } from "src/pastes/schemas"
import { useRouter } from "next/router"

// yarn add axios @ckeditor/ckeditor5-build-classic @ckeditor/ckeditor5-react

const ClientComponent = dynamic(() => import("../components/TextEditor"), {
  ssr: false,
})

function TextEditor() {
  const [textEditor, setTextEditor] = useState("")
  const [createPasteMutation] = useMutation(createPaste)
  const router = useRouter()

  const data = {
    textEditor: textEditor,
  }

  const handleSubmit = async (values) => {
    values.preventDefault()

    console.log(stringifyvalues)
    try {
      const paste = await createPasteMutation(values)
      await router.push(Routes.ShowPastePage({ pasteId: paste.id }))
    } catch (error) {
      alert("Error saving project")
    }
    console.log("Form Lodgement Submitted!")
  }

  return (
    <form onSubmit={handleSubmit}>
      <CKEditor
        editor={ClassicEditor}
        data={textEditor}
        onReady={(editor) => {
          const data = editor.getData()
          console.log("CEditor Form Loaded Successfully!")
        }}
        onChange={(event, editor) => {
          const data = editor.getData()
          setTextEditor(data)
          console.log("CKEditor5 Input Detected Successfully!")
        }}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default TextEditor
