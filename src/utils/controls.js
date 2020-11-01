let labelCount = {};

export function resetLabelCount() {
  labelCount = {};
}

export function getDisplayName(label) {
  if (labelCount[label] === undefined) {
    labelCount[label] = 1;
  } else {
    labelCount[label] += 1;
  }

  return `${label} ${labelCount[label]}`;
}

export function property(name, compare) {
  return display => {
    const value = display.properties[name];
    return compare ? compare(value) : value;
  };
}

export function stageWidth(transform) {
  return display => {
    const value = display.scene.getSize().width;
    return transform ? transform(value) : value;
  };
}

export function stageHeight(transform) {
  return display => {
    const value = display.scene.getSize().height;
    return transform ? transform(value) : value;
  };
}
