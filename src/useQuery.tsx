interface QueryResult<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}
const useQuery = <T>(options: {url: string; method?: string }): QueryResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(options.url, {method: options.method });
    const result = await response.json();
    setData(result);
        } catch (error) {
        setError(error);
        } finally {
        setLoading(false);
        }
      };
    fetchData();
    }, [options.url, options.method]);
    return {data, loading, error};
  };
