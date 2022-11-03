import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./catApp.module.css";
import CatList from "./components/CatList";
import CatDetails from "./components/CatDetails";
import FormForCat from "./components/FormForCat";

import Example1 from "./components/HOCexample/Example1";
import Example2 from "./components/HOCexample/Example2";
import Example3 from "./components/HOCexample/Example3";
// import { useEffect, useState } from "react";

const url = `https://serene-mesa-35124.herokuapp.com/files`;

const CatApp = () => {
  // class CatApp extends React.Component {
  // state = {
  //   cats: null,
  //   selectedCat: null,
  //   catDetail: null,
  // };

  const [cats, setCats] = useState(null);
  const [selectedCat, setSelectedCat] = useState(null);
  const [catDetail, setCatDetail] = useState(null);

  // componentDidMount() {
  //   axios.get(`${url}/cats/list.json`).then((response) => {
  //     const cats = response.data.data;
  //     this.setState({ cats });
  //   });
  // }

  useEffect(() => {
    axios.get(`${url}/cats/list.json`).then((response) => {
      const cats = response.data.data;
      // this.setState({ cats });

      setCats(cats);
    });
  }, []);

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState);
  //   if (this.state.selectedCat !== prevState.selectedCat) {
  //     this.fetchData(this.state.selectedCat);
  //   }
  // }

  useEffect(() => {
    if (selectedCat !== null) {
      fetchData(selectedCat);
    }
  }, [selectedCat]);

  const fetchData = (path) => {
    console.log("fetch");

    axios.get(`${url}${path}`).then((response) => {
      const catDetail = response.data;
      // this.setState({ catDetail });
      setCatDetail(catDetail);
    });
  };

  const toBuy = (id) => {
    const selectedCat = cats.filter((cat) => {
      if (cat.id === id) {
        return cat;
      }
      return null;
    });
    console.log(selectedCat);
    // this.setState({selectedCat: selectedCat[0]})
    // this.setState({ selectedCat: selectedCat[0].more });

    setSelectedCat(selectedCat[0].more);
  };

  // render() {
  //   const { cats, catDetail } = this.state;
  //   console.log(catDetail)

  if (!cats) {
    return <h1>Загрузка</h1>;
  }
  return (
    <div className={styles.app}>
      <div className={styles.mainBlock}>
        <CatList cats={cats} toBuy={toBuy} />
      </div>
      <br />
      {/* условный рендеринг */}
      {catDetail && <CatDetails catDetail={catDetail} url={url} />}
      <br />
      <FormForCat />
      <Example1 />
      <br />
      <Example2 />
      <br />
      <Example3 />
      <br />
    </div>
  );
};

export default CatApp;
