import { Routes } from "@blitzjs/next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMutation } from "@blitzjs/rpc";
import Layout from "src/core/layouts/Layout";
import { CreatePasteSchema } from "src/pastes/schemas";
import createPaste from "src/pastes/mutations/createPaste";
import { PasteForm, FORM_ERROR } from "src/pastes/components/PasteForm";
import { Suspense } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import React, { useState, useEffect } from "react";

const NewPastePage = ({name, onSubmit, values}) => {
  const router = useRouter();
  const [createPasteMutation] = useMutation(createPaste);
 const self = "";
  return (
    <Layout title={"Create New Paste"}>
      <h1>Create New Paste</h1>
      <Suspense fallback={<div>Loading...</div>}>
      <CKEditor
          submitText="Create Paste"
          schema={CreatePasteSchema}
          // initialValues={{}}
          onSubmit={async (values) => {
            try {
              const paste = await createPasteMutation(values);
              await router.push(Routes.ShowPastePage({ pasteId: paste.id }));
            } catch (error: any) {
              console.error(error);
              return {
                [FORM_ERROR]: error.toString(),
              };
            }
          }}
        />
      </Suspense>
      <p>
        <Link href={Routes.PastesPage()}>Pastes</Link>
      </p>
    </Layout>
  );
};

NewPastePage.authenticate = true;

export default NewPastePage;
