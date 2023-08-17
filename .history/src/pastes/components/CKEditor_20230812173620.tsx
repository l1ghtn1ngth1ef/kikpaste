import React, { useEffect, useRef } from "react"

function Editor({ onChange, editorLoaded, name, value }) {
  const editorRef = useRef()
  const { CKEditor, ClassicEditor } = editorRef.current || {}

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    }
  }, [])

  return (
    <div>
      {editorLoaded ? (
        <Editor
          name="description"
          onChange={(data) => {
            setData(data)
          }}
          editorLoaded={editorLoaded}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  )
}

export default Editor
