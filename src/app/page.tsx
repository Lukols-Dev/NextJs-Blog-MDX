import { SearchBar } from "@/components/common/SearchBar";
import Posts from "@/components/Posts";

export default function Home() {
  return (
    <section className="mt-6 w-full flex flex-col">
      <div className="w-full min-h-48 h-60 mb-10 px-4 md:px-10 lg:px-32 lg:gap-4 flex items-center bg-gradient-to-r from-violet-600 to-indigo-600">
        <div className="max-w-[400px] flex flex-col gap-2">
          <h1
            className={`text-2xl lg:w-[400px] font-bold text-left text-white`}
          >
            Kodowanie to droga bez końca, lecz cierpliwość uczyni cię mistrzem.
          </h1>
          <p className="float-right text-white mb-4">
            - <i>Next Ninja</i>
          </p>
          <SearchBar />
        </div>
      </div>
      <Posts />
    </section>
  );
}
