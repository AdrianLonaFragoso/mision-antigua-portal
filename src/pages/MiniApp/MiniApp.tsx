import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MINI_APP_ITEMS } from "./constants";
import Footer from "@/components/Footer";
import NavigationApp from "@/components/NavigationApp";

const MiniApp = () => {
  return (
    <>
      <NavigationApp />

      <h2 className="text-2xl font-bold mb-5 text-center">
        Seleccona una opción
      </h2>

      <div className="grid grid-cols-2 gap-4 px-4 py-6 max-w-md mx-auto">
        {MINI_APP_ITEMS.map((item) => (
          <Link
            to={item.link}
            key={item.id}
            className={`block ${item.colSpan === 2 ? "col-span-2" : ""}`}
          >
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <Badge variant={item.status.variant}>
                    {item.status.label}
                  </Badge>
                </div>
                <CardTitle className="mt-3 text-base">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default MiniApp;
