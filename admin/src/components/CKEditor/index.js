import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-build-md";
// import "ckeditor5-build-md/build/translations/ar";
// import "ckeditor5-build-md/build/translations/cs";
// import "ckeditor5-build-md/build/translations/de";
import "ckeditor5-build-md/build/translations/en";
// import "ckeditor5-build-md/build/translations/fr";
// import "ckeditor5-build-md/build/translations/id";
// import "ckeditor5-build-md/build/translations/it";
// import "ckeditor5-build-md/build/translations/ko";
// import "ckeditor5-build-md/build/translations/nl";
// import "ckeditor5-build-md/build/translations/pl";
// import "ckeditor5-build-md/build/translations/pt";
// import "ckeditor5-build-md/build/translations/pt-br";
// import "ckeditor5-build-md/build/translations/ru";
// import "ckeditor5-build-md/build/translations/sk";
// import "ckeditor5-build-md/build/translations/th";
// import "ckeditor5-build-md/build/translations/tr";
// import "ckeditor5-build-md/build/translations/uk";
// import "ckeditor5-build-md/build/translations/vi";
// import "ckeditor5-build-md/build/translations/zh";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    max-height: 400px;
    > div {
      min-height: 200px;
      max-height: 400px;
    }
  }
`;

const Editor = ({ onChange, name, value, config }) => {
  return (
    <Wrapper>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onReady={(editor) => {
          if (value) {
            editor.setData(value);
          }
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange({ target: { name, value: data } });
        }}
        config={config}
      />
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;
