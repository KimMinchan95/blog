import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center">
      <div>
        <p className="text-blue-400 text-2xl font-semibold text-center">404</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mt-2">
          Page Not Found
        </h1>
        <div className="flex flex-col gap-2 my-5">
          <p>We looked everywhere for this page.</p>
          <p>Are you sure the website URL is correct?</p>
          <p>Get in touch with the site owner.</p>
        </div>
        <div className="flex items-center justify-center mt-4 gap-4 j">
          <Link
            href="/"
            className="rounded-md bg-blue-400 px-3.5 py-2.5 font-semibold text-white shadow-md"
          >
            Back To Home
          </Link>
          <Link href="mailto:hialscks@gmail.com?subject=[버그 제보]&body=버그 내용:">
            Bug Report
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
