import { Routes } from "@blitzjs/next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMutation } from "@blitzjs/rpc";
import Layout from "src/core/layouts/Layout";
import { CreateProjectSchema } from "src/projects/schemas";
import createProject from "src/pastes/mutations/createPaste";
import { ProjectForm, FORM_ERROR } from "src/projects/components/ProjectForm";
import { Suspense } from "react";

const NewPastePage = () => {
  const router = useRouter();
  const [createPasteMutation] = useMutation(createProject);

  return (
    <Layout title={"Create New Paste"}>
      <h1>Create New Paste</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectForm
          submitText="Create Paste"
          schema={CreateProjectSchema}
          // initialValues={{}}
          onSubmit={async (values) => {
            try {
              const project = await createPasteMutation(values);
              await router.push(
                Routes.ShowProjectPage({ projectId: project.id })
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
      <p>
        <Link href={Routes.PastePage}>Pastes</Link>
      </p>
    </Layout>
  );
};

NewPastePage.authenticate = true;

export default NewPastePage;
