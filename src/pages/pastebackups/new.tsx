import { Routes } from "@blitzjs/next"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"
import Layout from "src/core/layouts/Layout"
import { CreatePastebackupSchema } from "src/pastebackups/schemas"
import createPastebackup from "src/pastebackups/mutations/createPastebackup"
import { PastebackupForm, FORM_ERROR } from "src/pastebackups/components/PastebackupForm"
import { Suspense } from "react"

const NewPastebackupPage = () => {
  const router = useRouter()
  const [createPastebackupMutation] = useMutation(createPastebackup)

  return (
    <Layout title={"Create New Pastebackup"}>
      <h1>Create New Pastebackup</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PastebackupForm
          submitText="Create Pastebackup"
          schema={CreatePastebackupSchema}
          // initialValues={{}}
          onSubmit={async (values) => {
            try {
              const pastebackup = await createPastebackupMutation(values)
              await router.push(Routes.ShowPastebackupPage({ pastebackupId: pastebackup.id }))
            } catch (error: any) {
              console.error(error)
              return {
                [FORM_ERROR]: error.toString(),
              }
            }
          }}
        />
      </Suspense>
      <p>
        <Link href={Routes.PastebackupsPage()}>Pastebackups</Link>
      </p>
    </Layout>
  )
}

NewPastebackupPage.authenticate = true

export default NewPastebackupPage
