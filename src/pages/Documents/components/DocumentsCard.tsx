interface Document {
  title: string;
  popular?: boolean;
  link?: string;
}

interface RegulationCardProps {
  title?: string;
  description?: string;
  documents?: Document[];
  disclaimer?: string;
}

const DocumentsCard: React.FC<RegulationCardProps> = ({
  title = "Reglamentos Internos",
  description = "Connect with one of our available wallet providers or create a new one.",
  documents = [
    {
      title: "Reglamento fraccionamiento",
      popular: true,
      link: "#",
    },
  ],
  disclaimer = "Why do I need to connect with my wallet?",
}) => {
  return (
    <article className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
        {title}
      </h5>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
      <ul className="my-4 space-y-3 max-h-64 overflow-y-auto pr-1">
        {documents.map((doc, index) => (
          <li key={index}>
            <a
              href={doc.link}
              target="_blank"
              className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">{doc.title}</span>
              {doc.popular && (
                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded-sm dark:bg-gray-700 dark:text-gray-400">
                  Popular
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
      {documents.length > 6 && (
        <div className="mt-2 flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
          <span className="mr-1">Hay más documentos</span>
          <span aria-hidden>↓</span>
        </div>
      )}
      <div>
        <a
          href="/#contact"
          className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
        >
          <svg
            className="w-3 h-3 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          {disclaimer}
        </a>
      </div>
    </article>
  );
};

export default DocumentsCard;
