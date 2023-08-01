import { prisma } from "db";

export const getStaticProps = async () => {
  const feed = await prisma.pasteId.findMany({
      where: { id: paste.id },
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