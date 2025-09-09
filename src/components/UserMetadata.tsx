import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Shield, Crown } from "lucide-react";

const NS = "https://www.misionantigua.org/";

const UserMetadata = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  console.log(user);
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 text-center">
            <Button onClick={() => loginWithRedirect()}>Iniciar sesión</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Perfil de Usuario
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
              <User className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Nombre
                </p>
                <p className="font-medium">{user?.name || "—"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Email
                </p>
                <p className="font-medium">{user?.email || "—"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Nombre de Usuario
                </p>
                <p className="font-medium">
                  {user?.[`${NS}displayName`] || "—"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">Rol</p>
                <p className="font-medium">{user?.[`${NS}role`] || "—"}</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t">
            <Button
              variant="destructive"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="w-full"
            >
              Cerrar Sesión
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserMetadata;
