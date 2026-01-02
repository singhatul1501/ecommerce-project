import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: "70vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1512436991641-6745cdb1723f)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Typography variant="h3" color="white" fontWeight="bold">
            Shop Smart. Live Better.
          </Typography>
          <Typography variant="h6" color="white" mt={2}>
            Discover top deals on quality products
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 3, bgcolor: "#ff9900", color: "black" }}
          >
            Shop Now
          </Button>
        </Container>
      </Box>

      {/* Categories */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Shop by Category
        </Typography>

        <Grid container spacing={6}>
          {["Electronics", "Fashion", "Home & Kitchen", "Beauty"].map(
            (cat) => (
              <Grid item xs={12} sm={6} md={3} key={cat}>
                <Card
                  sx={{
                    p: 1,
                    textAlign: "center",
                    cursor: "pointer",
                    "&:hover": { boxShadow: 6 },
                  }}
                >
                  <Typography fontWeight="bold">{cat}</Typography>
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </Container>

      {/* Featured Products */}
      <Container sx={{ pb: 6 }}>
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Featured Products
        </Typography>

        <Grid container spacing={4}>
          {[1, 2, 3, 4].map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item}>
              <Card>
                <CardMedia
                  component="img"
                  height="180"
                  image="https://via.placeholder.com/300"
                  alt="product"
                />
                <CardContent>
                  <Typography fontWeight="bold">Product Name</Typography>
                  <Typography color="text.secondary">₹999</Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2 }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Promo Banner */}
      <Box
        sx={{
          bgcolor: "#ff9900",
          py: 6,
          textAlign: "center",
          color: "black",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Big Sale – Up to 50% Off
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2, bgcolor: "black" }}
        >
          Explore Deals
        </Button>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: "#111", color: "#aaa", py: 3, textAlign: "center" }}>
        <Typography variant="body2">
          © 2026 YourStore. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
