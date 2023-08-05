// @ts-nocheck
import { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { usePaginatedQuery } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import Layout from "src/core/layouts/Layout"
import getPastebackups from "src/pastebackups/queries/getPastebackups"

const ITEMS_PER_PAGE = 100

export const PastebackupsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ pastebackups, hasMore }] = usePaginatedQuery(getPastebackups, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <ul>
        {pastebackups.map((pastebackup) => (
          <li key={pastebackup.id}>
            <Link
              href={Routes.ShowPastebackupPage({
                pastebackupId: pastebackup.id,
              })}
            >
              {pastebackup.name}
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
  )
}

const PastebackupsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Pastebackups</title>
      </Head>

      <div>
        <p>
          <Link href={Routes.NewPastebackupPage()}>Create Pastebackup</Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <PastebackupsList />
        </Suspense>
      </div>
    </Layout>
  )
}

export default PastebackupsPage
