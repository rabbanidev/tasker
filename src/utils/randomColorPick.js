const randomColorPick = () => {
  const colors = [
    "#00D991A1",
    "#1C92FFB0",
    "#FE1A1AB5",
    "#BD560BB2",
    "#00B2D9CC",
    "#8407E6A8",
    "#07AC67D6",
    "#2F43F8BF",
    "#AE6D0BDB",
    "#10FBEDB2",
  ];
  const randomIndex = Math.round(Math.random() * (colors.length - 1));

  return colors[randomIndex];
};

export default randomColorPick;
