import { Routes } from "@blitzjs/next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMutation } from "@blitzjs/rpc";
import Layout from "src/core/layouts/Layout";
import { CreatePasteSchema } from "src/pastes/schemas";
import createPaste from "src/pastes/mutations/createPaste";
import { PasteForm, FORM_ERROR } from "src/pastes/components/PasteForm";
import { Suspense } from "react";
import { Image } from "react"

const NewPastePage = () => {
  const router = useRouter();
  const [createPasteMutation] = useMutation(createPaste);

  return (
    <Layout title={"Create New Paste"}>
      <h1>Create New Paste</h1>
      <div style={{display: "block", margin: "0px auto"}}><img src="public/logo.png"></img></div>

      <Suspense fallback={<div>Loading...</div>}>
        <PasteForm
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
