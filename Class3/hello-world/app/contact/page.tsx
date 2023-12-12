
import Link from "next/link"

function Contact() {
  return (
    <div>
      <h1>This is contact page.</h1>
          <Link href={"/"}><h2>Back to Home Page</h2></Link>
          <p>Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default Contact