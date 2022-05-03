// $grid: (
//   xs: 0,
//   sm: 576px,
//   md: 768px,
//   lg: 992px,
//   xl: 1200px,
//   xxl: 1400px
// );

const a = {
  up() {},
  down(size) {
    const sizes = {
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1600px",
    };
    return `@media (max-width: ${sizes[size]})`;
  },
};

export default a;
