const getFontColor = (prevHexColor: string): 'black' | 'white' => {
  let hexColor = `${prevHexColor}`;

  if (hexColor.slice(0, 1) === '#') {
    hexColor = hexColor.slice(1);
  }

  if (hexColor.length === 3) {
    hexColor = hexColor
      .split('')
      .map((hex) => `${hex}${hex}`)
      .join('');
  }

  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 2), 16);
  const b = parseInt(hexColor.substring(4, 2), 16);

  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'black' : 'white';
};

export default getFontColor;
