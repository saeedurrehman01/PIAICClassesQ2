var data = [
  {
    id: 1,
    slug: "top-companies",
    description: "top software companies",
  },
  {
    id: 2,
    slug: "top-software-houses",
    description: "top software houses",
  },
];

export default function Blog({params} : {params: {slug:string}}) {
    const selectBlog = data.filter((item)=> item.slug === params.slug)
  return <div>{selectBlog[0]?.description}</div>;
}
