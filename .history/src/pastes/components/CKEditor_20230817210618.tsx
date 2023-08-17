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
import { CreatePasteSchema } from "src/pastes/schemas"
import { Form, FormProps } from "src/core/components/Form"
import { LabeledTextField } from "src/core/components/LabeledTextField"
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor"
import { CKEditor, CKEditorContext } from "@ckeditor/ckeditor5-react"
import ContextBase from "@ckeditor/ckeditor5-core/src/context"

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
// @ts-ignore
const NewEditor = () => {
  const editorRef = useRef()
  const [editorLoaded, setEditorLoaded] = useState(false)
  // @ts-ignore
  const {
    // @ts-no
    DecoupledEditor,
    ImageUpload,
    Link,
    Alignment,
    Strikethrough,
    Underline,
    Italic,
    Bold,
    Paragraph,
    ImageStyle,
    Heading,
    Font,
    ImageToolbar,
    TextTransformation,
    TableToolbar,
    Table,
    List,
    ImageResize,
    BlockQuote,
    Essentials,
    ClipBoard,
    PasteFromOffice,
    MediaEmbed,
    Indent,
    IndentBlock,
    Base64UploadAdapter,
    Context,
    CodeBlock,
  } = editorRef.current || {}

  // @ts-ignore
  useEffect(() => {
    // @ts-ignore
    editorRef.current = {
      DecoupledEditor: require("/ckeditor/build/ckeditor.js"),
      ImageUpload: require("/ckeditor/build/ckeditor.js"),
      Link: require("/ckeditor/build/ckeditor.js"),
      Alignment: require("/ckeditor/build/ckeditor.js"),
      Strikethrough: require("/ckeditor/build/ckeditor.js"),
      Underline: require("/ckeditor/build/ckeditor.js"),
      Italic: require("/ckeditor/build/ckeditor.js"),
      Bold: require("/ckeditor/build/ckeditor.js"),
      Paragraph: require("/ckeditor/build/ckeditor.js"),
      ImageStyle: require("/ckeditor/build/ckeditor.js"),
      Heading: require("/ckeditor/build/ckeditor.js"),
      Font: require("/ckeditor/build/ckeditor.js"),
      ImageToobar: require("/ckeditor/build/ckeditor.js"),
      TextTransforamtion: require("/ckeditor/build/ckeditor.js"),
      TableToolbar: require("/ckeditor/build/ckeditor.js"),
      Table: require("/ckeditor/build/ckeditor.js"),
      List: require("/ckeditor/build/ckeditor.js"),
      ImageResize: require("/ckeditor/build/ckeditor.js"),
      BlockQuote: require("/ckeditor/build/ckeditor.js"),
      Essentials: require("/ckeditor/build/ckeditor.js"),
      ClipBoard: require("/ckeditor/build/ckeditor.js"),
      PasteFromOffice: require("/ckeditor/build/ckeditor.js"),
      MediaEmbed: require("/ckeditor/build/ckeditor.js"),
      Indent: require("/ckeditor/build/ckeditor.js"),
      IndentBlock: require("/ckeditor/build/ckeditor.js"),
      Base64UploadAdapter: require("/ckeditor/build/ckeditor.js"),
      Context: require("/ckeditor/build/ckeditor.js"),
      CodeBlock: require("/ckeditor/build/ckeditor.js"),
    }
    setEditorLoaded(true)
  }, [])

  const [data, setData] = useState("")

  return (
    <Layout title="Home">
      {editorLoaded ? (
        <CKEditor
          editor={DecoupledEditor}
          data="<p>Hello from CKEditor 5!</p>"
          style={{ height: 500 }}
          config={{
            codeBlock: {
              // @ts-ignore
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
              // @ts-ignore
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
                CodeBlock,
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
              // @ts-ignore
              styles: ["full", "alignLeft", "alignRight"],
            },
            typing: {
              // @ts-ignore
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
          onInit={(editor) => {
            // You can store the "editor" and use when it is needed.
            // console.log("Editor is ready to use!", editor);
            editor.editing.view.change((writer) => {
              writer.setStyle("width", "50%", editor.editing.view.document.getRoot())
            })
          }}
          onReady={(editor) => {
            // @ts-ignore
            // Set the UI
            editor.ui
              .getEditableElement()
              .parentElement.insertBefore(
                editor.ui.view.toolbar.element,
                editor.ui.getEditableElement()
              )
            editor.editing.view.change((writer) => {
              writer.setStyle("width", "100%", editor.editing.view.document.getRoot())
            })
            // You can store the "editor" and use when it is needed.

            console.log("Editor is ready to use!", editor)

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
      ) : (
        <p>Loading Nextjs Component ...</p>
      )}
    </Layout>
  )
}

export default () => <NewEditor />
