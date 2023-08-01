import { prisma } from "db";

export const getStaticProps = async () => {
  const feed = await prisma.post.findMany({
      where: { published: true },
      include: {
        comments: {
              select: { content: true },
          },
      },
  });
  return {
      props: { feed },
      revalidate: 10,
  };
}