export function lightenColor(hex: string, amount: number): string {
  // Convertir el color hexadecimal a RGB
  const rgb = hexToRgb(hex);

  // Calcular el nuevo valor RGB para cada canal de color
  const r = Math.round(rgb.r + (255 - rgb.r) * amount);
  const g = Math.round(rgb.g + (255 - rgb.g) * amount);
  const b = Math.round(rgb.b + (255 - rgb.b) * amount);

  // Convertir el nuevo valor RGB de vuelta a hexadecimal
  const newHex = rgbToHex(r, g, b);

  return newHex;
}

// Función auxiliar para convertir un color hexadecimal a RGB
function hexToRgb(hex: string): {r: number; g: number; b: number} {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return {r, g, b};
}

// Función auxiliar para convertir un valor RGB a hexadecimal
function rgbToHex(r: number, g: number, b: number): string {
  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");
  return `#${hexR}${hexG}${hexB}`;
}
