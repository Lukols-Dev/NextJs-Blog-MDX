import { render, screen } from "@testing-library/react";
import Posts from "@/components/Posts";
import Home from "@/app/page";

jest.mock("../src/components/common/SearchBar", () => {
  return {
    __esModule: true,
    default: jest.fn(() => <div data-testid="mockSearchBar" />),
  };
});

// jest.mock("../src/components/Posts", () => {
//   return {
//     __esModule: true,
//     default: jest.fn(() => <div data-testid="mockPosts" />),
//   };
// });

describe("Home component", () => {
  const pageProps = {
    params: {},
    searchParams: { search: "" },
  };

  it("renders the main heading correctly", () => {
    render(<Home {...pageProps} />);
    const heading = screen.getByText(
      /Kodowanie to droga bez końca, lecz cierpliwość uczyni cię mistrzem./i
    );
    expect(heading).toBeInTheDocument();
  });

  it("renders the quote correctly", () => {
    render(<Home {...pageProps} />);
    const quote = screen.getByText(/Next Ninja/i);
    expect(quote).toBeInTheDocument();
  });

  it("renders the SearchBar component", () => {
    render(<Home {...pageProps} />);
    const searchBar = screen.getByTestId("mockSearchBar");
    expect(searchBar).toBeInTheDocument();
  });

  //   it("renders the Posts component with correct filter", () => {
  //     render(<Home {...pageProps} searchParams={{ search: "testFilter" }} />);
  //     const posts = screen.getByTestId("mockPosts");
  //     expect(posts).toBeInTheDocument();
  //     expect(Posts).toHaveBeenCalledWith({ filter: "testFilter" }, {});
  //   });
});
