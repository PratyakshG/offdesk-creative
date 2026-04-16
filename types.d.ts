type Category = "Photography" | "Videography" | "Graphic Design" | "Ad-Shoots";

interface PortfolioItem {
  id: number;
  category: Category;
  title: string;
  span?: "wide" | "tall" | "normal";
  bg?: string;
  image?: string;
  video?: string;
}
