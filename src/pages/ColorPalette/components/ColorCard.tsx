import { Button } from "@/components/ui/button";

interface ColorCardProps {
  code: string;
  subtitle: string;
  hexColor: string;
}

const ColorCard = ({ code, subtitle, hexColor }: ColorCardProps) => {
  return (
    <article className="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <div
        className={`w-full h-32 bg-[${hexColor}] rounded-lg mb-4 flex items-center justify-center font-bold text-4xl text-gray-300`}
      >
        {code}
      </div>
      <h2 className="text-lg font-semibold">{code}</h2>
      <div className="text-sm text-gray-500 mb-4">{subtitle}</div>
      <Button className="w-full">Descargar imagen</Button>
    </article>
  );
};

export default ColorCard;
