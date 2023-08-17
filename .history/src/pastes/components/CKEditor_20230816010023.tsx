import { Suspense } from "react"
import { Link as Link1 } from "next/link"
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
const CodeBlock = dynamic(() => import("ckeditor5-custom-build"), {
  ssr: false,
})