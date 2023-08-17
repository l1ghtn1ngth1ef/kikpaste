import { useRef } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import DecoupledEditor from 'ckeditor5-custom-build/build/ckeditor';

const Editor = () => {
    const editorRef = useRef(null);

    return (
        <CKEditor />
    )
}

export default Editor