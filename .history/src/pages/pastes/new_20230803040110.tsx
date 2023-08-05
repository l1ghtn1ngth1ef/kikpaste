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
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import "src/styles/ckeditor.css"

var colors = require("colors")

// @ts-check
NewPastePage() 

const [data, setData] = React.useState('');
const handleSubmit = (event) => {
    event.preventDefault();
    // Define your onSubmit function here
    // ...
};

const inputHandler = (event, editor) => {
    console.log(editor.getData());
    // Define your onSubmit function here
    // ...
    // for example, setData() here

};

return(
    <div className="Sumbit">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <CKEditor
              id="inputText"
              editor={ClassicEditor}
              onChange={inputHandler}
            />
          </div>
        </form>
      </div>
    </div>
)
}