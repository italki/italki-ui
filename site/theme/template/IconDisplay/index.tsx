import * as React from 'react';
import * as Icons from '@italki/icons';
import Category from './Category';
import { categories, Categories, CategoriesKeys } from './fields';

const allIcons: {
  [key: string]: any;
} = Icons;

interface IconDisplayProps {
  intl: any;
}

class IconDisplay extends React.Component<IconDisplayProps> {
  static categories: Categories = categories;

  static newIconNames: string[] = [];

  render() {
    return Object.keys(categories)
      .map((key: CategoriesKeys) => {
        const iconList = categories[key];

        return {
          category: key,
          icons: iconList.map(iconName => iconName).filter(iconName => allIcons[iconName]),
        };
      })
      .filter(({ icons }) => !!icons.length)
      .map(({ category, icons }) => (
        <Category
          key={category}
          title={category as CategoriesKeys}
          icons={icons}
          newIcons={IconDisplay.newIconNames}
        />
      ));
  }
}

export default IconDisplay;
