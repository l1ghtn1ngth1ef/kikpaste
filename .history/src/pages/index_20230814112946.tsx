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
import CKeditor from "src/pastes/components/CKEditor"
import { PasteForm } from "src/pastes/components/PasteForm"
import { Form } from "react-final-form"
import { createPaste } from "src/pastes/mutations/createPaste"
import { CreatePasteSchema } from "src/pastes/schemas"

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
  const [ editorLoaded, setEditorLoaded ] = useState( false )
  const { CKEditor, ClassicEditor} = editorRef.current || {}

  useEffect( () => {
      editorRef.current = {
        CKEditor: require( '@ckeditor/ckeditor5-react' ).CKEditor, //Added .CKEditor
        ClassicEditor: require( '@ckeditor/ckeditor5-build-classic' ),
      }
      setEditorLoaded( true )
  }, [] );
  
const [data, setData] = useState('');

  return( 
      <>
        {editorLoaded ? <CKEditor
            editor={ ClassicEditor }
            data={data}
            onReady={ editor => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);           
            } }
            onChange={ (event, editor ) => {
              const data = editor.getData()
              setData(data);
            } }
        /> : <p>Carregando...</p>}
    </>
  );
}

export default Home
