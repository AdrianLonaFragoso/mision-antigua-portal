import { useAuth0 } from "@auth0/auth0-react";
import { ReactNode } from "react";
import { Button } from "./ui/button";

interface LoginButtonProps {
  children?: ReactNode;
}

const LoginButton: React.FC<LoginButtonProps> = ({ children }) => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  const handleClick = () => {
    if (isAuthenticated) {
      logout({ logoutParams: { returnTo: window.location.origin } });
    } else {
      loginWithRedirect();
    }
  };

  if (isLoading) {
    return (
      <button
        disabled
        className="ml-4 border-primary text-primary opacity-50 cursor-not-allowed"
      >
        Cargando...
      </button>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleClick}
      className="ml-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
    >
      {children || (isAuthenticated ? "Cerrar Sesión" : "Acceso Residentes")}
    </Button>
  );
};

export default LoginButton;
