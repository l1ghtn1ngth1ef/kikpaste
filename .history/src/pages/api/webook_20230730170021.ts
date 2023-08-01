import { prisma } from "db";

export const getStaticProps = async () => {
  const feed = await prisma.paste.findMany({
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