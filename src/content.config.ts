import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        difficulty: z.enum(['beginner', 'intermediate', 'advanced', 'expert']).optional(),
        timeEstimate: z.string().optional(),
        toolsRequired: z.array(z.string()).optional(),
        partNumbers: z.array(z.string()).optional(),
        applicableYears: z.object({
          start: z.number(),
          end: z.number(),
        }).optional(),
        applicableModels: z.array(z.enum(['330i', '330Ci', '330xi'])).optional(),
        relatedFaultCodes: z.array(z.string()).optional(),
      }),
    }),
  }),
};
