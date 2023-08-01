import { Suspense } from "react";
import { Routes } from "@blitzjs/next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@blitzjs/rpc";
import { useParam } from "@blitzjs/next";

import Layout from "src/core/layouts/Layout";
import getPaste from "src/pastes/queries/getPaste";
import deletePaste from "src/pastes/mutations/deletePaste";

export const Paste = () => {
  const router = useRouter();
  const pasteId = useParam("pasteId", "number");
  const [deletePasteMutation] = useMutation(deletePaste);
  const [paste] = useQuery(getPaste, { id: pasteId });

  return (
    <>
      <Head>
        <title>Paste Title: {paste.pasteName}</title>
      </Head>

      <div>
        <h1>{paste.pasteName}</h1>
        <pre>{JSON.stringify(paste, null, 2)}</pre>

        <Link href={Routes.EditPastePage({ pasteId: paste.id })}>Edit</Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deletePasteMutation({ id: paste.id });
              await router.push(Routes.PastesPage());
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

const ShowPastePage = () => {
  return (
    <div>
      <p>
        <Link href={Routes.PastesPage()}>Pastes</Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Paste />
      </Suspense>
    </div>
  );
};

ShowPastePage.authenticate = true;
ShowPastePage.getLayout = (page) => <Layout>{page}</Layout>;

export default ShowPastePage;
