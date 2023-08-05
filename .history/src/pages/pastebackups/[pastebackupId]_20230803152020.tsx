import { Suspense } from "react";
import { Routes } from "@blitzjs/next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@blitzjs/rpc";
import { useParam } from "@blitzjs/next";

import Layout from "src/core/layouts/Layout";
import getPastebackup from "src/pastebackups/queries/getPastebackup";
import deletePastebackup from "src/pastebackups/mutations/deletePastebackup";

export const Pastebackup = () => {
  const router = useRouter();
  const pastebackupId = useParam("pastebackupId", "number");
  const [deletePastebackupMutation] = useMutation(deletePastebackup);
  const [pastebackup] = useQuery(getPastebackup, { id: pastebackupId });

  return (
    <>
      <Head>
        <title>Pastebackup {pastebackup.id}</title>
      </Head>

      <div>
        <h1>Pastebackup {pastebackup.id}</h1>
        <pre>{JSON.stringify(pastebackup, null, 2)}</pre>

        <Link
          href={Routes.EditPastebackupPage({ pastebackupId: pastebackup.id })}
        >
          Edit
        </Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deletePastebackupMutation({ id: pastebackup.id });
              await router.push(Routes.PastebackupsPage());
            }
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

const ShowPastebackupPage = () => {
  return (
    <div>
      <p>
        <Link href={Routes.PastebackupsPage()}>Pastebackups</Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Pastebackup />
      </Suspense>
    </div>
  );
};

ShowPastebackupPage.authenticate = true;
ShowPastebackupPage.getLayout = (page) => <Layout>{page}</Layout>;

export default ShowPastebackupPage;
