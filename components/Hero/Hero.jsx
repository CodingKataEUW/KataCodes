export default function HeroSection() {
  return (
    <section className="flex max-w-7xl m-auto flex-col items-center justify-center text-center px-6 py-20 space-y-6">
      <h1 className="text-2xl md:text-6xl font-bold leading-tight">
        Welcome to My Landing Page
      </h1>
            <div className="flex flex-col md:flex-row w-full gap-4">
           
                    <div className="bg-gray-800/60 w-full lg:w-1/2 p-4 text-left text-white rounded-lg">
                             <h3>
                    About me
                </h3>
               <p className="text-sm">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.      </p>
        </div>
                           <div className="bg-gray-800/60 w-full lg:w-1/2 p-4 text-left text-white rounded-lg">
                             <h3>
                    About me
                </h3>
               <p className="text-sm">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.      </p>
        </div>
                    <div className="bg-gray-800/60 w-full lg:w-1/2 p-4 text-left text-white rounded-lg">
                             <h3>
                    About me
                </h3>
               <p className="text-sm">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.      </p>
        </div>
            </div>
      <div className="space-x-4">
        <a
          href="#get-started"
          className="px-6 py-3 rounded-lg font-medium border hover:scale-105 transition-transform"
        >
          Get Started
        </a>
        <a
          href="#learn-more"
          className="px-6 py-3 rounded-lg font-medium border hover:scale-105 transition-transform"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
