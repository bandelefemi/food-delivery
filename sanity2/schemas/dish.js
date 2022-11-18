export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of dish",
      validation: (Rule) => Rule.required(),
     },
     {
      name: "short_desc",
      type: "string",
      title: "Short desc",
      validation: (Rule) => Rule.max(200),
     },
     {
      name: "price",
      type: "number",
      title: "price of dish in USD",
     },
     {
      name: "image",
      type: "image",
      title: "image of dish",
     }
  ],
  
}
