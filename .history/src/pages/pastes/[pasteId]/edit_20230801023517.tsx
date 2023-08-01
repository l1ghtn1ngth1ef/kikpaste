import { Suspense } from "react";
import { Routes } from "@blitzjs/next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery, useMutation, useState, useEffect } from "@blitzjs/rpc";
import { useParam } from "@blitzjs/next";

import Layout from "src/core/layouts/Layout";
import { UpdatePasteSchema } from "src/pastes/schemas";
import getPaste from "src/pastes/queries/getPaste";
import updatePaste from "src/pastes/mutations/updatePaste";
import { PasteForm, FORM_ERROR } from "src/pastes/components/PasteForm";

export const EditPaste = () => {
  const router = useRouter();
  const pasteId = useParam("pasteId", "number");
  const [paste, { setQueryData }] = useQuery(
    getPaste,
    { id: pasteId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  );
  const [updatePasteMutation] = useMutation(updatePaste);

  return (
    <>
      <Head>
        <title>Edit Paste {paste.id}</title>
      </Head>

      <div>
        <h1>Edit Paste {paste.id}</h1>
        <pre>{JSON.stringify(paste, null, 2)}</pre>
        <Suspense fallback={<div>Loading...</div>}>
          <PasteForm
            submitText="Update Paste"
            schema={UpdatePasteSchema}
            initialValues={paste}
            onSubmit={async (values) => {
              try {
                const updated = await updatePasteMutation({
                  id: paste.id,
                  ...values,
                });
                await setQueryData(updated);
                await router.push(
                  Routes.ShowPastePage({ pasteId: updated.id })
                );
              } catch (error: any) {
                console.error(error);
                return {
                  [FORM_ERROR]: error.toString(),
                };
              }
            }}
          />
        </Suspense>
      </div>
    </>
  );
};

const EditPastePage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditPaste />
      </Suspense>

      <p>
        <Link href={Routes.PastesPage()}>Pastes</Link>
      </p>
    </div>
  );
};

EditPastePage.authenticate = true;
EditPastePage.getLayout = (page) => <Layout>{page}</Layout>;

export default EditPastePage;
