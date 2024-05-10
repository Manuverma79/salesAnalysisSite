const LeftSection = (props) => {
  return (
    <section className="flex flex-col justify-center p-32 text-center md:sticky min-h-svh max-h-max md:-top-1/2 bg-slate-600">
      <div className="items-center justify-center text-center lg:flex intro_heading">
        <h2 className="p-8 text-3xl font-bold md:text-5xl lg:my-10 lg:text-right lg:border-r-4 dark:text-white ">
          {props.heading}
        </h2>
        {props.children}
      </div>
      <div className="flex justify-center w-auto p-2">
        <img
          className="w-auto h-auto rounded-lg shadow-lg hover:shadow-blue-400"
          src={`src/assets/${props.image}`}
          alt="image description"
        />
      </div>
    </section>
  );
};

export default LeftSection;
