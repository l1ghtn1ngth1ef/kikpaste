import { Suspense } from "react";
import { Routes } from "@blitzjs/next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@blitzjs/rpc";
import { useParam } from "@blitzjs/next";
import Layout from "src/core/layouts/Layout";
import { UpdatePastebackupSchema } from "src/pastebackups/schemas";
import getPastebackup from "src/pastebackups/queries/getPastebackup";
import updatePastebackup from "src/pastebackups/mutations/updatePastebackup";
import {
  PastebackupForm,
  FORM_ERROR,
} from "src/pastebackups/components/PastebackupForm";
export const EditPastebackup = () => {
  const router = useRouter();
  const pastebackupId = useParam("pastebackupId", "number");
  const [pastebackup, { setQueryData }] = useQuery(
    getPastebackup,
    { id: pastebackupId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  );
  const [updatePastebackupMutation] = useMutation(updatePastebackup);

  return (
    <>
      <Head>
        <title>Edit Pastebackup {pastebackup.id}</title>
      </Head>

      <div>
        <h1>Edit Pastebackup {pastebackup.id}</h1>
        <pre>{JSON.stringify(pastebackup, null, 2)}</pre>
        <Suspense fallback={<div>Loading...</div>}>
          <PastebackupForm
            submitText="Update Pastebackup"
            schema={UpdatePastebackupSchema}
            initialValues={pastebackup}
            onSubmit={async (values) => {
              try {
                const updated = await updatePastebackupMutation({
                  // @ts-ignore
                  id: pastebackup.id,
                  ...values,
                });
                await setQueryData(updated);
                await router.push(
                  Routes.ShowPastebackupPage({ pastebackupId: updated.id })
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

const EditPastebackupPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditPastebackup />
      </Suspense>

      <p>
        <Link href={Routes.PastebackupsPage()}>Pastebackups</Link>
      </p>
    </div>
  );
};

EditPastebackupPage.authenticate = true;
EditPastebackupPage.getLayout = (page) => <Layout>{page}</Layout>;

export default EditPastebackupPage;
