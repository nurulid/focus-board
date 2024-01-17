// export const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const checkEnvironment = () => {
    let base_url =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api/v1"
        : process.env.NEXT_PUBLIC_API_URL;
  
    return base_url;
  };