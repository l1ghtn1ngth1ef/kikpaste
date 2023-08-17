import { useRef } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import DecoupledEditor from 'ckeditor5-custom-build/build/ckeditor';

const Editor = () => {
    const editorRef = useRef(null);

    return (
        <CKEditor
            editor={DecoupledEditor}
            data="<p>Hello from CKEditor 5!</p>"
            style={{ height: 500 }}
            config={{
                codeBlock: {
                    languages: [
                        { language: 'plaintext', label: 'Plain text' },
                        { language: 'c', label: 'C' },
                        { language: 'cs', label: 'C#' },
                        { language: 'cpp', label: 'C++' },
                        { language: 'css', label: 'CSS' },
                        { language: 'diff', label: 'Diff' },
                        { language: 'html', label: 'HTML' },
                        { language: 'java', label: 'Java' },
                        { language: 'javascript', label: 'JavaScript' },
                        { language: 'php', label: 'PHP' },
                        { language: 'python', label: 'Python' },
                        { language: 'ruby', label: 'Ruby' },
                        { language: 'typescript', label: 'TypeScript' },
                        { language: 'xml', label: 'XML' }
                    ]
                }
            }}
            onReady={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
                editor.ui.getEditableElement().parentElement.insertBefore(
                    editor.ui.view.toolbar.element,
                    editor.ui.getEditableElement()
                );
                editorRef.current = editor;
            }}
            onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
                console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
                console.log('Focus.', editor);
            }}

            onError={(error, { willEditorRestart }) => {
                // If the editor is restarted, the toolbar element will be created once again.
                // The `onReady` callback will be called again and the new toolbar will be added.
                // This is why you need to remove the older toolbar.
                if (willEditorRestart) {
                    if (editorRef.current) {
                        editorRef.current.ui.view.toolbar.element.remove();
                    }
                }
            }}
        />
    )
}

export default Editor