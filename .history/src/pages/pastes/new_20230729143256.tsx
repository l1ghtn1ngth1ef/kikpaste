import { Routes } from "@blitzjs/next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMutation } from "@blitzjs/rpc";
import Layout from "src/core/layouts/Layout";
import { CreatePasteSchema } from "src/pastes/schemas";
import createPaste from "src/pastes/mutations/createPaste";
import { PasteForm, FORM_ERROR } from "src/pastes/components/PasteForm";
import { Suspense } from "react";

const NewPastePage = () => {
  const router = useRouter();
  const [createPasteMutation] = useMutation(createPaste);

  return (
    <Layout title={"Create New Paste"}>
      <div style={{display: "block", margin: "0px auto"}}><Image src="../../public/logo/png" /></div>
      <h1>Create New Paste</h1>
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
