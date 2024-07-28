import "../app/globals.css";
import Button from "./components/Button";
import Card from "./components/Card";

export default function Home() {
  return (
    <div>
      <div>Home Page</div>
      <Button title="Go to Contact" />
      <Card showDescription={true} heading="Practicing NextJs" />
      <Card heading="Blockchain" />
    </div>
  );
}
