
import Link from "next/link"

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href={"./contact"}><h2>Contact Page</h2></Link>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default Home