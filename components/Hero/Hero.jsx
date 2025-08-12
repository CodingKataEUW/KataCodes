import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex max-w-7xl m-auto flex-col items-center justify-center text-center px-6 py-20 space-y-6">
      <h1 className="text-2xl md:text-6xl font-bold leading-tight">
        Welcome to My Landing Page
      </h1>
      <div className="flex flex-col md:flex-row w-full gap-4">
        <div className="bg-gray-800/50 shadow-xl w-full lg:w-1/2 p-4 text-left text-white rounded-lg">
          <h3>About me</h3>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            provident vitae iure repellendus tempore tenetur. Cumque, obcaecati
            porro. Dicta mollitia quo similique rerum! Molestiae, inventore
            dolore perspiciatis saepe distinctio labore!
          </p>
        </div>
        <div className="bg-gray-800/60 w-full lg:w-1/2 p-4 text-left text-white rounded-lg">
          <h3>About me</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            expedita adipisci facilis exercitationem molestias amet incidunt,
            blanditiis impedit sint aliquam repudiandae veniam reprehenderit
            reiciendis? Odio eaque quos quibusdam ipsum at?
          </p>
        </div>
        <div className="bg-gray-800/60 w-full lg:w-1/2 p-4 text-left text-white rounded-lg">
          <h3>About me</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            inventore eveniet voluptatem enim ducimus ratione odit optio amet
            similique officia provident, non rerum eius sed omnis alias,
            incidunt placeat doloribus.
          </p>
        </div>
      </div>
      <div className="space-x-4">
        <Link
          href="#get-started"
          className="px-6 py-3 rounded-lg font-medium border hover:scale-105 transition-transform"
        >
          Get Started
        </Link>
        <Link
          href="#learn-more"
          className="px-6 py-3 rounded-lg font-medium border hover:scale-105 transition-transform"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
