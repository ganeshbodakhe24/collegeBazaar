import { useEffect, useState } from "react";
import img from "../../assets/facebook.png";

export default function ReviewSlider() {
  const reviews = [
    {
      text: "I was surprised by the quality at this price. Totally worth it!",
      name: "Ajay Kale, Pune",
    },
    {
      text: "Affordable and still better than many expensive options I’ve tried.",
      name: "Rutuja Patil, Nashik",
    },
    {
      text: "Didn’t expect such great service for this price. Amazing deal!",
      name: "Vishal Gaikwad, Aurangabad",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="w-full my-4 flex flex-col items-center">
      <div className="m-3  sm:w-3/4 pl-4 bg-gradiant rounded-2xl flex justify-center items-center transition-all duration-500">
        <img className="size-20" src={img} alt="Reviewer" />
        <div className="m-6">
          <p className="text-xl">{reviews[index].text}</p>
          <br />
          <p className="text-xl font-bold">{reviews[index].name}</p>
        </div>
      </div>
    </div>
  );
}
