export default function getPlacements(placement: string, offset: number[]) {
  const placementMap: {
    [placement: string]: {
      points: string[];
      offset: number[];
    };
  } = {
    left: {
      points: ['cr', 'cl'],
      offset: [-4, 0],
    },
    right: {
      points: ['cl', 'cr'],
      offset: [4, 0],
    },
    top: {
      points: ['bc', 'tc'],
      offset: [0, -4],
    },
    bottom: {
      points: ['tc', 'bc'],
      offset: [0, 4],
    },
    topLeft: {
      points: ['bl', 'tl'],
      offset: [0, -4],
    },
    leftTop: {
      points: ['tr', 'tl'],
      offset: [-4, 0],
    },
    topRight: {
      points: ['br', 'tr'],
      offset: [0, -4],
    },
    rightTop: {
      points: ['tl', 'tr'],
      offset: [4, 0],
    },
    bottomRight: {
      points: ['tr', 'br'],
      offset: [0, 4],
    },
    rightBottom: {
      points: ['bl', 'br'],
      offset: [4, 0],
    },
    bottomLeft: {
      points: ['tl', 'bl'],
      offset: [0, 4],
    },
    leftBottom: {
      points: ['br', 'bl'],
      offset: [-4, 0],
    },
  };

  const result = {
    ...placementMap[placement],
  };

  result.offset[0] = result.offset[0] + offset[0];
  result.offset[1] = result.offset[1] + offset[1];

  return placementMap[placement];
}
