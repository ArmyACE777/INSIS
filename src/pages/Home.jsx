import Hero from "../components/Hero";
import Articles from "../components/Articles";

export default function Home({ onScrollToArticles }) {
  return (
    <>
      <Hero onScrollToArticles={onScrollToArticles} />
      <Articles id="articles" />
    </>
  );
}