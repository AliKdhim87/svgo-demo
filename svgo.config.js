module.exports = {
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: true,
  },
  plugins: [
    "preset-default",
    "removeDimensions",
    "convertStyleToAttrs",
    {
      name: "removeAttrs",
      params: {
        attrs: ["path:(fill|stroke)", "fill"],
      },
    },
    {
      name: "addAttributesToSVGElement",
      params: {
        attributes: [
          {
            fill: "currentColor",
          },
          {
            width: '1em',
          },
          {
            height: '1em',
          },
        ],
      },
    },
    {
      name: "sortAttrs",
      params: {
        xmlnsOrder: "alphabetical",
      },
    },
  ],
};
