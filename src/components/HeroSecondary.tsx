import { Button } from "@/components/ui/button";

interface HeroSecondaryProps {
  title: string;
  description: string;
  background?: string;
  primaryButton: {
    text: string;
    onClick?: () => void;
    className?: string;
  };
  secondaryButton?: {
    text: string;
    onClick?: () => void;
    className?: string;
  };
  className?: string;
}

const HeroSecondary = ({
  title,
  description,
  background = "",
  primaryButton,
  secondaryButton,
  className = "",
}: HeroSecondaryProps) => {
  return (
    <section
      className={` dark:bg-gray-900 mt-16 ${background} ${
        background === "" ? "bg-gray-200" : ""
      }  ${className} `}
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {title}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          {description}
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Button
            size="lg"
            onClick={primaryButton.onClick}
            className={`bg-white text-primary hover:bg-primary-light hover:text-white transition-all duration-300 px-8 py-3 text-lg font-semibold shadow-lg ${primaryButton.className}`}
          >
            {primaryButton.text}
          </Button>
          {secondaryButton ? (
            <Button
              variant="outline"
              size="lg"
              onClick={secondaryButton.onClick}
              className={`border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all duration-300 px-8 py-3 text-lg font-semibold ${secondaryButton.className}`}
            >
              {secondaryButton.text}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default HeroSecondary;
