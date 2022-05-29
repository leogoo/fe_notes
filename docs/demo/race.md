> 数据竞态简单来说就是数据请求返回的顺序问题，在搜索逻辑中比较常见，第一次的请求数据还没回来可能就会发送第二次请求，这时候就不能保证拿到的返回是第一次请求的

1. 布尔标志
  ```js
  function useRequest() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    useEffect(() => {
      let isMounted = true;
      setIsLoading(true);
      fetch(`https://..../articles/${articleId}`)
        .then((response: Article) => {
          if (isMounted) {
            setData(response);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
      
      return () => {
        isMount = false;
      }
    }, [articleId]);
  
    return {
      data,
      isLoading,
    };
  }
  export default useRequest;
  ```
1. abortController
> 上面的方法只是处理了前端，请求还是会发出去，还是消耗了网络资源。abortController可以中止一个或多个请求
  ```js
  function useRequest() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    useEffect(() => {
      const abortController = new AbortController();
      setIsLoading(true);
      fetch(`https://..../articles/${articleId}`, {
        signal: abortController.signal,
      })
        .then((response: Article) => {
          setData(response);
        })
        .finally(() => {
          setIsLoading(false);
        });
      
      return () => {
        abortController.abort();
      }
    }, [articleId]);
  
    return {
      data,
      isLoading,
    };
  }
  export default useRequest;
  ```
