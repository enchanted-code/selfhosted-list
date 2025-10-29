import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const tags = defineCollection({
    loader: glob({ pattern: "*.json", base: "./src/data/tags" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
    }),
});

const apps = defineCollection({
    loader: glob({ pattern: "*.json", base: "./src/data/apps" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.enum([
            "bookmark",
            "container",
            "dashboard",
            "dns",
            "file-management",
            "money-management",
            "monitoring",
            "note-taking",
            "password-manager",
            "pastebin",
            "server-management",
            "software-development",
            "task-management",
            "tool",
            "wiki",
        ])),
        state: z.enum(["unstable", "stable", "abandoned"]),
        lastChecked: z.string(),
        links: z.object({
            website: z.nullable(z.string()),
            source: z.nullable(z.string()),
            review: z.nullable(z.string()),
        }),
    }),
});

export const collections = { tags, apps };
