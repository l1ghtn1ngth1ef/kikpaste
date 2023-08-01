import { prisma } from "db";

export const getStaticProps = async () => {
  const feed = await prisma.pasteId.findMany({
      where: { id: true },
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