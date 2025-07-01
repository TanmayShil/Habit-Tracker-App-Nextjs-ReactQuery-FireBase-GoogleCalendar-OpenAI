// import styles from "@/styles/Home.module.css";
// import { useAuthContext } from "@/hooks/contexts/AuthContext";
import { useAuth } from "@/hooks/utils/useAuth";
import { Button } from "@mui/material";

export default function Home() {
    // const { user, loading } = useAuthContext();

  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    window.location.href = '/login'; 
  };

  return (
   <>
   Home
   <Button onClick={handleLogout} color="error" variant="outlined">
      Logout
    </Button>
   </>
  );
}
