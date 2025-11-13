import {
  type LucideIcon,
  CreditCard,
  Palette,
  Megaphone,
  User,
  FileText,
  FolderKanban,
  Phone,
  Store,
} from "lucide-react";

export type MiniAppItem = {
  id: string;
  title: string;
  description: string;
  status: {
    label: string;
    variant?: "default" | "secondary" | "destructive" | "outline";
  };
  icon: LucideIcon;
  link: string;
  colSpan?: 1 | 2;
};

export const MINI_APP_ITEMS: MiniAppItem[] = [
  {
    id: "anuncios",
    title: "Ver anuncios",
    description: "Avisos y noticias recientes.",
    status: { label: "Hoy", variant: "secondary" },
    icon: Megaphone,
    link: "/anuncios",
    colSpan: 2,
  },
  {
    id: "pago",
    title: "Datos de pago",
    description: "Paga tus cuotas de forma segura.",
    status: { label: "Activo" },
    icon: CreditCard,
    link: "/pago",
  },
  {
    id: "colores",
    title: "Consultar colores de pintura",
    description: "Encuentra los colores de tu casa.",
    status: { label: "Nuevo", variant: "secondary" },
    icon: Palette,
    link: "/colores",
  },

  // {
  //   id: "perfil",
  //   title: "Perfil",
  //   description: "Consulta y edita tu información.",
  //   status: { label: "Activo" },
  //   icon: User,
  //   link: "/perfil",
  // },
  {
    id: "documentos",
    title: "Documentos",
    description: "Formatos y reglamentos.",
    status: { label: "Actualizado", variant: "secondary" },
    icon: FileText,
    link: "/documentos",
  },
  {
    id: "proyectos",
    title: "Proyectos",
    description: "Seguimiento de obras y mejoras.",
    status: { label: "Activo" },
    icon: FolderKanban,
    link: "/proyectos",
  },
  {
    id: "contacto",
    title: "Contacto",
    description: "Escríbenos o llámanos.",
    status: { label: "Atención" },
    icon: Phone,
    link: "/#contact",
  },
  {
    id: "proveedores",
    title: "Proveedores",
    description: "Directorio y acceso al portal.",
    status: { label: "Acceso" },
    icon: Store,
    link: "/proveedores",
  },
];
