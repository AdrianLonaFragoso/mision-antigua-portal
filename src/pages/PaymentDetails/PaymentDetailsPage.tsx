import NavigationApp from "@/components/NavigationApp";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PaymentDetailsPage = () => {
  const { toast } = useToast();
  const details = [
    { label: "Banco", value: "Banco Bancrea" },
    {
      label: "Titular",
      value: "ASOCIACIÓN DE COLONOS FRACCIONAMIENTO MISIÓN ANTIGUA",
    },
    {
      label: "Dirección",
      value:
        "El Centenario Ext. 39, Tejeda\nCorregidora, Querétaro, México 76904",
    },
    { label: "RFC", value: "ACF211027IS1" },
    { label: "Producto", value: "SOY BANCREA EMPRESARIAL" },
    { label: "# cuenta", value: "12000054940" },
    { label: "CLABE", value: "152680120000549405" },
  ];

  const copy = async (text: string, label?: string) => {
    try {
      if (
        navigator.clipboard &&
        typeof navigator.clipboard.writeText === "function"
      ) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        const selection = document.getSelection();
        const selected = selection
          ? selection.rangeCount > 0
            ? selection.getRangeAt(0)
            : null
          : null;
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        if (selected && selection) {
          selection.removeAllRanges();
          selection.addRange(selected);
        }
      }
      toast({
        title: "Copiado",
        description: `${label ?? "Dato"} copiado al portapapeles`,
      });
    } catch (e) {
      toast({
        title: "No se pudo copiar",
        description: "Intenta manualmente seleccionando el texto",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <NavigationApp />
      <div className="mx-auto">
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Datos de pago
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Cuenta bancaria</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {details.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start justify-between gap-4 border-b pb-4 last:border-none"
                    >
                      <div className="min-w-32 text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="flex-1">
                        <div className="whitespace-pre-line break-words">
                          {item.value}
                        </div>
                      </div>
                      <div>
                        <Button
                          variant="outline"
                          size="icon"
                          aria-label={`Copiar ${item.label}`}
                          onClick={() => copy(item.value, item.label)}
                          title="Copiar"
                        >
                          <Copy />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PaymentDetailsPage;
