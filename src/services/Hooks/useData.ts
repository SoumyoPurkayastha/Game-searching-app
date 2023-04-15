import { useEffect, useState } from "react";
import apiClient from "../api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface fetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(
    endpoint: string,
    requestConfig?: AxiosRequestConfig,
    deps?: any[]
) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    //let error = null;
    useEffect(
        () => {
            const controller = new AbortController();

            apiClient
                .get<fetchResponse<T>>(endpoint, {
                    signal: controller.signal,
                    ...requestConfig,
                })
                .then((res) => setData(res.data.results))
                .catch((err) => {
                    if (err instanceof CanceledError) return;
                    setError(err.message);
                });

            return () => controller.abort();
        },
        deps ? [...deps] : []
    );
    return { data, error };
};

export default useData;
