import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import axios from "axios"
import { useState } from "react"
import dynamic from "next/dynamic"
import { useQuery } from "@blitzjs/rpc"
import createPaste from "src/pastes/mutations/createPaste"
import { useMutation } from "@blitzjs/rpc"

// yarn add axios @ckeditor/ckeditor5-build-classic @ckeditor/ckeditor5-react

const ClientComponent = dynamic(() => import("../components/TextEditor"), {
  ssr: false,
})

function TextEditor() {
  const [textEditor, setTextEditor] = useState("")
  const data = {
    textEditor: textEditor,
  }

handleSubmit = async event =>  {
    event.preventDefault()
    const [createPasteMutation] = useQuery(createPaste)
    console.log("handleSubmit Submitted!")
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
