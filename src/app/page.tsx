import CardVideo from "@/components/molecules/CardVideo";
import Category from "@/components/molecules/Category";
import HomeLayout from "@/components/templates/HomeLayout";
import { CONTENT_DATA } from "@/utils/content-data";

export default function Home() {
  return (
    <div>
      <HomeLayout>
        <Category />
        <div className="grid grid-cols-3 gap-5 h-[83vh] overflow-y-scroll">
          {CONTENT_DATA.map((item) => (
            <CardVideo
              key={item.username}
              thumbnail={item.thumbnail}
              title={item.title}
              username={item.username}
              profile={item.profile}
              duration={item.duration}
              verified={item.verified}
            />
          ))}
        </div>
      </HomeLayout>
    </div>
  );
}
