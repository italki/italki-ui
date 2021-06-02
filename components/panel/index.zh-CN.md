---
category: Components
type: Navigation
title: Panel
cols: 1
---

A long list can be divided into several pages using `Panel`, and only one page will be loaded at a time.

## When To Use

- When it will take a long time to load/render all items.
- If you want to browse the data by navigating through pages.

## API

| Param        | Description                | Type                | Default value |
| ------------ | -------------------------- | ------------------- | ------------- |
| title        | Panel title text           | string \| ReactNode | --            |
| divider      | Panel title divider        | boolean             | --            |
| onTitleClick | Panel title click function | (event) => void     | --            |
| extra        | Panel title extra node     | string \| ReactNode | --            |
