import { SessionsState, SessionsDispatch } from "./SessionsContext";
import { useContext } from "react";

//Hook para obtener el estado de las sesiones
export const useSessions = () => {
  const context = useContext(SessionsState);
  if (!context) {
    throw new Error("useSessions debe usarse dentro de un SessionsProvider");
  }
  return context;
};

//Hook para obtener el dispatch
export const useSessionsDispatch = () => {
  const context = useContext(SessionsDispatch);
  if (!context) {
    throw new Error(
      "useSessionsDispatch debe usarse dentro de un SessionsProvider"
    );
  }
  return context;
};
