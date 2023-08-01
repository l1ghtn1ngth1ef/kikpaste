import { prisma } from "db";

export const getStaticProps = async () => {
  const feed = await prisma.{
      where: { id: 3 },
      include: {
        comments: {
              select: { pasteContent: true },
          },
      },
  });
  return {
      props: { feed },
      revalidate: 10,
  };
}