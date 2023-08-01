import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import axios from "axios";
import { useState  } from "react";
import dynamic from "next/dynamic"
import { useQuery } from "@blitzjs/rpc"

// yarn add axios @ckeditor/ckeditor5-build-classic @ckeditor/ckeditor5-react

const ClientComponent = dynamic(() => import("../components/TextEditor"), {
  ssr: false,
})

function TextEditor() {

  const [textEditor, setTextEditor] = useState("");
  
  const data = {
    textEditor: textEditor,
  };

  function handleSubmit(e) {
    e.preventDefault();

    async (values) => {
      try {
        const paste = await createPasteMutation(values);
        await router.push(Routes.ShowPastePage({ pasteId: paste.id }));

      };
  }

  return (
    
    <form onSubmit={handleSubmit}>
      <CKEditor
        editor={ClassicEditor}
        data={textEditor}
        onReady={(editor) => {
          const data = editor.getData();
        }}
        onChange={(event, editor) => { 
          const data = editor.getData();

          setTextEditor(data);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TextEditor;
