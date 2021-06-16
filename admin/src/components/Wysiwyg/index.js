import { isEmpty } from "lodash";
import PropTypes from "prop-types";
import React from "react";
import {
  InputDescription,
  InputErrors,
  Label,
  useGlobalContext,
} from "strapi-helper-plugin";
import config from "../../config/ckeditor";
import Editor from "../CKEditor";

const Wysiwyg = ({
  inputDescription,
  errors,
  label,
  name,
  noErrorsDescription,
  onChange,
  value,
}) => {
  const { currentLocale } = useGlobalContext();

  config.language = currentLocale;

  if (!noErrorsDescription && !isEmpty(errors)) {
    spacer = <div />;
  }

  return (
    <div
      style={{
        marginBottom: "1.6rem",
        fontSize: "1.3rem",
        fontFamily: "Lato",
      }}
    >
      <Label htmlFor={name} message={label} style={{ marginBottom: 10 }} />
      <Editor name={name} onChange={onChange} value={value} config={config} />
      <InputDescription
        message={inputDescription}
        style={!isEmpty(inputDescription) ? { marginTop: "1.4rem" } : {}}
      />
      <InputErrors
        errors={(!noErrorsDescription && errors) || []}
        name={name}
      />
    </div>
  );
};

Wysiwyg.defaultProps = {
  errors: [],
  inputDescription: null,
  label: "",
  noErrorsDescription: false,
  value: "",
};

Wysiwyg.propTypes = {
  errors: PropTypes.array,
  inputDescription: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape({
      id: PropTypes.string,
      params: PropTypes.object,
    }),
  ]),
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape({
      id: PropTypes.string,
      params: PropTypes.object,
    }),
  ]),
  name: PropTypes.string.isRequired,
  noErrorsDescription: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default Wysiwyg;
