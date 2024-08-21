import { useNavigate } from "react-router-dom";


const useNavigationHook = () => {

    const navigate = useNavigate();

    const redirectTo = (path: string) => {
        navigate(path);
    };

    return {
        redirectTo
    };
};

export default useNavigationHook;
