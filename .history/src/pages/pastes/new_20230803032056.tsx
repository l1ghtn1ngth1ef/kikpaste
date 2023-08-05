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
import { Formik, Form, Field, ErrorMessage } from 'formik';
var colors = require("colors")

// @ts-check

const NewPastePage = (props) => {


}

return (
  <Layout title={"Create New Paste"}>

<div>
        <button onClick={this.handleClick}>Click</button>
        {this.state.modal && <PopUp handleClick={this.handleClick} />}
        <div className="document-editor">
          <div className="document-editor__toolbar" />
          <div className="document-editor__editable-container">
            <CKEditor
              editor={DecoupledEditor}
              data="<p>Hello from CKEditor 5!</p>"
              onInit={editor => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor.state);
                window.editor = editor;

                // Add these two lines to properly position the toolbar
                const toolbarContainer = document.querySelector(
                  ".document-editor__toolbar"
                );
                toolbarContainer.appendChild(editor.ui.view.toolbar.element);
              }}
            />
          </div>
        </div>
      </div>

  </Layout>

)
}
NewPastePage.authenticate = true

export default NewPastePage

