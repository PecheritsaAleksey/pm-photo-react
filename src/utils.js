//todo Remove that shit and moved file to server

function importAll(r) {
  return r.keys().map(r);
}

export const loadImages = folder => {
  const firstImages = importAll(require.context("./images/first", false));
  const secondImages = importAll(require.context("./images/second", false));
  const thirdImages = importAll(require.context("./images/third", false));
    const fourthImages = importAll(require.context("./images/fourth", false));
    const fifthImages = importAll(require.context("./images/fifth", false));
    const sixthImages = importAll(require.context("./images/sixth", false));

  switch (folder) {
    case "balet":
      return firstImages;
    case "VandD":
      return secondImages;
    case "DandM":
      return thirdImages;
    case "TandS":
      return fourthImages;
    case "AandV":
      return fifthImages;
    case "OandE":
      return sixthImages;
    default:
      break;
  }
};