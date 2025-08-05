import SuppliersTable from "./SuppliersTable";

const SuppliersSection = () => {
  return (
    <section id="suppliers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center my-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Lista de proveedores
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
      </div>
      <SuppliersTable />
    </section>
  );
};

export default SuppliersSection;
