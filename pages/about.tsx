import Nav from "../components/Navbar";
type Props = {};

export default function About({}: Props) {
  return (
    <>
      <Nav />
      <main>
        <div className="flex flex-col justify-center px-40 mt-20 ">
          <div className="w-8/12 py-20">
            <h1 className="py-1 text-5xl font-bold text-blue-900 dark:text-white md:text-5xl">
              About Me
            </h1>
            <p className="py-4 text-lg text-zinc-700 dark:text-white">
              The Generator App is an online tool that helps you to export
              ready-made templates ready to work as your future website. It
              helps you to combine slides, panels and other components and
              export it as a set of static files: HTML/CSS/JS.
            </p>
            <h1 className="py-1 text-5xl font-bold text-blue-900 dark:text-white md:text-5xl">
              Work Experience
            </h1>
            <p className="py-4 text-lg text-zinc-700 dark:text-white"></p>
            <h1 className="py-1 text-5xl font-bold text-blue-900 dark:text-white md:text-5xl">
              Education
            </h1>
            <p className="py-4 text-lg text-zinc-700 dark:text-white"></p>
          </div>
        </div>
      </main>
    </>
  );
}
