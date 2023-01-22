import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import { Box, Grid, Text, Image } from "@chakra-ui/react";

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading...</div>;

  console.log(products[0]);

  return (
    <Box>
      <Grid templateColumns="repeat(3, 1fr)">
        {products.map((product) => (
          <Box _hover={{ opacity: "80%" }} textAlign="center">
            <Link to={`/products/${product.handle}`} key={product.id}>
              <Image src={product.images[0].src} />
              <Text>{product.title}</Text>
              <Text>${product.variants[0].price.amount}</Text>
              {/* <Text>${product.variants.map(price =)}</Text> */}
            </Link>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
