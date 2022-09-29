import allPosts from "../data/posts.json";

type Data = {
  allPosts: {
    id: number;
    title: string;
  }[];
};

export default function Post({ allPosts }: Data) {

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', {
        method: 'post',
        headers: { "Content-Type": 'application/json'},
        body: JSON.stringify({})
      }).then((data) => console.log('data')).catch(err => console.log(err))
    }
    catch(err) {
      console.log(err)
    }
  }
  return (
    <>
      <ul>
        {allPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
  Sign Out
</button>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { allPosts }, // will be passed to the page component as prop
    revalidate: 10
  };
}
