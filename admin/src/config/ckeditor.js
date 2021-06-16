module.exports = {
  ////// CONFIGURATION TEMPLATE: uncomment desired lines to override default config.
  ////// While all lines are commented, config will not change anything.
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "specialCharacters",
      "blockQuote",
      "horizontalLine",
      "|",
      "fullScreen",
      "undo",
      "redo",
    ],
    shouldNotGroupWhenFull: true,
  },
  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },
  heading: {
    options: [
      { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
      {
        model: "heading2",
        view: "h2",
        title: "Heading 2",
        class: "ck-heading_heading2",
      },
      {
        model: "heading3",
        view: "h3",
        title: "Heading 3",
        class: "ck-heading_heading3",
      },
      {
        model: "heading4",
        view: "h4",
        title: "Heading 4",
        class: "ck-heading_heading4",
      },
    ],
  },
};
