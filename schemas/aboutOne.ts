import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";
import { preview } from "sanity-plugin-icon-picker";

export const AboutOne = defineType({
  name: "aboutone",
  type: "document",
  title: "Aboutone",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),

    defineField({
      name: "headingar",
      type: "string",
    }),

    defineField({
      name: "headingtr",
      type: "string",
    }),

    defineField({
      name: "desc",
      description: "Enter a short snippet for the blog...",
      title: "Description",
      type: "string",
    }),

    defineField({
      name: "descar",
      description: "Enter a short snippet for the arabic desc...",
      title: "DescriptionArabic",
      type: "string",
    }),

    defineField({
      name: "desctr",
      description: "Enter a short snippet for the turkish desc...",
      title: "DescriptionTurkish",
      type: "string",
    }),


    
    defineField({
      name: "year",
      type: "number",
    }),


    
    defineField({
      name: "customersnumber",
      type: "string",
    }),




    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: "heading",
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "Aboutone",
        media: image || DocumentTextIcon,
      };
    },
  },
});
