import { useEffect, useState } from "react";
import apiClient from "../api-client";
import { CanceledError } from "axios";

interface fetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    //let error = null;
    useEffect(() => {
        const controller = new AbortController();

        apiClient
            .get<fetchResponse<T>>(endpoint, { signal: controller.signal })
            .then((res) => setData(res.data.results))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            });

        return () => controller.abort();
    }, []);
    return { data, error };
};

export default useData;
