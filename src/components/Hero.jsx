const Hero = () => {
  return (
    <section className="flex flex-col justify-center md:sticky md:top-0 bg-center h-svh bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')] bg-gray-700 bg-blend-multiply">
      <div className="fixed inset-x-0 top-0 z-10 flex flex-row justify-between p-3 m-3 text-xl font-bold text-white bg-transparent ">
        Manu Verma
      </div>
      <div className="px-4 py-24 mx-auto text-center max-w-screen lg:py-56 ">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r hover:to-purple-600 to-emerald-600 from-sky-400">
            Manu's
          </span>{" "}
          Data Analysis Hub
        </h1>
        <p className="mb-8 text-3xl font-medium text-white md:text-4xl lg:text-4xl sm:px-16 lg:px-48">
          Where numbers come to life!
        </p>
        <p className="mb-8 text-base font-normal text-gray-300 md:text-2xl lg:text-lg sm:px-16 lg:px-48">
          I specialize in the art of transforming raw data into meaningful
          insights. Whether you're seeking business intelligence, data-driven
          decisions, or simply a fresh perspective on your information, I'm here
          to make sense of the numbers. Explore the world of data through my
          analytical lens and discover the stories that lie within. Welcome to
          the power of data analysis, simplified.
        </p>
      </div>
    </section>
  );
};

export default Hero;
