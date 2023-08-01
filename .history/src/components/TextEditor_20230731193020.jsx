import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import axios from "axios";
import dynamic from "next/dynamic"
import { useQuery } from "@blitzjs/rpc"
import createPaste from "src/pastes/mutations/createPaste";
import React, { useState, useEffect, useRef } from 'react'

// yarn add axios @ckeditor/ckeditor5-build-classic @ckeditor/ckeditor5-react
import React, { Component } from 'react';
// When you add the ckeditor5 folder you can import it this way
import Editor from 'ckeditor5-custom-build/build/ckeditor';

const editorConfiguration = {
    toolbar: [ 'bold', 'italic' ]
};

function Editor  ()  {
  return (
    <CKEditor
        editor={ Editor }
        config={ editorConfiguration }
        data="<p>Hello from CKEditor 5!</p>"
        onChange={ ( event, editor ) => {
            const data = editor.getData();
            console.log( { event, editor, data } );
        }
    />
);


export default Editor;

export default Editor;