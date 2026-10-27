
import { defineType, defineField } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({ name: "subhead", title: "Subtitle", type: "string" }),
        defineField({ name: "body", title: "Description", type: "text" }),
        defineField({ name: "tagline", title: "Tagline", type: "string" }),
        defineField({
          name: "primaryCta",
          title: "Primary Button",
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "Link", type: "string" }),
          ],
        }),
        defineField({
          name: "secondaryCta",
          title: "Secondary Button",
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "Link", type: "string" }),
          ],
        }),
        defineField({
          name: "proof",
          title: "Proof Points",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "logo",
          title: "Logo Information",
          type: "object",
          fields: [
            defineField({
              name: "alt",
              title: "Alternative Text",
              type: "string",
            }),
          ],
        }),
      ],
    }),
  ],
});
