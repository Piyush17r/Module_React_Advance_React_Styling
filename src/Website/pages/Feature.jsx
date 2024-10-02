import styled from "styled-components";

const Categories = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 30px;
`;

const CategoryCard = styled.div`
  width: 100px;
  text-align: center;
  
  img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 16px;
    color: #333;
  }
`;

const FeaturedCategories = () => (
  <Categories>
    <CategoryCard>
      <img src="path_to_image.jpg" alt="Red Apple" />
      <h3>Red Apple</h3>
    </CategoryCard>
    <CategoryCard>
      <img src="path_to_image.jpg" alt="Snack" />
      <h3>Snack</h3>
    </CategoryCard>
    {/* Add more categories here */}
  </Categories>
);

export default FeaturedCategories;
