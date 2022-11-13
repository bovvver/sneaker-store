import React from "react";
import PropTypes from "prop-types";
import { Header } from "./SectionHeader.styles";

const SectionHeader = ({ title }) => {
  return <Header>{title}</Header>;
};

SectionHeader.propTypes = {
  title: PropTypes.string,
};

export default SectionHeader;
