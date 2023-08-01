import getProject from "src/projects/queries/getProject"
import { gSP } from "src/blitz-server"

export const getStaticProps = gSP(async ({ params, ctx }) => {
  const project = await getProject({
    where: { id: context.params?.projectId },
  })
  return { props: { project } }
})

function ProjectPage({ project }) {
  return <div>{project.name}</div>
}

export default ProjectPage