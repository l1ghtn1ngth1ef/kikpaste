import { Suspense } from "react"
import Layout from "src/core/layouts/Layout"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"
import logout from "src/auth/mutations/logout"
import { useMutation } from "@blitzjs/rpc"
import { Routes, BlitzPage } from "@blitzjs/next"
import styles from "src/styles/Home.module.css"
import dynamic from "next/dynamic"
import db from "db"
import TextEditor from "src/pastes/components/CKEditor"
import { useEffect, useState, useRef } from "react"
import { PasteForm } from "src/pastes/components/PasteForm"
import { createPaste } from "src/pastes/mutations/createPaste"
import { CreatePasteSchema } from "src/pastes/schemas"
import { Form, FormProps } from "src/core/components/Form"
import { LabeledTextField } from "src/core/components/LabeledTextField"
import { DecoupledEditor } from "@ckeditor/ckeditor5-build-decoupled-document"
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor"
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import ContextBase from '@ckeditor/ckeditor5-core/src/context';


//import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
//import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph'
//import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
//import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'
//import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline'
//import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough'
//import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote'
//import Link from '@ckeditor/ckeditor5-link/src/link'
//import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed'
//import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice'
//import Heading from '@ckeditor/ckeditor5-heading/src/heading'
//import Font from '@ckeditor/ckeditor5-font/src/font'
//import Image from '@ckeditor/ckeditor5-image/src/image'
//import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle'
//import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar'
//import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload'
//import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize'
//import List from '@ckeditor/ckeditor5-list/src/list'
//import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'
//import Table from '@ckeditor/ckeditor5-table/src/table'
//import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar'
//import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation'
//import Indent from '@ckeditor/ckeditor5-indent/src/indent'
//import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock'
//import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter'

import "src/styles/Home.module.css"
const ImageUpload = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const Link = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const Alignment = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const Strikethrough = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const Underline = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const Italic = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const Bold = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const Paragraph = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const ImageStyle = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const Heading = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const Font = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const ImageToolbar = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const TextTransformation = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const TableToolbar = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const Table = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const List = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})

const ImageResize = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const BlockQuote = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const Essentials = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const ClipBoard = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const PasteFromOffice = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const MediaEmbed = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const ClipBoImageUploadard = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const Indent = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const IndentBlock = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const Base64UploadAdapter = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})
const Context = dynamic(() => import("@ckeditor/ckeditor5-react"), {
  ssr: false,
})
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { CommentsRepository, NarrowSidebar, WideSidebar } from '@ckeditor/ckeditor5-comments';
import { CloudServicesCommentsAdapter, PresenceList } from '@ckeditor/ckeditor5-real-time-collaboration';

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
*/

Context.builtinPlugins = [
  CloudServices,
  CloudServicesCommentsAdapter,
  CommentsRepository,
  NarrowSidebar,
  PresenceList,
  WideSidebar
];

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
  const { CKEditor, DecoupledEditor, CKEditorContext, Context } = editorRef.current || {}

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, //Added .CKEditor
      DecoupledEditor: require("@ckeditor/ckeditor5-build-decoupled-document"),
      CKEditorContext: require("@ckeditor/ckeditor5-react").CKEditorContext,

    }
    setEditorLoaded(true)
  }, [])

  const [data, setData] = useState("")

  return (
    <>
      {editorLoaded ? (
        <CKEditorContext context={Context}>
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
                plugins: [
                  Essentials,
                  Paragraph,
                  Bold,
                  Italic,
                  Heading,
                  Indent,
                  IndentBlock,
                  Underline,
                  Strikethrough,
                  BlockQuote,
                  Font,
                  Alignment,
                  List,
                  Link,
                  MediaEmbed,
                  PasteFromOffice,
                  Image,
                  ImageStyle,
                  ImageToolbar,
                  ImageUpload,
                  ImageResize,
                  Base64UploadAdapter,
                  Table,
                  TableToolbar,
                  TextTransformation,
                ],
                toolbar: [
                  "heading",
                  "|",
                  "bold",
                  "italic",
                  "underline",
                  "strikethrough",
                  "|",
                  "fontSize",
                  "fontColor",
                  "fontBackgroundColor",
                  "|",
                  "alignment",
                  "outdent",
                  "indent",
                  "bulletedList",
                  "numberedList",
                  "blockQuote",
                  "|",
                  "link",
                  "insertTable",
                  "imageUpload",
                  "mediaEmbed",
                  "|",
                  "undo",
                  "redo",
                ],
                heading: {
                  options: [
                    {
                      model: "paragraph",
                      view: "p",
                      title: "Paragraph",
                      class: "ck-heading_paragraph",
                    },
                    {
                      model: "heading1",
                      view: "h1",
                      title: "Heading 1",
                      class: "ck-heading_heading1",
                    },
                    {
                      model: "heading2",
                      view: "h2",
                      title: "Heading 2",
                      class: "ck-heading_heading2",
                    },
                    {
                      model: "heading3",
                      view: "h3",
                      title: "Heading 3",
                      class: "ck-heading_heading3",
                    },
                  ],
                },
                fontSize: {
                  options: [
                    9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 27, 29, 31, 33, 35,
                  ],
                },
              },
              alignment: {
                options: ["justify", "left", "center", "right"],
              },
              table: {
                contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
              },
              image: {
                resizeUnit: "px",
                toolbar: [
                  "imageStyle:alignLeft",
                  "imageStyle:full",
                  "imageStyle:alignRight",
                  "|",
                  "imageTextAlternative",
                ],
                styles: ["full", "alignLeft", "alignRight"],
              },
              typing: {
                transformations: {
                  remove: [
                    "enDash",
                    "emDash",
                    "oneHalf",
                    "oneThird",
                    "twoThirds",
                    "oneForth",
                    "threeQuarters",
                  ],
                },
              },
              placeholder: "Click here to start typing",
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
            }}
          />
        </CKEditorContext>
      ) : (
        <p>Carregando...</p>
      )}
    </>
  )
}

export default Home
