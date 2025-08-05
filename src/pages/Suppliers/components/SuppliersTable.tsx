import { proveedores } from "../constants";

const SuppliersTable = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Nombre</th>
                <th className="py-3 px-6 text-left">Contacto</th>
                <th className="py-3 px-6 text-left">Teléfono</th>
                <th className="py-3 px-6 text-left">Dirección</th>
                <th className="py-3 px-6 text-left">Correo</th>
                <th className="py-3 px-6 text-left">Tipo de Material</th>
                <th className="py-3 px-6 text-center">Tiempo Entrega</th>
                <th className="py-3 px-6 text-center">Calificación</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {proveedores.map((proveedor) => (
                <tr
                  key={proveedor.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="font-medium text-gray-800">
                      {proveedor.nombre}
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div>{proveedor.contacto}</div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div>{proveedor.telefono}</div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="max-w-xs truncate">
                      {proveedor.direccion}
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="max-w-xs truncate">{proveedor.correo}</div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div>{proveedor.tipoMaterial}</div>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-xs text-nowrap">
                      {proveedor.tiempoEntrega}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex items-center justify-center">
                      <span className="mr-1">{proveedor.calificacion}</span>
                      <svg
                        className="w-4 h-4 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SuppliersTable;
