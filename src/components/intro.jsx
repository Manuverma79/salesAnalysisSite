export default function Intro() {
  return (
    <section className="flex items-center justify-center w-screen h-screen md:sticky md:top-0 bg-slate-700">
      <div className="flex-col items-center justify-center text-center intro_heading">
        <h2 className="text-3xl font-bold md:text-5xl dark:text-white">
          SALES ANALYSIS
        </h2>
        <hr className="w-1/2 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-900" />
        <p className="content-center w-screen px-4 text-sm font-normal text-gray-500 md:w-4/5 md:mx-auto md:text-xl dark:text-gray-400">
          We will be doing Data Analysis on the sales data provided by a online
          electronics store,the provided dataset holds the key to unlocking a
          wealth of insights and knowledge. We are poised to unravel patterns,
          trends, and valuable business intelligence. We'll delve deep into
          understanding{" "}
          <span className="font-bold underline">
            customer purchasing behavior, popular products, sales trends, and
            geographic distribution
          </span>{" "}
          of our orders. Through meticulous examination and strategic analysis,
          we aim to empower our data-driven decision-making and a competitive
          edge in the market. Welcome to the journey of data analysis, where we
          turn raw data into actionable information for the future success.
        </p>
      </div>
    </section>
  );
}
