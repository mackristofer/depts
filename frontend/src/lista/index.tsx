import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Departamento } from "../types/departamento";
import { requestBackend } from "../util/requests";
import { removeAuthData } from "../util/storage";

function Lista() {
  const [dept, setDept] = useState<Departamento[]>([]);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
     removeAuthData();
    navigate('/');
  };

  useEffect(() => {
    const params : AxiosRequestConfig = {
      url: '/departments',
      withCredentials: true,
    };
 
    requestBackend(params).then((response) => {
      setDept(response.data);
    });
  }, []);

    return (
      <>{dept.map((d) => (
        <p>{d.name}</p>
      ))}
      <button onClick={handleLogoutClick}>Sair</button>
      </>
    )
  }
  
  export default Lista;