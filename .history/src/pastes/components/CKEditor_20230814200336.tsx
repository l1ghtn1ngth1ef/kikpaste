import { useEffect, useState, useRef } from "react";

function TextEditor({ token }) {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  const [data, setData] = useState("");

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      DecoupledEditor: require("@ckeditor/ckeditor5-editor-decoupled"),
      Paragraph: require("@ckeditor/ckeditor5-paragraph/src/paragraph"),
    };
    setEditorLoaded(true);
  }, []);

  return (
    <div className="bg-[#F8F9FA] h-5/7 overflow-y-scroll max-w-6xl mx-auto">
      {editorLoaded ? (
        <CKEditor
          editor={DecoupledEditor}
          data=""
          config={{
            plugins: [Paragraph],
            toolbar: ["bold", "italic"],
          }}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setData(data);
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default TextEditor;