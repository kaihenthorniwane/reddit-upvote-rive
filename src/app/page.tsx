import RedditPost, { RedditPostProps } from "./components/RedditPost";
const fakeRedditPosts = [
  {
    upvotes: 152,
    subreddit: {
      subredditName: "travel",
    },
    postContent: {
      title: "Solo Travel to New Zealand",
      text: "Embarking on a solo journey to New Zealand was one of the most exhilarating experiences of my life. From the stunning landscapes of the South Island to the vibrant cultural life of cities like Wellington and Auckland, every day was an adventure. I hiked through the breathtaking Fiordland National Park, kayaked in the crystal-clear waters of Abel Tasman, and experienced the Maori culture firsthand. The kindness and hospitality of the Kiwis made me feel right at home. Solo travel in New Zealand is not just about the places you visit; it’s about the journey of self-discovery and the incredible people you meet along the way.",
    },
  },
  {
    upvotes: 234,
    subreddit: {
      subredditName: "cooking",
    },
    postContent: {
      title: "Exploring the World of Sourdough Bread",
      text: "Sourdough bread has become a passion of mine, and the journey to perfect my loaf has been both challenging and immensely rewarding. The key to great sourdough is a healthy, active starter and understanding the subtle art of fermentation. Each step, from mixing the dough to the final bake, requires patience and attention to detail. I’ve experimented with different flours, hydration levels, and fermentation times to find what works best for my taste and environment. The aroma of freshly baked sourdough, the crackling sound of the crust, and the tangy, complex flavor of the bread make all the effort worthwhile. Sharing my sourdough creations with friends and family brings a sense of joy and accomplishment.",
    },
  },
  {
    upvotes: 318,
    subreddit: {
      subredditName: "gardening",
    },
    postContent: {
      title: "Urban Gardening: Transforming Spaces into Green Havens",
      text: "Urban gardening has revolutionized the way I view and utilize space in my small city apartment. Turning my balcony into a lush garden filled with herbs, vegetables, and flowers has not only beautified my living space but also provided a sustainable way to produce fresh, organic produce. The process of planning the garden, selecting plants that thrive in limited space and varying light conditions, and caring for them daily has been incredibly fulfilling. Gardening in the city presents unique challenges, such as dealing with limited space and soil quality, but the rewards of harvesting your own produce and creating a green oasis are immeasurable. It’s a testament to the fact that with a bit of creativity and effort, anyone can become a gardener, regardless of where they live.",
    },
  },
];

export default function Home() {
  return (
    <main className="fixed left-0 top-0 right-0 bottom-0 flex items-center flex-col p-5 text-primary-dark-color">
      <div className="flex flex-col gap-5 max-w-screen-sm">
        {fakeRedditPosts.map((post, index) => (
          <RedditPost
            key={"feed-post-" + index}
            upvotes={post.upvotes}
            subreddit={{
              subredditName: post.subreddit.subredditName,
            }}
            postContent={{
              title: post.postContent.title,
              text: post.postContent.text,
            }}
          />
        ))}
      </div>
    </main>
  );
}
