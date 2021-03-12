export const getProd = async (page, per, sort) => {
    const prod = await (
      await fetch(`http://localhost:3002/products?_sort=${sort}&_page=${page}&_limit=${per}`)
    ).json();
    console.log(prod)
    return prod;
  };
