import type { ReactNode } from "react";

type LineItemProps = {
  uri: string;
  media: string;
  handle: string;
  icon: ReactNode;
};
function LineItem({ icon, uri, media, handle }: LineItemProps) {
  return (
    <li className="rounded border border-purple-300 p-2 hover:bg-purple-100 focus:bg-purple-100 text-slate-900 hover:text-purple-900 focus:text-purple-900 transition-colors dark:text-slate-300 dark:hover:bg-purple-900 dark:hover:text-purple-300 dark:focus:bg-purple-900 dark:focus:text-purple-300">
      <a target="_blank" href={uri} rel="noreferrer">
        <div className="flex items-center ">
          <div className="mr-2 opacity-70">{icon}</div>
          <div className="flex flex-col">
            <span>{media}</span>
            <span className="opacity-60">{handle}</span>
          </div>
        </div>
      </a>
    </li>
  );
}

export default function Index() {
  return (
    <main className="flex flex-col items-center justify-start  h-full rounded-md dark:bg-slate-900">
      <h1 className="text-purple-900 font-bold text-center my-4 text-4xl dark:text-purple-300">
        Thiago Temple
      </h1>
      <h2 className="text-purple-900/75 text-center text-lg mb-2 dark:text-purple-500">
        Staff Engineer
      </h2>
      <ul className="px-2 grid md:grid-cols-2 gap-4 w-full lg:w-3/5 lg:max-w-7xl">
        <LineItem
          uri="https://www.linkedin.com/in/thitemple/"
          media="LinkedIn"
          handle="@thitemple"
          icon={
            <svg
              className="h-8 w-8 text-inherit"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
              <rect x="2" y="9" width="4" height="12" />{" "}
              <circle cx="4" cy="4" r="2" />
            </svg>
          }
        />
        <LineItem
          uri="https://thecodingtemple.dev"
          media="Blog"
          handle="thecodingtemple.dev"
          icon={
            <svg
              className="h-8 w-8 text-inherit"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          }
        />
        <LineItem
          uri="https://twitter.com/ThiagoTemple"
          media="Twitter"
          handle="@ThiagoTemple"
          icon={
            <svg
              className="h-8 w-8 text-inherit"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          }
        />
        <LineItem
          uri="https://github.com/thitemple"
          media="GitHub"
          handle="@thitemple"
          icon={
            <svg
              className="h-8 w-8 text-inherit"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          }
        />
        <LineItem
          uri="https://stackoverflow.com/users/186836/thitemple"
          media="stackoverflow"
          handle="@thitemple"
          icon={
            <svg
              className="h-8 w-8 text-inherit"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <polyline points="12 4 4 8 12 12 20 8 12 4" />{" "}
              <polyline points="4 12 12 16 20 12" />{" "}
              <polyline points="4 16 12 20 20 16" />
            </svg>
          }
        />
        <LineItem
          uri="mailto:thitemple@hey.com"
          media="E-mail"
          handle="thitemple@hey.com"
          icon={
            <svg
              className="h-8 w-8 text-inherit"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
              <polyline points="22,6 12,13 2,6" />
            </svg>
          }
        />
        <LineItem
          uri="https://www.pluralsight.com/authors/thiago-temple"
          media="On-line Courses"
          handle="thiago-temple"
          icon={
            <svg
              className="h-8 w-8 "
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />{" "}
              <line x1="13" y1="8" x2="15" y2="8" />{" "}
              <line x1="13" y1="12" x2="15" y2="12" />
            </svg>
          }
        />
        <LineItem
          uri="https://bit.ly/thiago-temple-resume"
          media="Resume"
          handle="My resume"
          icon={
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          }
        />
        <LineItem
          uri="https://boardgamegeek.com/user/vintem"
          media="BoardGameGeek"
          handle="vintem"
          icon={
            <svg
              className="h-8 w-8 text-inherit"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <rect x="4" y="4" width="16" height="16" rx="2" />{" "}
              <circle cx="8.5" cy="8.5" r=".5" fill="currentColor" />{" "}
              <circle cx="15.5" cy="8.5" r=".5" fill="currentColor" />{" "}
              <circle cx="15.5" cy="15.5" r=".5" fill="currentColor" />{" "}
              <circle cx="8.5" cy="15.5" r=".5" fill="currentColor" />
            </svg>
          }
        />
        <LineItem
          uri="https://bit.ly/thitemple-youtube"
          media="YouTube"
          handle="Temple At Solo Gaming"
          icon={
            <svg
              className="h-8 w-8 text-inherit"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{" "}
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
          }
        />
      </ul>
    </main>
  );
}
