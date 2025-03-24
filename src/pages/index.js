import Head from "next/head";
import fs from "fs";
import path from "path";
import Image from "next/image";

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), "src", "data", "users.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const users = JSON.parse(jsonData);

  return {
    props: { users }
  };
}

export default function Home({ users }) {
  return (
    <>
      <Head>
        <title>User List - Next.js 15</title>
        <meta name="description" content="A simple SSR user list in Next.js 15 with SEO and accessibility." />
      </Head>

      <main>
        <h1>User List</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Image 
                src={user.image} 
                alt={`Profile picture of ${user.name}`} 
                width={60} 
                height={60} 
                loading="lazy"
                style={{ borderRadius: "50%" }}
              />
              <div>
                <h2>{user.name}</h2>
                <p>{user.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>

      <style jsx>{`
        main {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          text-align: center;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #ddd;
          padding: 10px;
          margin: 10px 0;
          border-radius: 5px;
        }
        img {
          border-radius: 50%;
        }
      `}</style>
    </>
  );
}
