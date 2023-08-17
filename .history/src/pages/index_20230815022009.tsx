import { Suspense } from "react"
import Link from "next/link"
import Layout from "src/core/layouts/Layout"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"
import logout from "src/auth/mutations/logout"
import { useMutation } from "@blitzjs/rpc"
import { Routes, BlitzPage } from "@blitzjs/next"
import styles from "src/styles/Home.module.css"
import dynamic from "next/dynamic"
import db from "db"
import { useEffect, useState, useRef } from "react"
import { PasteForm } from "src/pastes/components/PasteForm"
import { createPaste } from "src/pastes/mutations/createPaste"
import { CreatePasteSchema } from "src/pastes/schemas"
import { Form, FormProps } from "src/core/components/Form"
import { LabeledTextField } from "src/core/components/LabeledTextField"
import DecoupledEditor from "ckeditor/build/ckeditor"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <>
        <button
          className={styles.button}
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </button>
        <div>
          User id: <code>{currentUser.id}</code>
          <br />
          User role: <code>{currentUser.role}</code>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Link href={Routes.SignupPage()} className={styles.button}>
          <strong>Sign Up</strong>
        </Link>
        <Link href={Routes.LoginPage()} className={styles.loginButton}>
          <strong>Login</strong>
        </Link>
      </>
    )
  }
}

const Home: BlitzPage = () => {
  const editorRef = useRef()
  const [editorLoaded, setEditorLoaded] = useState(false)
  const { CKEditor, DecoupledEditor } = editorRef.current || {}

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, //Added .CKEditor
      DecoupledEditor: require("ckeditor/build/ckeditor"),
    }
    setEditorLoaded(true)
  }, [])

  const [data, setData] = useState("")

  return (
    {editorLoaded ? 
      <CKEditor
      editor={DecoupledEditor}
      data="<p>Hello from CKEditor 5!</p>"
      style={{ height: 500 }}
      config={{
        codeBlock: {
          languages: [
            { language: "plaintext", label: "Plain text" },
            { language: "c", label: "C" },
            { language: "cs", label: "C#" },
            { language: "cpp", label: "C++" },
            { language: "css", label: "CSS" },
            { language: "diff", label: "Diff" },
            { language: "html", label: "HTML" },
            { language: "java", label: "Java" },
            { language: "javascript", label: "JavaScript" },
            { language: "php", label: "PHP" },
            { language: "python", label: "Python" },
            { language: "ruby", label: "Ruby" },
            { language: "typescript", label: "TypeScript" },
            { language: "xml", label: "XML" },
          ],
        },
      }}
      onReady={(editor) => {
        // You can store the "editor" and use when it is needed.
        console.log("Editor is ready to use!", editor)
        editor.ui
          .getEditableElement()
          .parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
          )

        editorRef.current = editor
      }}
      onChange={(event, editor) => {
        const data = editor.getData()
        console.log({ event, editor, data })
      }}
      onBlur={(event, editor) => {
        console.log("Blur.", editor)
      }}
      onFocus={(event, editor) => {
        console.log("Focus.", editor)
      }}
      onError={(error, { willEditorRestart }) => {
        // If the editor is restarted, the toolbar element will be created once again.
        // The `onReady` callback will be called again and the new toolbar will be added.
        // This is why you need to remove the older toolbar.
        if (willEditorRestart) {
          if (editorRef.current) {
            editorRef.current.ui.view.toolbar.element.remove()
          }
        }
      
      /> : <p>Carregando...</p>
  
      )
      }
}

export default Home
