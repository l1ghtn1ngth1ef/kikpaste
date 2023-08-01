import { Suspense } from "react";
import { Routes } from "@blitzjs/next";
import Head from "next/head";
import Link from "next/link";
import { usePaginatedQuery } from "@blitzjs/rpc";
import { useRouter } from "next/router";
import Layout from "src/core/layouts/Layout";
import getPastes from "src/pastes/queries/getPastes";

const ITEMS_PER_PAGE = 100;

export const PastesList = () => {
  const router = useRouter();
  const page = Number(router.query.page) || 0;
  const [{ pastes, hasMore }] = usePaginatedQuery(getPastes, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  });

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } });
  const goToNextPage = () => router.push({ query: { page: page + 1 } });

  return (
    <div>
      <ul>
        {pastes.map((paste) => (
          <li key={paste.id}>
            <Link href={Routes.ShowPastePage({ pasteId: paste.id })}>
              {paste.i}
            </Link>
          </li>
        ))}
      </ul>

      <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        Next
      </button>
    </div>
  );
};

const PastesPage = () => {
  return (
    <Layout>
      <Head>
        <title>Pastes</title>
      </Head>

      <div>
        <p>
          <Link href={Routes.NewPastePage()}>Create Paste</Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <PastesList />
        </Suspense>
      </div>
    </Layout>
  );
};

export default PastesPage;
