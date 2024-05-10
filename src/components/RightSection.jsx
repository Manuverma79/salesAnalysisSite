export default function RightSection(props) {
  return (
    <section class="flex flex-col justify-center p-32 text-center md:sticky min-h-svh max-h-max md:-top-1/2 bg-slate-700">
      <div class="items-center justify-center text-center lg:flex lg:flex-row-reverse intro_heading">
        <h2 class="p-8 text-3xl font-bold md:text-5xl lg:my-10 lg:text-left lg:border-l-4 dark:text-white ">
          {props.heading}
        </h2>
        {props.children}
      </div>
      <div class="flex justify-center w-auto p-2">
        <img
          class="w-auto h-auto rounded-lg shadow-lg hover:shadow-blue-400"
          src={`src/assets/${props.image}`}
          alt="image description"
        />
      </div>
    </section>
  );
}
