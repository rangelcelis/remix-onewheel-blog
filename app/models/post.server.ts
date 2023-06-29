import type { Post } from "@prisma/client";
import { prisma } from "~/db.server";

export type { Post };

export async function getAllPosts() {
  return prisma.post.findMany({
    select: {
      slug: true,
      title: true,
    },
  });
}

export async function getPost(slug: string) {
  return prisma.post.findUnique({
    where: {
      slug,
    },
  });
}

export const createPost = async (
  post: Pick<Post, "slug" | "title" | "markdown">
) => {
  return prisma.post.create({
    data: post,
  });
};

export const updatePost = async (
  slug: string,
  post: Pick<Post, "slug" | "title" | "markdown">
) => {
  return prisma.post.update({
    data: post,
    where: {
      slug,
    },
  });
};

export const deletePost = async (slug: string) => {
  return prisma.post.delete({
    where: {
      slug,
    },
  });
};
