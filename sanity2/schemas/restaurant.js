export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
   {
    name: "name",
    type: "string",
    title: "Restaurant name",
    validation: (Rule) => Rule.required(),
   },
   {
    name: "short_desc",
    type: "string",
    title: "short desc",
    validation: (Rule) => Rule.max(200),
   },
   {
    name: "image",
    type: "image",
    title: "Image of restaurant",
   },
   {
    name: "address",
    type: "string",
    title: "Restaurant address",
    validation: (Rule) => Rule.required(),
   },
   {
    name: "rating",
    type: "number",
    title: "Enter a rating from (1-5 Start)",
    validation: (Rule) => 
      Rule.required()
        .min(1)
        .max(5)
        .error("please enter a number between 1 and 5")
    ,
   },
   {
    name: "type",
    type: "reference",
    to: [{ type: "category" }],
    title: "Category",
    validation: (Rule) => Rule.required(),
   },
   {
    name: "dishes",
    type: "array",
    title: "Dishes",
    of: [{ type: "reference", to: [{ type: "dish"}] }]
   }
  ],

  
}
