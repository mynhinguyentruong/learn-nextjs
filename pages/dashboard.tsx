import allPosts from "../data/posts.json";

type Data = {
  allPosts: {
    id: number;
    title: string;
  }[];
};

export default function Post({ allPosts }: Data) {
  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  return {
    props: { allPosts }, // will be passed to the page component as prop
  };
}
