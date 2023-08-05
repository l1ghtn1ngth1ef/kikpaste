import { Routes } from "@blitzjs/next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMutation } from "@blitzjs/rpc";
import Layout from "src/core/layouts/Layout";
import { CreateProjectSchema } from "src/projects/schemas";
import createProject from "src/projects/mutations/createProject";
import { ProjectForm, FORM_ERROR } from "src/projects/components/ProjectForm";
import { Suspense } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { CKEditor } from "@ckeditor/ckeditor5-react"

const NewProjectPage = () => {
  const router = useRouter();
  const [createProjectMutation] = useMutation(createProject);

  return (
    <Layout title={"Create New Project"}>
      <h1>Create New Project</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <CKEditor
                  editor={ClassicEditor}
                  onReady={(editor) => {
                    const data = editor.getData()
                    console.log("CEditor Form Loaded Successfully!")
                  }}
        
                  onChange={(event, editor) => {
                    const data = editor.getData()
                    console.log("CKEditor5 Input Detected Successfully!")
                  }} //
          submitText="Create Project"
          schema={CreateProjectSchema}
>
          // initialValues={{}}
          onSubmit={async (values) => {
            try {
              const project = await createProjectMutation(values);
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
        <Link href={Routes.ProjectsPage()}>Projects</Link>
      </p>
    </Layout>
  );
};

NewProjectPage.authenticate = true;

export default NewProjectPage;
