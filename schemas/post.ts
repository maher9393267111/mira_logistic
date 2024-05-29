import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'heading',
        maxLength: 96,
      },
    }),




    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),




    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),



    defineField({
      name: 'bodyar',
      title: 'BodyAr',
      type: 'blockContent',
    }),


    defineField({
      name: 'bodytr',
      title: 'BodyTr',
      type: 'blockContent',
    }),



    // defineField({
    //   name: 'description',
    //   description: 'Enter a short snippet for the blog...',
    //   title: 'Description',
    //   type: 'string',
    // }),

    // defineField({
    //   name: 'description2',
    //   description: 'Enter a short snippet for the blog desc2...',
    //   title: 'Description2',
    //   type: 'string',
    // }),


  ],

  preview: {
    select: {
      title: 'heading',
      
      media: 'image',
    },
    prepare(selection) {
      
      return {...selection}
    },
  },
})
