import { gSSP } from "src/blitz-server"
import getPaste from "src/pastes/queries/getPaste"

export const getServerSideProps = gSSP(async ({ ctx }) => {
  // IMPORTANT: the second argument to prefetchBlitzQuery must exactly match the second argument to useQuery down below
  await context.prefetchBlitzQuery(getPaste, {
    where: { id: context.params?.projectId },
  })

  return { props: {} }
})

function ProjectPage(props) {
  const [project] = useQuery(getPaste, { where: { id: props.id } })
  return <div>{paste.pastename}</div>
}

export default ProjectPage;